import React from 'react';
import { BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

export const Blog = () => {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center px-4 py-12 sm:px-6 lg:px-8 md:py-20">
      <div className="mb-8 w-full max-w-3xl text-center sm:text-left">
        <p className="departure-mono text-sm font-semibold uppercase tracking-[0.24em] text-zinc-400">Blog</p>
        <h1 className="redaction mt-3 text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[0.95] tracking-[-0.02em] text-white">
          Short notes and learning updates.
        </h1>
        <p className="mt-4 text-base leading-7 text-zinc-400">
          I’ll post short updates here as I build and learn more about cloud, automation, and security.
        </p>
      </div>

      {BLOG_POSTS.length === 0 ? (
        <div className="w-full border border-white/10 bg-zinc-950/50 p-8 text-center">
          <BookOpen className="mx-auto h-8 w-8 text-zinc-500" />
          <p className="mt-4 text-sm text-zinc-400">Nothing here yet — check back soon.</p>
        </div>
      ) : (
        <div className="w-full space-y-4">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="border border-white/10 bg-zinc-950/50 p-6">
              <p className="departure-mono text-sm text-zinc-500">{post.date}</p>
              <h2 className="mt-2 text-xl font-semibold text-white">{post.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{post.excerpt}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};
