import React, { useState } from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  Calendar, 
  Clock, 
  FileText, 
  Layers, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  X
} from 'lucide-react';
import { INSIGHTS_ARTICLES, ANONYMIZED_CASE_STUDIES } from '../data/citsData';
import { InsightArticle, CaseStudy } from '../types';

interface InsightsAndCaseStudiesSectionProps {
  onNavigateToInsights: () => void;
  onNavigateToCaseStudies: () => void;
}

export const InsightsAndCaseStudiesSection: React.FC<InsightsAndCaseStudiesSectionProps> = ({
  onNavigateToInsights,
  onNavigateToCaseStudies,
}) => {
  const [activeArticleModal, setActiveArticleModal] = useState<InsightArticle | null>(null);
  const [activeCaseModal, setActiveCaseModal] = useState<CaseStudy | null>(null);

  return (
    <>
      {/* 21. CITS INSIGHTS */}
      <section className="py-24 bg-[#fafafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
                <BookOpen className="w-3.5 h-3.5 text-sky-600" />
                <span>Executive Briefings & Thought Leadership</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 uppercase">
                CITS Insights.
              </h2>
            </div>
            <button
              onClick={onNavigateToInsights}
              className="text-sm font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1.5 self-start md:self-auto group"
            >
              <span>Explore All Publications</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Editorial Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INSIGHTS_ARTICLES.map((article) => (
              <article
                key={article.id}
                onClick={() => setActiveArticleModal(article)}
                className="bg-white border border-slate-200/90 rounded-2xl p-7 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 text-xs font-mono text-slate-500">
                    <span className="text-sky-600 font-semibold uppercase">{article.category}</span>
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

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-sky-600 transition-colors">
                  <span className="font-mono text-slate-400 font-normal">{article.date}</span>
                  <div className="flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* 22. ANONYMIZED CASE STUDIES */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
                <FileText className="w-3.5 h-3.5 text-sky-600" />
                <span>Architecture In Action</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 uppercase">
                Real-world deployments.
              </h2>
            </div>
            <button
              onClick={onNavigateToCaseStudies}
              className="text-sm font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1.5 self-start md:self-auto group"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Anonymized Case Study Cards (Challenge, Approach, Solution, Outcome) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ANONYMIZED_CASE_STUDIES.map((study) => (
              <div
                key={study.id}
                onClick={() => setActiveCaseModal(study)}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-7 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs font-mono">
                    <span className="text-sky-700 font-semibold">{study.sector}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 text-slate-600 uppercase">
                      Anonymized
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mt-4 group-hover:text-sky-600 transition-colors">
                    {study.title}
                  </h3>

                  <div className="mt-4 space-y-3 text-xs">
                    <div>
                      <span className="font-mono text-slate-500 uppercase font-semibold block text-[10px]">
                        The Challenge
                      </span>
                      <p className="text-slate-700 line-clamp-2 mt-0.5">{study.challenge}</p>
                    </div>
                    <div>
                      <span className="font-mono text-emerald-700 uppercase font-semibold block text-[10px]">
                        The Outcome
                      </span>
                      <p className="text-slate-800 font-medium line-clamp-2 mt-0.5">{study.outcome}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-sky-600">
                  <span className="text-slate-400 font-mono text-[11px]">{study.technologies.slice(0, 2).join(' • ')}</span>
                  <div className="flex items-center gap-1">
                    <span>Inspect Case</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center text-xs font-mono text-slate-400">
            * Client identities anonymized pursuant to non-disclosure compliance and security sovereignty.
          </div>

        </div>
      </section>

      {/* Article Modal */}
      {activeArticleModal && (
        <div 
          onClick={() => setActiveArticleModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-slate-200 cursor-default"
          >
            <button
              onClick={() => setActiveArticleModal(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-500 pb-3 border-b border-slate-100">
              <span className="text-sky-600 font-bold uppercase">{activeArticleModal.category}</span>
              <span>•</span>
              <span>{activeArticleModal.date}</span>
              <span>•</span>
              <span>{activeArticleModal.readTime}</span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 mt-4 leading-tight">
              {activeArticleModal.title}
            </h3>
            <p className="text-xs text-slate-500 font-mono mt-1">
              By {activeArticleModal.author}
            </p>

            <div className="my-6 p-4 rounded-xl bg-sky-50 border border-sky-100 space-y-2">
              <span className="text-xs font-mono uppercase font-bold text-sky-800">
                Key Strategic Takeaways
              </span>
              <ul className="text-xs text-slate-700 space-y-1.5">
                {activeArticleModal.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              {activeArticleModal.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">Complete IT Solutions Uganda Limited</span>
              <button
                onClick={() => setActiveArticleModal(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Case Study Modal */}
      {activeCaseModal && (
        <div 
          onClick={() => setActiveCaseModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-slate-200 cursor-default"
          >
            <button
              onClick={() => setActiveCaseModal(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-sky-600 font-bold uppercase pb-3 border-b border-slate-100">
              <span>{activeCaseModal.sector}</span>
              <span>•</span>
              <span className="text-slate-500 font-normal">Anonymized Case Architecture</span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 mt-4 leading-tight">
              {activeCaseModal.title}
            </h3>
            <p className="text-xs font-mono text-slate-500 mt-1">
              Organisation Profile: {activeCaseModal.anonymizedClient}
            </p>

            <div className="mt-6 space-y-4 text-sm">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-mono text-xs text-slate-600 font-bold uppercase block mb-1">
                  1. The Operational Challenge
                </span>
                <p className="text-slate-700">{activeCaseModal.challenge}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-mono text-xs text-slate-600 font-bold uppercase block mb-1">
                  2. CITS Engineering Approach
                </span>
                <p className="text-slate-700">{activeCaseModal.approach}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-mono text-xs text-slate-600 font-bold uppercase block mb-1">
                  3. Deployed Technical Solution
                </span>
                <p className="text-slate-700">{activeCaseModal.solution}</p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                <span className="font-mono text-xs text-emerald-800 font-bold uppercase block mb-1">
                  4. Measured Business Outcome
                </span>
                <p className="text-emerald-950 font-medium">{activeCaseModal.outcome}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {activeCaseModal.technologies.map((t, idx) => (
                  <span key={idx} className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-100 text-slate-700">
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setActiveCaseModal(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800"
              >
                Close Case Details
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
