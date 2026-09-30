import React, { useState, useEffect } from 'react';
import { BookOpen, Clock, ArrowRight, CheckCircle2, X, Filter } from 'lucide-react';
import { INSIGHTS_ARTICLES } from '../data/citsData';
import { InsightArticle } from '../types';

interface InsightsViewProps {
  onOpenConsultation: () => void;
}

export const InsightsView: React.FC<InsightsViewProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeArticle) {
        setActiveArticle(null);
      }
    };
    if (activeArticle) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeArticle]);

  const categories = [
    'All',
    'Cybersecurity',
    'Business Continuity',
    'IT Infrastructure',
    'Digital Transformation',
    'Enterprise Technology',
    'Technology Trends'
  ];

  const filteredArticles = selectedCategory === 'All'
    ? INSIGHTS_ARTICLES
    : INSIGHTS_ARTICLES.filter(a => a.category === selectedCategory);

  const getCategoryStyles = (category: string, isActive: boolean) => {
    switch (category) {
      case 'Cybersecurity':
        return isActive
          ? 'bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-sm shadow-rose-600/20 ring-1 ring-rose-600'
          : 'bg-rose-50/70 text-rose-900 hover:bg-rose-100/80 border border-rose-200/80';
      case 'Business Continuity':
        return isActive
          ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-sm shadow-amber-600/20 ring-1 ring-amber-600'
          : 'bg-amber-50/70 text-amber-900 hover:bg-amber-100/80 border border-amber-200/80';
      case 'IT Infrastructure':
        return isActive
          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-600/20 ring-1 ring-blue-600'
          : 'bg-blue-50/70 text-blue-900 hover:bg-blue-100/80 border border-blue-200/80';
      case 'Digital Transformation':
        return isActive
          ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-sm shadow-purple-600/20 ring-1 ring-purple-600'
          : 'bg-purple-50/70 text-purple-900 hover:bg-purple-100/80 border border-purple-200/80';
      case 'Enterprise Technology':
        return isActive
          ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-sm shadow-emerald-600/20 ring-1 ring-emerald-600'
          : 'bg-emerald-50/70 text-emerald-900 hover:bg-emerald-100/80 border border-emerald-200/80';
      case 'Technology Trends':
        return isActive
          ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-sm shadow-cyan-600/20 ring-1 ring-cyan-600'
          : 'bg-cyan-50/70 text-cyan-900 hover:bg-cyan-100/80 border border-cyan-200/80';
      default:
        return isActive
          ? 'bg-slate-900 text-white shadow-sm ring-1 ring-slate-800'
          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100';
    }
  };

  return (
    <div className="bg-[#fafafc] min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#090f1d] text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
              CITS Insights &bull; Executive Publications
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
              Intelligence on cybersecurity,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">
                continuity and architecture.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Practical perspectives on securing enterprise infrastructure, evaluating recovery objectives, and digitising workflows in East and Southern Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Articles Directory */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-slate-200 mb-12">
          <span className="text-xs font-mono text-slate-400 uppercase font-semibold flex items-center gap-1.5 mr-2">
            <Filter className="w-3.5 h-3.5" />
            Category:
          </span>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-150 cursor-pointer ${getCategoryStyles(cat, isActive)}`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="bg-white border border-slate-200 rounded-2xl p-7 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-mono text-slate-500">
                  <span className="text-sky-600 font-bold uppercase">{article.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors mt-4 leading-snug">
                  {article.title}
                </h3>

                <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-sky-600">
                <span className="font-mono text-slate-400 font-normal">{article.date}</span>
                <div className="flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </section>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div 
          onClick={() => setActiveArticle(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-slate-200 cursor-default"
          >
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-500 pb-3 border-b border-slate-100">
              <span className="text-sky-600 font-bold uppercase">{activeArticle.category}</span>
              <span>•</span>
              <span>{activeArticle.date}</span>
              <span>•</span>
              <span>{activeArticle.readTime}</span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 mt-4 leading-tight">
              {activeArticle.title}
            </h3>
            <p className="text-xs text-slate-500 font-mono mt-1">
              By {activeArticle.author}
            </p>

            <div className="my-6 p-4 rounded-xl bg-sky-50 border border-sky-100 space-y-2">
              <span className="text-xs font-mono uppercase font-bold text-sky-800">
                Key Strategic Takeaways
              </span>
              <ul className="text-xs text-slate-700 space-y-1.5">
                {activeArticle.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => {
                  setActiveArticle(null);
                  onOpenConsultation();
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-sky-600 rounded-lg hover:bg-sky-500"
              >
                Discuss Architecture with Author
              </button>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
