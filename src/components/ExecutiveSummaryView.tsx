import React, { useState } from 'react';
import { 
  TRANSACTION_METADATA, 
  BOARD_APPROVAL_CONDITIONS, 
  LOCAL_COUNSEL_CHECKLIST_ITEMS,
  BoardApprovalCondition 
} from '../data/boardPackageData';
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  ShieldCheck, 
  FileText, 
  Cpu, 
  Scale, 
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface ExecutiveSummaryViewProps {
  onNavigateTab: (tab: 'matrix' | 'ip-memo' | 'tpi-checklist' | 'deadlock-simulator') => void;
}

export const ExecutiveSummaryView: React.FC<ExecutiveSummaryViewProps> = ({ onNavigateTab }) => {
  const [conditions, setConditions] = useState<BoardApprovalCondition[]>(BOARD_APPROVAL_CONDITIONS);
  const [expandedConditionId, setExpandedConditionId] = useState<string | null>('bac-1');
  const [activeChecklistFilter, setActiveChecklistFilter] = useState<'all' | 'satisfied' | 'pending'>('all');

  const toggleConditionStatus = (id: string) => {
    setConditions(prev => prev.map(c => {
      if (c.id === id) {
        const nextStatus = c.status === 'Satisfied' ? 'In Progress' : 'Satisfied';
        return { ...c, status: nextStatus };
      }
      return c;
    }));
  };

  const satisfiedCount = conditions.filter(c => c.status === 'Satisfied').length;
  const inProgressCount = conditions.filter(c => c.status !== 'Satisfied').length;

  const filteredConditions = conditions.filter(c => {
    if (activeChecklistFilter === 'satisfied') return c.status === 'Satisfied';
    if (activeChecklistFilter === 'pending') return c.status !== 'Satisfied';
    return true;
  });

  return (
    <div className="space-y-10 pb-16">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/boardroom_strategic_alliance_1791442550621.jpg" 
            alt="Cross-Border Strategic Alliance Boardroom" 
            className="h-full w-full object-cover opacity-25 filter brightness-75 contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 p-6 sm:p-10 lg:p-12 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="font-semibold text-blue-400 tracking-wider">BOARD / INVESTMENT COMMITTEE REVIEW</span>
            <span aria-hidden="true">·</span>
            <span>Date: {TRANSACTION_METADATA.date}</span>
            <span aria-hidden="true">·</span>
            <span className="text-amber-300">Confidential Package</span>
          </div>

          <div className="space-y-3 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {TRANSACTION_METADATA.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-light">
              {TRANSACTION_METADATA.subtitle}
            </p>
          </div>

          {/* Key Transaction Parameters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
            <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-4">
              <span className="text-xs text-slate-400 block mb-1">Proposed Transaction</span>
              <span className="text-sm font-semibold text-slate-100">{TRANSACTION_METADATA.transaction}</span>
            </div>
            <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-4">
              <span className="text-xs text-slate-400 block mb-1">Technology Platform</span>
              <span className="text-sm font-semibold text-slate-100">{TRANSACTION_METADATA.platform}</span>
            </div>
            <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-4">
              <span className="text-xs text-slate-400 block mb-1">Primary Risk Context</span>
              <span className="text-sm font-semibold text-amber-300">{TRANSACTION_METADATA.primaryRiskContext}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Thesis & Core Principles Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Thesis & Board Principle */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-2xl border border-blue-900/40 bg-gradient-to-br from-blue-950/40 via-slate-900/60 to-slate-950 p-6 sm:p-8 space-y-4 shadow-lg">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest">
              <Scale className="h-4 w-4" />
              <span>Core Strategic Thesis</span>
            </div>
            <blockquote className="text-base sm:text-lg text-slate-100 font-medium italic leading-relaxed border-l-2 border-blue-500 pl-4">
              "{TRANSACTION_METADATA.strategicThesis}"
            </blockquote>
            <p className="text-xs text-slate-400 pt-1">
              Technology superiority cannot salvage a venture if IP ownership is ambiguous, the local partner holds an unmitigated hold-up lever, or intermediaries introduce foreign bribery liability.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-900/30 bg-slate-900/40 p-6 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
              <AlertCircle className="h-4 w-4" />
              <span>Board-Level Design Imperative</span>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed">
              <strong className="text-white">Do not rely on litigation to restore control after an asset has escaped.</strong> Determine in advance where the asset resides, who can access it, who can modify it, who can commercialize it, and what happens when the relationship breaks down.
            </p>
          </div>
        </div>

        {/* Core Architectural Formula */}
        <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 space-y-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
              <Cpu className="h-4 w-4 text-blue-400" />
              <span>Package Design Formula</span>
            </div>
            <h3 className="text-base font-semibold text-white mb-2">Retained-Ownership / Controlled-Access Model</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {TRANSACTION_METADATA.coreDesignPrinciple}
            </p>

            {/* Sequence Pills */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-950/80 border border-slate-800/80">
                <span className="font-mono text-blue-400 font-bold">01</span>
                <span className="text-slate-300">Retain ownership of crown-jewel AI outside the JV</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-950/80 border border-slate-800/80">
                <span className="font-mono text-blue-400 font-bold">02</span>
                <span className="text-slate-300">Black-box models via authenticated inference APIs</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-950/80 border border-slate-800/80">
                <span className="font-mono text-blue-400 font-bold">03</span>
                <span className="text-slate-300">Classify & automatically assign Core AI Improvements</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-950/80 border border-slate-800/80">
                <span className="font-mono text-blue-400 font-bold">04</span>
                <span className="text-slate-300">Pre-engineer deadlock via Texas Shootout buy-sell</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Jurisdiction Profile</span>
            <span className="text-slate-200 font-medium">Weak IP / Strict Foreign Bribery</span>
          </div>
        </div>

      </div>

      {/* 3 Control Layers Quick Navigation */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white tracking-tight">Three Mutually Reinforcing Control Layers</h2>
          <span className="text-xs text-slate-400">Click to inspect substantive artifact</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Artifact 1 Card */}
          <div 
            onClick={() => onNavigateTab('matrix')}
            className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-200 hover:border-blue-500/50 hover:bg-slate-900/90 hover:shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Artifact 1</span>
              <ArrowRight className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-blue-400" />
            </div>
            <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
              Alliance Risk & Governance Matrix
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Identifies 14 structural vulnerabilities (Hold-Up, Reverse Engineering, Judicial Bias, Data Appropriation) and converts each into a contractual, technical, and measurable governance metric.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span>14 Vulnerability Scenarios</span>
              <span>·</span>
              <span className="text-emerald-400">100% Metricized</span>
            </div>
          </div>

          {/* Artifact 2 Card */}
          <div 
            onClick={() => onNavigateTab('ip-memo')}
            className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-200 hover:border-blue-500/50 hover:bg-slate-900/90 hover:shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Artifact 2</span>
              <ArrowRight className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-blue-400" />
            </div>
            <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
              Background vs. Foreground IP Structuring Memo
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Privileged legal memo setting ownership boundaries, narrow licensing mechanics, technical ring-fencing, and verbatim Section VI Mandatory Grant-Back & Automatic Assignment clause.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span>5-Way Data Taxonomy</span>
              <span>·</span>
              <span className="text-blue-400">Verbatim Clause</span>
            </div>
          </div>

          {/* Artifact 3 Card */}
          <div 
            onClick={() => onNavigateTab('tpi-checklist')}
            className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-200 hover:border-blue-500/50 hover:bg-slate-900/90 hover:shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Artifact 3</span>
              <ArrowRight className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-blue-400" />
            </div>
            <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
              TPI Red-Flag Diligence Checklist
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Operational diligence & escalation framework under FCPA & UK Bribery Act Section 7 for local partner subcontractors, port handlers, and intermediaries across 4 core pillars.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span>Green / Amber / Red</span>
              <span>·</span>
              <span className="text-red-400">7-Step Blocking Protocol</span>
            </div>
          </div>
        </div>
      </div>

      {/* 8 Board-Level Approval Conditions Section */}
      <div id="board-approval-conditions" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
              <h2 className="text-xl font-bold text-white tracking-tight">Board-Level Approval Conditions</h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              8 mandatory structural prerequisites required by the Investment Committee before signing definitive JV documents.
            </p>
          </div>

          {/* Status Metrics & Filter */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800 text-xs">
              <button
                onClick={() => setActiveChecklistFilter('all')}
                className={`px-2.5 py-1 rounded-md transition-colors ${activeChecklistFilter === 'all' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                All (8)
              </button>
              <button
                onClick={() => setActiveChecklistFilter('satisfied')}
                className={`px-2.5 py-1 rounded-md transition-colors ${activeChecklistFilter === 'satisfied' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'text-slate-400 hover:text-white'}`}
              >
                Satisfied ({satisfiedCount})
              </button>
              <button
                onClick={() => setActiveChecklistFilter('pending')}
                className={`px-2.5 py-1 rounded-md transition-colors ${activeChecklistFilter === 'pending' ? 'bg-amber-950 text-amber-300 border border-amber-800' : 'text-slate-400 hover:text-white'}`}
              >
                Pending ({inProgressCount})
              </button>
            </div>
          </div>
        </div>

        {/* Condition Cards */}
        <div className="space-y-3">
          {filteredConditions.map((condition) => {
            const isExpanded = expandedConditionId === condition.id;
            const isSatisfied = condition.status === 'Satisfied';

            return (
              <div 
                key={condition.id}
                className={`rounded-xl border transition-all ${
                  isSatisfied 
                    ? 'border-slate-800 bg-slate-950/70 hover:border-slate-700' 
                    : 'border-amber-900/40 bg-slate-950/90 hover:border-amber-700/60'
                }`}
              >
                <div 
                  className="flex items-center justify-between p-4 cursor-pointer gap-4"
                  onClick={() => setExpandedConditionId(isExpanded ? null : condition.id)}
                >
                  <div className="flex items-start gap-3.5 flex-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleConditionStatus(condition.id);
                      }}
                      className="mt-0.5 shrink-0 focus:outline-none"
                      title="Click to toggle condition status"
                    >
                      {isSatisfied ? (
                        <CheckCircle2 className="h-5 w-5 text-emerald-400 hover:text-emerald-300 transition-colors" />
                      ) : (
                        <Clock className="h-5 w-5 text-amber-400 hover:text-amber-300 transition-colors" />
                      )}
                    </button>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-slate-400">Condition {condition.number}</span>
                        <span className={`text-xs px-2 py-0.2 rounded font-medium ${
                          isSatisfied ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/60' : 'bg-amber-950/80 text-amber-300 border border-amber-800/60'
                        }`}>
                          {condition.status}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-white">
                        {condition.condition}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden md:inline-block text-xs text-slate-400 font-mono">
                      Lead: {condition.leadOwner}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="h-4 w-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-slate-400" />
                    )}
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-4 pb-4 pt-2 border-t border-slate-900 bg-slate-900/40 rounded-b-xl text-xs space-y-3">
                    <div>
                      <span className="text-slate-400 uppercase tracking-wider block font-semibold mb-1">Board Rationale & Risk Context</span>
                      <p className="text-slate-200 leading-relaxed">{condition.rationale}</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                      <span className="text-blue-400 font-semibold block mb-0.5">Verification Evidence in Definitive Agreements:</span>
                      <span className="text-slate-300 font-mono">{condition.verificationEvidence}</span>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-slate-400">Responsible Stakeholder: <strong className="text-slate-200">{condition.leadOwner}</strong></span>
                      <button
                        onClick={() => toggleConditionStatus(condition.id)}
                        className="text-blue-400 hover:text-blue-300 underline font-medium"
                      >
                        {isSatisfied ? 'Mark as Pending Re-verification' : 'Verify & Mark Satisfied'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Local Counsel Diligence Checklist & Statutory Legal Reference */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Local Counsel 10-Item Legal Matrix */}
        <div className="lg:col-span-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <FileText className="h-4 w-4 text-blue-400" />
                Local Counsel Confirmation Checklist (Page 11)
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Pre-execution legal diligence items required to validate local enforceability under host jurisdiction laws.
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded">
              10/10 In-Flight
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {LOCAL_COUNSEL_CHECKLIST_ITEMS.map((item) => (
              <div key={item.id} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-200">{item.topic}</span>
                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                </div>
                <p className="text-slate-400 leading-snug">{item.requirement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Anti-Bribery Statutory Citation & FCPA / UKBA Note */}
        <div className="lg:col-span-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <ShieldCheck className="h-4 w-4 text-blue-400" />
              <span>Statutory Compliance Foundation</span>
            </div>
            <h4 className="text-sm font-bold text-white">FCPA & UK Bribery Act 2010 Section 7</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {TRANSACTION_METADATA.sourceNote}
            </p>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-xs space-y-2">
              <span className="text-amber-300 font-semibold block">UKBA Section 7 Strict Liability:</span>
              <p className="text-slate-400 leading-relaxed">
                A commercial organisation is strictly liable if an "associated person" (including local subcontractors or joint venture partners) pays a bribe, unless the firm demonstrates <span className="text-slate-200 underline">Adequate Procedures</span> were actively implemented.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigateTab('tpi-checklist')}
            className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors"
          >
            <span>Inspect TPI Due Diligence Protocol</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
};
