import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { projectsData, ProjectType } from '../data/projectsData';
import ProjectModal from '../components/ProjectModal';
export default function AllProjects() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  return (<main className="pt-[160px] max-w-7xl mx-auto px-6 pb-20 min-h-screen"><h1 className="text-6xl font-extrabold text-brand-navy mb-8">Semua Proyek</h1><div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">{projectsData.map(p => (<article key={p.id} onClick={() => setSelectedProject(p)} className="neo-card cursor-pointer"><div className="h-64 border-b-[3px] border-brand-navy bg-brand-bg"><img src={p.image} className="w-full h-full object-cover filter grayscale" /></div><div className="p-6"><h3 className="text-2xl font-extrabold text-brand-navy">{p.title}</h3></div></article>))}</div>{selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}</main>);
}