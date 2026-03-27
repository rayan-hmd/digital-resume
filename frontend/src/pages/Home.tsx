import React from 'react';
import {
  ArrowRight,
  Terminal,
  Cpu,
  Shield,
  Database,
  Cloud,
  Download,
  Briefcase,
  GraduationCap,
  Code2,
  Mail,
  Github,
  Linkedin,
} from 'lucide-react';
import { PROJECTS, LEARNING_TOPICS, SKILLS, EXPERIENCES, EDUCATION } from '../constants';
import { useVisitorCounter } from '../hooks/useVisitorCounter';

export const Home = () => {
  const { count, loading, error } = useVisitorCounter();

  const highlightCards = [
    {
      title: 'Cloud & IaC',
      description: 'Building AWS projects with Terraform, serverless services, and production-style delivery.',
      icon: Cloud,
      accent: 'text-indigo-400',
    },
    {
      title: 'Automation',
      description: 'Using GitHub Actions and CI/CD to turn manual deployment into repeatable workflows.',
      icon: Cpu,
      accent: 'text-purple-400',
    },
    {
      title: 'Security Mindset',
      description: 'Bringing cyber assurance thinking into IAM, secure configuration, and cloud architecture.',
      icon: Shield,
      accent: 'text-pink-400',
    },
    {
      title: 'Data & APIs',
      description: 'Connecting frontend experiences to serverless backends with Lambda, API Gateway, and DynamoDB.',
      icon: Database,
      accent: 'text-cyan-400',
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative flex flex-col gap-20 py-12 md:gap-24 md:py-20">
      <div className="bg-blob top-[-10%] left-[-10%] h-[500px] w-[500px] bg-indigo-500"></div>
      <div className="bg-blob top-[20%] right-[-10%] h-[600px] w-[600px] bg-purple-500 delay-700"></div>
      <div className="bg-blob bottom-[10%] left-[20%] h-[400px] w-[400px] bg-pink-500 delay-1000"></div>

      <section className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300 backdrop-blur-sm">
          <span className="mr-2 flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
          Available for new opportunities
        </div>
        <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-400 backdrop-blur-sm">
          Melbourne, Australia
        </div>
        <h1 className="text-5xl font-black tracking-tight text-white sm:text-7xl md:text-8xl">
          <span className="sm:whitespace-nowrap">Rayan </span>
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent sm:whitespace-nowrap">
            Hameed
          </span>
        </h1>
        <p className="mt-6 text-base font-semibold uppercase tracking-[0.28em] text-zinc-400 sm:text-sm">
          Aspiring Cloud &amp; DevOps Engineer
        </p>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
          I build cloud-native projects with AWS, Terraform, and CI/CD, with a growing focus on
          secure infrastructure, automation, and practical DevOps engineering.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => scrollToSection('experience')}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-400 hover:scale-105 active:scale-95"
          >
            View Experience <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:shadow-xl hover:shadow-black/50 hover:scale-105 active:scale-95"
          >
            Technical Skills
          </button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 font-mono text-xs text-zinc-500">
          <Terminal className="h-3 w-3" />
          <span className="rounded border border-white/5 bg-zinc-900 px-2 py-1">
            System.Visits: {loading ? '...' : error ? 'unavailable' : count ?? 'unknown'}
          </span>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {highlightCards.map(({ title, description, icon: Icon, accent }) => (
            <div key={title} className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1">
              <div className={`mb-4 inline-flex rounded-xl bg-white/5 p-3 ${accent}`}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass rounded-3xl p-8 md:p-10">
            <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-400">
              About
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Building practical cloud projects that prove what I can do.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-400">
              I am an IT student specialising in Cyber Assurance who enjoys turning concepts into
              working systems. My main interests sit at the intersection of cloud engineering,
              automation, and security-minded design, where I can use AWS, Terraform, and CI/CD to
              build projects that are both useful and production-aware.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-400">
              I am especially motivated by the hands-on side of engineering: shipping
              infrastructure, troubleshooting deployment issues, improving reliability, and
              learning how modern cloud systems are designed and operated in the real world.
            </p>
          </div>

          <div className="glass rounded-3xl p-8 md:p-10">
            <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-400">
              Current Focus
            </div>
            <div className="space-y-4">
              {LEARNING_TOPICS.map((topic) => (
                <div key={topic} className="rounded-2xl border border-white/5 bg-white/5 px-4 py-4 text-sm font-medium text-zinc-300">
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-white">Selected Projects</h2>
          <p className="mt-2 max-w-2xl text-zinc-400">
            Technical case studies that show how I approach cloud infrastructure, automation, and
            end-to-end delivery.
          </p>
        </div>
        <div className="space-y-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group glass rounded-3xl p-8 transition-all hover:shadow-2xl hover:shadow-purple-500/5 md:p-10">
              <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 ring-1 ring-white/5">
                    <Cloud className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-400">{project.shortDescription}</p>
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-start rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Github className="h-4 w-4" />
                  View Repo
                </a>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                <div className="rounded-2xl border border-white/5 bg-white/5 p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Problem</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-300">{project.problem}</p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-white/5 p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Solution</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-300">{project.solution}</p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-white/5 p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Impact</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-300">{project.impact}</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-dashed border-white/10 bg-zinc-950/40 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Challenge</p>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{project.challenges}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="rounded-lg border border-white/5 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="mb-12 flex items-center gap-3 border-b border-white/5 pb-4">
          <div className="rounded-lg bg-indigo-500/10 p-2 text-indigo-400">
            <Code2 className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="glass rounded-2xl p-8 transition-transform hover:-translate-y-1">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-indigo-400">Cloud Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.cloud.map((skill) => (
                <span key={skill} className="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300 shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="glass rounded-2xl p-8 transition-transform hover:-translate-y-1">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-purple-400">Programming</h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.programming.map((skill) => (
                <span key={skill} className="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300 shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="glass rounded-2xl p-8 transition-transform hover:-translate-y-1">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-pink-400">Tools & DevOps</h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.tools.map((skill) => (
                <span key={skill} className="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300 shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="glass rounded-2xl p-8 transition-transform hover:-translate-y-1">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-cyan-400">Security</h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.security.map((skill) => (
                <span key={skill} className="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300 shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="glass rounded-2xl p-8 transition-transform hover:-translate-y-1">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-emerald-400">Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.frameworks.map((skill) => (
                <span key={skill} className="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300 shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="mb-12 flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-indigo-500/10 p-2 text-indigo-400">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-white">Education</h2>
          </div>
          <button className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-5 py-2.5 text-xs font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:shadow-lg">
            <Download className="h-3 w-3" /> Resume PDF
          </button>
        </div>
        <div className="space-y-12">
          {EDUCATION.map((edu) => (
            <div key={edu.school} className="glass relative rounded-2xl p-8 transition-all hover:shadow-2xl hover:shadow-indigo-500/5">
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-sm font-semibold text-indigo-400">{edu.school}</p>
                </div>
                <span className="inline-block rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400">
                  {edu.period}
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {edu.description.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="mb-12 flex items-center gap-3 border-b border-white/5 pb-4">
          <div className="rounded-lg bg-purple-500/10 p-2 text-purple-400">
            <Briefcase className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold text-white">Professional Experience</h2>
        </div>
        <div className="space-y-12">
          {EXPERIENCES.map((exp) => (
            <div key={exp.company} className="glass relative rounded-2xl p-8 transition-all hover:shadow-2xl hover:shadow-indigo-500/5">
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-sm font-semibold text-indigo-400">{exp.company}</p>
                </div>
                <span className="inline-block rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400">
                  {exp.period}
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass rounded-2xl p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">What I Bring</p>
            <p className="mt-4 text-base leading-8 text-zinc-300">
              A practical mindset shaped by building projects end to end, not just studying the ideas behind them.
            </p>
          </div>
          <div className="glass rounded-2xl p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">How I Work</p>
            <p className="mt-4 text-base leading-8 text-zinc-300">
              I like shipping in small increments, documenting decisions clearly, and improving reliability as I go.
            </p>
          </div>
          <div className="glass rounded-2xl p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">What I&apos;m Looking For</p>
            <p className="mt-4 text-base leading-8 text-zinc-300">
              Opportunities to grow in cloud, DevOps, and security-focused engineering through hands-on work.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-8 text-white backdrop-blur-xl md:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl"></div>

          <div className="relative flex flex-col items-center justify-between gap-10 md:flex-row">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-3xl font-bold sm:text-4xl">Let&apos;s build something resilient.</h2>
              <p className="mt-4 text-lg leading-8 text-zinc-400">
                I&apos;m open to cloud, DevOps, and security-focused opportunities where I can keep
                learning while contributing to reliable systems and thoughtful engineering.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:rayanhameedd@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-zinc-950 transition-all hover:bg-zinc-100 hover:scale-105 active:scale-95">
                <Mail className="h-5 w-5" /> Email Me
              </a>
              <a href="https://linkedin.com/in/rayan-hameed" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/10 hover:scale-105 active:scale-95">
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
