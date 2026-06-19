import { X, ArrowRight } from 'lucide-react';
import { ProjectType } from '../data/projectsData';

export default function ProjectModal({ project, onClose }: { project: ProjectType, onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-brand-navy/60 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose}></div>
      <div className="bg-white border-[3px] border-brand-navy shadow-[12px_12px_0px_0px_#0F172A] rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative z-10 animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 bg-brand-navy text-white p-2 rounded-full border-2 border-brand-navy hover:bg-brand-purple transition-colors">
          <X size={20} strokeWidth={3} />
        </button>
        <div className="w-full h-64 md:h-80 border-b-[3px] border-brand-navy bg-brand-bg flex items-center justify-center overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
        </div>
        <div className="p-8 md:p-10">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-4xl font-extrabold text-brand-navy tracking-tight">{project.title}</h2>
            <span className="px-3 py-1 bg-brand-blue text-white text-xs font-bold uppercase rounded-full border-2 border-brand-navy">{project.category}</span>
          </div>
          <p className="text-brand-navy/70 text-lg mb-8 font-medium leading-relaxed">{project.description}</p>
          <button onClick={onClose} className="neo-btn-blue px-8 py-3.5 flex items-center gap-2">
            Kembali Ke List <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
