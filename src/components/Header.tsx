import React from 'react';
import { Shield, FileCheck2, Printer } from 'lucide-react';

interface HeaderProps {
  activeTab: 'executive' | 'matrix' | 'ip-memo' | 'tpi-checklist' | 'deadlock-simulator';
  setActiveTab: (tab: 'executive' | 'matrix' | 'ip-memo' | 'tpi-checklist' | 'deadlock-simulator') => void;
  onOpenExport: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenExport }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Wordmark / Brand element */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-400">
            <Shield className="h-5 w-5" />
          </div>
          <button 
            onClick={() => setActiveTab('executive')}
            className="text-left font-semibold text-white tracking-tight text-base hover:text-blue-300 transition-colors"
          >
            ALLIANCE GOVERNANCE CONSOLE
          </button>
        </div>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <button
            onClick={() => setActiveTab('executive')}
            className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'executive'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            Executive Briefing
          </button>
          
          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'matrix'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            Artifact 1: Risk Matrix
          </button>

          <button
            onClick={() => setActiveTab('ip-memo')}
            className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'ip-memo'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            Artifact 2: IP Structuring
          </button>

          <button
            onClick={() => setActiveTab('tpi-checklist')}
            className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'tpi-checklist'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            Artifact 3: TPI Diligence
          </button>

          <button
            onClick={() => setActiveTab('deadlock-simulator')}
            className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'deadlock-simulator'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            Deadlock & Exit
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenExport}
            className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-slate-200 hover:bg-slate-800 hover:border-slate-600 transition-colors whitespace-nowrap"
          >
            <Printer className="h-3.5 w-3.5 text-blue-400" />
            <span>Board Dossier</span>
          </button>

          <button
            onClick={() => {
              const el = document.getElementById('board-approval-conditions');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                setActiveTab('executive');
                setTimeout(() => {
                  document.getElementById('board-approval-conditions')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="hidden sm:flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-blue-500 transition-colors whitespace-nowrap"
          >
            <FileCheck2 className="h-3.5 w-3.5" />
            <span>8 Conditions Sign-Off</span>
          </button>
        </div>

      </div>

      {/* Mobile navigation row */}
      <div className="flex lg:hidden overflow-x-auto border-t border-slate-800/80 px-4 py-2 gap-2 text-xs">
        <button
          onClick={() => setActiveTab('executive')}
          className={`px-3 py-1 rounded whitespace-nowrap ${activeTab === 'executive' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
        >
          Executive Briefing
        </button>
        <button
          onClick={() => setActiveTab('matrix')}
          className={`px-3 py-1 rounded whitespace-nowrap ${activeTab === 'matrix' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
        >
          Artifact 1: Risk Matrix
        </button>
        <button
          onClick={() => setActiveTab('ip-memo')}
          className={`px-3 py-1 rounded whitespace-nowrap ${activeTab === 'ip-memo' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
        >
          Artifact 2: IP Structuring
        </button>
        <button
          onClick={() => setActiveTab('tpi-checklist')}
          className={`px-3 py-1 rounded whitespace-nowrap ${activeTab === 'tpi-checklist' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
        >
          Artifact 3: TPI Diligence
        </button>
        <button
          onClick={() => setActiveTab('deadlock-simulator')}
          className={`px-3 py-1 rounded whitespace-nowrap ${activeTab === 'deadlock-simulator' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
        >
          Deadlock & Exit
        </button>
      </div>
    </header>
  );
};
