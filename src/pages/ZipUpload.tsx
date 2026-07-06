import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, FileArchive, Github, UploadCloud } from 'lucide-react';

type UploadStatus = 'idle' | 'uploading' | 'success' | 'error';
type SupportedExtension = 'pdf' | 'zip';

const REPOSITORY = 'computerdev21/myWebsite';
const DEFAULT_BRANCH = 'main';
const MAX_FILE_SIZE_BYTES = 100 * 1024 * 1024;

function getSupportedExtension(file: File | null): SupportedExtension | null {
  if (!file) return null;

  const lowerName = file.name.toLowerCase();

  if (file.type === 'application/pdf' || lowerName.endsWith('.pdf')) return 'pdf';
  if (
    file.type === 'application/zip' ||
    file.type === 'application/x-zip-compressed' ||
    lowerName.endsWith('.zip')
  ) {
    return 'zip';
  }

  return null;
}

function getUploadDirectory(extension: SupportedExtension | null) {
  if (extension === 'zip') return 'uploads/zips';
  return 'uploads/pdfs';
}

function sanitizeFileName(fileName: string) {
  return fileName
    .replace(/\.(pdf|zip)$/i, '')
    .toLowerCase()
    .replace(/[^a-z0-9-_]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'upload';
}

function arrayBufferToBase64(buffer: ArrayBuffer) {
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;
  let binary = '';

  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, i + chunkSize);
    binary += String.fromCharCode(...chunk);
  }

  return window.btoa(binary);
}

