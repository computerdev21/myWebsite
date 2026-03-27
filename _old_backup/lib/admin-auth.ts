import crypto from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";

const COOKIE_NAME = "portfolio_admin_session";

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || "change-me";
}

function createSessionValue() {
  return crypto
    .createHash("sha256")
    .update(`portfolio-admin:${getAdminPassword()}`)
    .digest("hex");
}

function timingSafeEquals(a: string, b: string) {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);

  if (aBuffer.length !== bBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(aBuffer, bBuffer);
}

export function isDefaultAdminPassword() {
  return getAdminPassword() === "change-me";
}

export function isAuthorizedRequest(req: NextApiRequest) {
  const cookieHeader = req.headers.cookie || "";
  const cookies = Object.fromEntries(
    cookieHeader
      .split(";")
      .map((entry) => entry.trim())
      .filter(Boolean)
      .map((entry) => {
        const [key, ...value] = entry.split("=");
        return [key, decodeURIComponent(value.join("="))];
      })
  );

  const session = cookies[COOKIE_NAME];

  if (!session) {
    return false;
  }

  return timingSafeEquals(session, createSessionValue());
}

export function setAuthorizedSession(res: NextApiResponse) {
  const oneWeek = 60 * 60 * 24 * 7;

  res.setHeader(
    "Set-Cookie",
    `${COOKIE_NAME}=${createSessionValue()}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${oneWeek}${
      process.env.NODE_ENV === "production" ? "; Secure" : ""
    }`
  );
}

export function clearAuthorizedSession(res: NextApiResponse) {
  res.setHeader(
    "Set-Cookie",
    `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${
      process.env.NODE_ENV === "production" ? "; Secure" : ""
    }`
  );
}

export function assertAuthorized(
  req: NextApiRequest,
  res: NextApiResponse
): boolean {
  if (isAuthorizedRequest(req)) {
    return true;
  }

  res.status(401).json({ error: "Unauthorized" });
  return false;
}

export function isValidAdminPassword(candidate: string) {
  return candidate === getAdminPassword();
}
