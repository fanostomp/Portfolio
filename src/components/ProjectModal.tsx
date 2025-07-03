// src/components/ProjectModal.tsx
'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';
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
        .then(res => {
          if (!res.ok) throw new Error('README not found');
          return res.text();
        })
        .then(text => setReadmeContent(text))
        .catch(() => setError("Could not fetch README.md from GitHub."))
        .finally(() => setIsLoading(false));
    }
  }, [project]);

  // Helper function to render the correct content view
  const renderContent = () => {
    if (!project) return null;
    
    if (isLoading) return <div className="flex justify-center items-center h-full"><p>Fetching content from GitHub...</p></div>;
    if (error) return <div className="flex justify-center items-center h-full"><p className="text-red-500">{error}</p></div>;

    switch (project.contentType) {
      case 'markdown':
        return (
          <div className="h-full overflow-y-auto pr-2">
            <article className="prose prose-invert max-w-none">
              <ReactMarkdown>{readmeContent}</ReactMarkdown>
            </article>
          </div>
        );
      case 'pdf':
        return (
          <iframe 
            src={project.contentUrl} 
            className="w-full h-full border-none"
            title={`${project.title} PDF`}
          />
        );
      default:
        return <p className="text-red-500">Unsupported content type.</p>;
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
          leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
              leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-lg bg-[#0d0d0d] border border-gray-700 p-6 text-left align-middle shadow-xl flex flex-col">
                <Dialog.Title as="h3" className="text-2xl font-bold leading-6 text-white mb-4 border-b border-gray-700 pb-4 flex-shrink-0">
                  {project?.title} - {project?.contentType === 'markdown' ? 'README.md' : 'Report.pdf'}
                </Dialog.Title>

                {}
                <div className="flex-grow h-[60vh]">
                  {renderContent()}
                </div>

                <div className="mt-6 flex justify-end gap-4 flex-shrink-0">
                  <button type="button" onClick={onClose} className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600">
                    Close
                  </button>
                  <a href={project?.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
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