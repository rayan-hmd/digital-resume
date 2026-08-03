import {
  ArrowUpRight,
  Github,
  Linkedin,
} from 'lucide-react';

import { AnimatedName } from '../components/AnimatedName';
import { SITE_LINKS } from '../constants';

export const Home = () => {
  return (
    <main className="relative grid min-h-svh place-items-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid w-full max-w-[85vw] -translate-y-8 gap-6 px-6 text-center">
        <div className="name-outer w-full">
          <AnimatedName className="name-inner mx-auto w-full max-w-[85vw] text-[clamp(3.5rem,10vw,12rem)] font-normal leading-[0.95] tracking-[-0.03em]">
            Rayan Hameed
          </AnimatedName>
        </div>

        <div className="departure-mono mx-auto mt-4 flex w-full max-w-[85vw] flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[clamp(1.25rem,1.3vw,1.5rem)] text-zinc-100 sm:mt-6">
          <a
            href={SITE_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            <Linkedin
              className="!h-9 !w-9 shrink-0"
              size={36}
              strokeWidth={1.8}
              aria-hidden="true"
            />
            <span>LinkedIn</span>
            <ArrowUpRight
              className="!h-6 !w-6 shrink-0"
              size={24}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </a>

          <a
            href={SITE_LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            <Github
              className="!h-9 !w-9 shrink-0"
              size={36}
              strokeWidth={1.8}
              aria-hidden="true"
            />
            <span>GitHub</span>
            <ArrowUpRight
              className="!h-6 !w-6 shrink-0"
              size={24}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </main>
  );
};