export default function ZipUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [githubToken, setGithubToken] = useState('');
  const [branch, setBranch] = useState(DEFAULT_BRANCH);
  const [status, setStatus] = useState<UploadStatus>('idle');
  const [message, setMessage] = useState('');
  const [uploadedUrl, setUploadedUrl] = useState('');

  const selectedExtension = getSupportedExtension(selectedFile);

  const targetPath = useMemo(() => {
    const extension = getSupportedExtension(selectedFile);
    const uploadDirectory = getUploadDirectory(extension);

    if (!selectedFile || !extension) return `${uploadDirectory}/your-file.pdf-or.zip`;

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    return `${uploadDirectory}/${timestamp}-${sanitizeFileName(selectedFile.name)}.${extension}`;
  }, [selectedFile]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    setStatus('idle');
    setMessage('');
    setUploadedUrl('');
  };

  const handleUpload = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!selectedFile) {
      setStatus('error');
      setMessage('Please choose a PDF or ZIP file first.');
      return;
    }

    const extension = getSupportedExtension(selectedFile);

    if (!extension) {
      setStatus('error');
      setMessage('Only PDF and ZIP files are supported for this upload flow.');
      return;
    }

    if (selectedFile.size > MAX_FILE_SIZE_BYTES) {
      setStatus('error');
      setMessage('GitHub blocks files over 100 MB. Pick a smaller file or use approved enterprise storage for larger files.');
      return;
    }

    if (!githubToken.trim()) {
      setStatus('error');
      setMessage('Paste a GitHub fine-grained token with Contents: Read and write access.');
      return;
    }

    setStatus('uploading');
    setMessage(`Uploading ${extension.toUpperCase()} to GitHub...`);
    setUploadedUrl('');

    try {
      const content = arrayBufferToBase64(await selectedFile.arrayBuffer());
      const response = await fetch(`https://api.github.com/repos/${REPOSITORY}/contents/${targetPath}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${githubToken.trim()}`,
          Accept: 'application/vnd.github+json',
          'Content-Type': 'application/json',
          'X-GitHub-Api-Version': '2022-11-28',
        },
        body: JSON.stringify({
          message: `Upload ${selectedFile.name}`,
          content,
          branch: branch.trim() || DEFAULT_BRANCH,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || 'GitHub rejected the upload.');
      }

      setStatus('success');
      setMessage(`Upload complete. The ${extension.toUpperCase()} is now committed to GitHub.`);
      setUploadedUrl(data?.content?.html_url || `https://github.com/${REPOSITORY}/blob/${branch}/${targetPath}`);
      setSelectedFile(null);
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong during upload.');
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.45 }}
      className="min-h-screen pt-28 pb-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <section className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-apple-blue/10 text-apple-blue border border-apple-blue/20">
              <FileArchive className="w-4 h-4" />
              <span className="text-sm font-medium">GitHub File Intake</span>
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Upload approved PDFs and ZIPs straight into your repo.
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Pick a PDF or ZIP, paste a temporary GitHub token, and this page commits it to
                <span className="text-foreground font-medium"> {REPOSITORY}</span> under
                <span className="text-foreground font-medium"> uploads/pdfs</span> or
                <span className="text-foreground font-medium"> uploads/zips</span>.
              </p>
            </div>

            <form onSubmit={handleUpload} className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-soft space-y-6">
              <label className="block">
                <span className="text-sm font-medium text-muted-foreground">PDF or ZIP file</span>
                <div className="mt-2 border-2 border-dashed border-border rounded-2xl p-8 text-center bg-background/50 hover:border-apple-blue/50 transition-colors">
                  <input
                    type="file"
                    accept=".pdf,.zip,application/pdf,application/zip,application/x-zip-compressed"
                    onChange={handleFileChange}
                    className="sr-only"
                    id="file-upload-input"
                  />
                  <label htmlFor="file-upload-input" className="cursor-pointer flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-apple-blue/10 flex items-center justify-center text-apple-blue">
                      <UploadCloud className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {selectedFile ? selectedFile.name : 'Click to choose a PDF or ZIP file'}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Maximum file size: 100 MB{selectedExtension ? ` • Detected: ${selectedExtension.toUpperCase()}` : ''}
                      </p>
                    </div>
                  </label>
                </div>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-muted-foreground">GitHub token</span>
                <input
                  type="password"
                  value={githubToken}
                  onChange={(event) => setGithubToken(event.target.value)}
                  placeholder="github_pat_..."
                  className="mt-2 w-full p-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-apple-blue/40"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Use a fine-grained token scoped to this repo with Contents: Read and write. Do not save it in code.
                </p>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-muted-foreground">Target branch</span>
                <input
                  type="text"
                  value={branch}
                  onChange={(event) => setBranch(event.target.value)}
                  className="mt-2 w-full p-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-apple-blue/40"
                />
              </label>

              <div className="rounded-2xl bg-secondary/50 border border-border p-4">
                <p className="text-sm text-muted-foreground">Target path</p>
                <code className="text-sm break-all text-foreground">{targetPath}</code>
              </div>

              {message && (
                <div
                  className={`flex items-start gap-3 rounded-2xl border p-4 ${
                    status === 'success'
                      ? 'border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400'
                      : status === 'error'
                        ? 'border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400'
                        : 'border-border bg-secondary/50 text-muted-foreground'
                  }`}
                >
                  {status === 'success' ? <CheckCircle2 className="w-5 h-5 mt-0.5" /> : <AlertCircle className="w-5 h-5 mt-0.5" />}
                  <div>
                    <p className="text-sm font-medium">{message}</p>
                    {uploadedUrl && (
                      <a href={uploadedUrl} target="_blank" rel="noreferrer" className="text-sm underline underline-offset-4">
                        View uploaded file
                      </a>
                    )}
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'uploading'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-apple-blue to-apple-purple text-white font-medium disabled:opacity-60 disabled:cursor-not-allowed btn-glow"
              >
                <Github className="w-5 h-5" />
                {status === 'uploading' ? 'Uploading...' : 'Upload file to GitHub'}
              </button>
            </form>
          </section>

          <aside className="bg-secondary/40 border border-border rounded-3xl p-6 sm:p-8 space-y-5 sticky top-24">
            <h2 className="text-2xl font-semibold">How this works</h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                This is a frontend-only MVP. The token stays in the browser session and is sent directly to GitHub's Contents API.
              </p>
              <p>
                PDFs are saved under uploads/pdfs. ZIPs are saved under uploads/zips. Simple routing, clean file ops — no spreadsheet energy.
              </p>
              <p>
                For production, move this behind a backend or serverless function with authentication, rate limits, file scanning, and storage rules.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </motion.main>
  );
}
