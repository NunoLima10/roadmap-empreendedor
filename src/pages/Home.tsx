import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { mockRoadmaps } from '../data/mockData';

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRoadmaps = mockRoadmaps.filter(r => 
    r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-12">
      <section className="text-center space-y-4 py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Master any skill with <br/>
          <span className="text-blue-600">interactive roadmaps</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Community-driven learning paths for developers, entrepreneurs, and life-long learners.
        </p>
        
        <div className="max-w-md mx-auto relative mt-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input 
            type="text"
            placeholder="Search roadmaps (e.g., Frontend, Startup)..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRoadmaps.map((roadmap) => (
          <Link 
            key={roadmap.id} 
            to={`/roadmap/${roadmap.id}`}
            className="group relative flex flex-col p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                roadmap.category === 'Technology' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
              }`}>
                {roadmap.category}
              </span>
              <span className="text-xs text-slate-500 font-medium">{roadmap.level}</span>
            </div>
            
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
              {roadmap.title}
            </h3>
            
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 flex-1">
              {roadmap.description}
            </p>
            
            <div className="flex items-center text-blue-600 font-semibold text-sm mt-auto">
              Start Roadmap <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};
