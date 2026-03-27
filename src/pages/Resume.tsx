import { ExternalLink, FileDown } from 'lucide-react';
import { usePortfolioContent } from '../lib/usePortfolioContent';

export default function ResumePage() {
  const { resume } = usePortfolioContent();

  return (
    <div className="pt-24 pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-10">
        <h1 className="text-5xl font-bold mb-4">Resume</h1>
        <p className="text-muted-foreground max-w-2xl mb-6">{resume.description}</p>
        <div className="flex flex-wrap gap-3">
          <a href={resume.resumeUrl} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-apple-blue to-apple-purple text-white inline-flex items-center gap-2"><ExternalLink className="w-4 h-4" /> Open Resume</a>
          <a href={resume.resumeUrl} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-full border border-border inline-flex items-center gap-2"><FileDown className="w-4 h-4" /> Download / Save</a>
        </div>
      </section>

      {resume.embedUrl ? (
        <section className="rounded-2xl overflow-hidden border border-border bg-card">
          <iframe title={resume.title} src={resume.embedUrl} className="w-full h-[780px]" />
        </section>
      ) : (
        <section className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-semibold mb-2">Embed unavailable</h2>
          <p className="text-sm text-muted-foreground">Use Open Resume above. Add an embed URL in Admin → Resume to enable in-page viewing.</p>
        </section>
      )}
    </div>
  );
}
