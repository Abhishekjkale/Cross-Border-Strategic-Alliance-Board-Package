/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { ExecutiveSummaryView } from './components/ExecutiveSummaryView';
import { RiskGovernanceMatrixView } from './components/RiskGovernanceMatrixView';
import { IpStructuringMemoView } from './components/IpStructuringMemoView';
import { TpiDiligenceView } from './components/TpiDiligenceView';
import { DeadlockExitSimulatorView } from './components/DeadlockExitSimulatorView';
import { BoardExportModal } from './components/BoardExportModal';
import { TRANSACTION_METADATA } from './data/boardPackageData';
import { Shield } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'executive' | 'matrix' | 'ip-memo' | 'tpi-checklist' | 'deadlock-simulator'>('executive');
  const [isExportOpen, setIsExportOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600/30 selection:text-blue-200">
      
      {/* 3-Zone Top Navigation Contract */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenExport={() => setIsExportOpen(true)} 
      />

      {/* Main Content Viewport */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {activeTab === 'executive' && (
          <ExecutiveSummaryView onNavigateTab={(tab) => setActiveTab(tab)} />
        )}

        {activeTab === 'matrix' && (
          <RiskGovernanceMatrixView />
        )}

        {activeTab === 'ip-memo' && (
          <IpStructuringMemoView />
        )}

        {activeTab === 'tpi-checklist' && (
          <TpiDiligenceView />
        )}

        {activeTab === 'deadlock-simulator' && (
          <DeadlockExitSimulatorView />
        )}
      </main>

      {/* Board Dossier Export Modal */}
      <BoardExportModal 
        isOpen={isExportOpen} 
        onClose={() => setIsExportOpen(false)} 
      />

      {/* Quiet, Dignified Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-blue-500" />
            <span className="font-semibold text-slate-300">
              {TRANSACTION_METADATA.title} — {TRANSACTION_METADATA.subtitle}
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Prepared for Board / Investment Committee</span>
            <span>·</span>
            <span>{TRANSACTION_METADATA.date}</span>
            <span>·</span>
            <span className="text-amber-400/80">Strictly Confidential</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
