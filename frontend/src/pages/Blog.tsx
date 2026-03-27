import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

export const Blog = () => {
  return (
    <div className="relative mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 md:py-20">
      {/* Background Blobs */}
      <div className="bg-blob top-[10%] right-[-20%] h-[400px] w-[400px] bg-indigo-500"></div>
      <div className="bg-blob bottom-[10%] left-[-20%] h-[400px] w-[400px] bg-pink-500"></div>

      <div className="relative mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Technical Notes</h1>
        <p className="mt-4 text-lg text-zinc-400">
          Sharing my journey through cloud architecture, automation, and systems engineering.
        </p>
      </div>

      <div className="relative space-y-12">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="group glass relative flex flex-col items-start p-8 rounded-2xl transition-all hover:shadow-2xl hover:shadow-indigo-500/5">
            <div className="mb-4 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-indigo-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-3.5 w-3.5" />
                {post.tags.join(', ')}
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
              <Link to={`/notes/${post.id}`}>
                {post.title}
              </Link>
            </h2>
            <p className="mt-4 text-base text-zinc-400 leading-relaxed">
              {post.excerpt}
            </p>
            <div className="mt-8 flex items-center gap-2 text-sm font-bold text-white">
              Read article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
