import { useEffect, useMemo, useState } from 'react';
import { getPortfolioContent, type PortfolioContent } from './portfolio-content';

export const usePortfolioContent = () => {
  const [content, setContent] = useState<PortfolioContent>(() => getPortfolioContent());

  useEffect(() => {
    const update = () => setContent(getPortfolioContent());
    window.addEventListener('storage', update);
    window.addEventListener('portfolio-content-updated', update);
    return () => {
      window.removeEventListener('storage', update);
      window.removeEventListener('portfolio-content-updated', update);
    };
  }, []);

  return useMemo(() => content, [content]);
};
