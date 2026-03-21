'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import type { Project } from '../data';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [readmeContent, setReadmeContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (project && project.contentType === 'markdown') {
      setIsLoading(true);
      setError('');
      fetch(project.contentUrl)
        .then((res) => {
          if (!res.ok) {
            throw new Error('README not found');
          }
          return res.text();
        })
        .then((text) => setReadmeContent(text))
        .catch(() => setError('Could not fetch the project documentation.'))
        .finally(() => setIsLoading(false));
    }
  }, [project]);

  const renderContent = () => {
    if (!project) return null;
    if (isLoading) return <div className="flex h-full items-center justify-center text-slate-300">Loading project content…</div>;
    if (error) return <div className="flex h-full items-center justify-center text-rose-400">{error}</div>;

    if (project.contentType === 'markdown') {
      return (
        <div className="h-full overflow-y-auto pr-2">
          <article className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-a:text-cyan-300">
            <ReactMarkdown>{readmeContent}</ReactMarkdown>
          </article>
        </div>
      );
    }

    if (project.contentType === 'pdf') {
      return <iframe src={project.contentUrl} className="h-full w-full rounded-2xl border border-white/8 bg-black/20" title={`${project.title} PDF`} />;
    }

    return <p className="text-rose-400">Unsupported content type.</p>;
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto p-4">
          <div className="flex min-h-full items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 translate-y-4 scale-95"
            >
              <Dialog.Panel className="flex w-full max-w-5xl flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#07101d] p-6 text-left shadow-[0_30px_120px_rgba(0,0,0,0.65)]">
                <div className="mb-5 flex flex-wrap items-start justify-between gap-4 border-b border-white/8 pb-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80">Project detail</p>
                    <Dialog.Title as="h3" className="mt-2 text-2xl font-semibold text-white">
                      {project?.title}
                    </Dialog.Title>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">{project?.description}</p>
                  </div>
                  <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                    {project?.contentType === 'markdown' ? 'README' : 'PDF report'}
                  </div>
                </div>

                <div className="h-[65vh] min-h-[400px]">{renderContent()}</div>

                <div className="mt-6 flex flex-wrap justify-end gap-3">
                  <button type="button" onClick={onClose} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10">
                    Close
                  </button>
                  <a
                    href={project?.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    View on GitHub
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
