import React from 'react';
import { Github } from 'lucide-react';
import { PROJECTS } from '../constants';

export const Projects = () => {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center px-4 py-12 sm:px-6 lg:px-8 md:py-20">
      <div className="mb-10 w-full max-w-3xl text-center sm:text-left">
        <p className="departure-mono text-sm font-semibold uppercase tracking-[0.24em] text-zinc-400">Projects</p>
        <h1 className="redaction mt-3 text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[0.95] tracking-[-0.02em] text-white">
          My Projects
        </h1>
        <p className="mt-4 text-base leading-7 text-zinc-400">
          Some stuff I built.
        </p>
      </div>

      <div className="w-full space-y-6">
        {PROJECTS.map((project) => (
          <article key={project.id} className="border border-white/10 bg-zinc-950/50 p-6 backdrop-blur-none">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="departure-mono text-lg font-semibold uppercase tracking-[0.2em] text-zinc-200">{project.title}</h2>
                <p className="mt-2 text-sm leading-7 text-zinc-400">{project.shortDescription}</p>
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start px-3 py-2 text-sm text-zinc-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                <Github className="h-4 w-4" /> View on GitHub
              </a>
            </div>

            <p className="mt-5 text-sm leading-7 text-zinc-300">{project.fullDescription}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-zinc-400">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
