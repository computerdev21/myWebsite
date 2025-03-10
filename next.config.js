/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: false,
    },
    serverRuntimeConfig: {
        PROJECT_ROOT: __dirname,
    },
    images: {
        domains: [
            "localhost",
            "vercel.app",
            "ayedot.com",
            "ayex8storex9.s3.ap-south-1.amazonaws.com",
            "images.ctfassets.net",
            "uploads.toptal.io",
            "www.browserstack.com",
            "miro.medium.com",
            "hkandala.dev",
            "res.cloudinary.com",
            "img.icons8.com",
            "64.media.tumblr.com",
            "pbs.twimg.com",
            "i.pinimg.com",
            "media4.giphy.com",
            "i.makeagif.com",
            "i.ibb.co",
            "bourhaouta.gallerycdn.vsassets.io",
            "upload.wikimedia.org",
            "encrypted-tbn0.gstatic.com",
            "cdn.worldvectorlogo.com",
            "groq.com",
            "numpy.org"
        ],
    },
};
