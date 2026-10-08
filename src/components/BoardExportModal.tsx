import React, { useState } from 'react';
import { 
  TRANSACTION_METADATA, 
  BOARD_APPROVAL_CONDITIONS, 
  VULNERABILITIES_DATA,
  MANDATORY_GRANT_BACK_CLAUSE 
} from '../data/boardPackageData';
import { 
  X, 
  Printer, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  Download,
  Check
} from 'lucide-react';

interface BoardExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BoardExportModal: React.FC<BoardExportModalProps> = ({ isOpen, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownloadDossier = () => {
    const textContent = `CONFIDENTIAL — BOARD / INVESTMENT COMMITTEE DOSSIER
${TRANSACTION_METADATA.title}
${TRANSACTION_METADATA.subtitle}
Date: ${TRANSACTION_METADATA.date}
Transaction: ${TRANSACTION_METADATA.transaction}
Platform: ${TRANSACTION_METADATA.platform}
Primary Risk Context: ${TRANSACTION_METADATA.primaryRiskContext}

STRATEGIC THESIS:
"${TRANSACTION_METADATA.strategicThesis}"

BOARD-LEVEL DESIGN PRINCIPLE:
"${TRANSACTION_METADATA.boardLevelPrinciple}"

BOARD APPROVAL CONDITIONS:
${BOARD_APPROVAL_CONDITIONS.map(c => `[${c.status}] Condition ${c.number}: ${c.condition}\n   Lead: ${c.leadOwner}\n   Evidence: ${c.verificationEvidence}`).join('\n\n')}

ARTIFACT 1 VULNERABILITY MITIGATIONS (14 CATEGORIES):
${VULNERABILITIES_DATA.map(v => `• ${v.vulnerabilityType} [${v.riskLevel}]:\n   Mitigation: ${v.preEmptiveMitigation}\n   Metric: ${v.operationalGovernanceMetric}`).join('\n\n')}

ARTIFACT 2 MANDATORY GRANT-BACK CLAUSE:
${MANDATORY_GRANT_BACK_CLAUSE}

SOURCE / LEGAL REFERENCE:
${TRANSACTION_METADATA.sourceNote}
${TRANSACTION_METADATA.localCounselConfirmationNote}
`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Board_Package_Strategic_Alliance_${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl p-6 sm:p-10 space-y-8 max-h-[92vh] overflow-y-auto print:border-none print:shadow-none print:p-0 print:bg-white print:text-black">
        
        {/* Top Action Bar (hidden in print) */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 print:hidden">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
            <ShieldCheck className="h-4 w-4" />
            <span>INVESTMENT COMMITTEE EXECUTIVE DOSSIER</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadDossier}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
            >
              {downloadSuccess ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Download className="h-3.5 w-3.5" />}
              <span>{downloadSuccess ? 'Downloaded' : 'Download Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-colors"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print Dossier</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Printable Board Dossier Content */}
        <div className="space-y-6 text-xs text-slate-300 print:text-black">
          
          {/* Header */}
          <div className="text-center space-y-2 border-b border-slate-800 print:border-black pb-6">
            <span className="font-mono text-[11px] text-red-400 print:text-red-700 font-bold uppercase tracking-widest block">
              CONFIDENTIAL — PREPARED FOR BOARD / INVESTMENT COMMITTEE REVIEW
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black tracking-tight">
              {TRANSACTION_METADATA.title}
            </h1>
            <p className="text-sm font-medium text-slate-300 print:text-gray-700">
              {TRANSACTION_METADATA.subtitle}
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4 text-[11px] font-mono text-slate-400 print:text-gray-600">
              <span>Date: {TRANSACTION_METADATA.date}</span>
              <span>·</span>
              <span>Platform: {TRANSACTION_METADATA.platform}</span>
              <span>·</span>
              <span>Context: {TRANSACTION_METADATA.primaryRiskContext}</span>
            </div>
          </div>

          {/* Strategic Thesis */}
          <div className="p-4 rounded-xl bg-slate-950 print:bg-gray-100 border border-slate-800 print:border-gray-300 space-y-2">
            <span className="font-bold text-white print:text-black uppercase text-[11px] block">
              Strategic Thesis & Core Imperative:
            </span>
            <p className="italic text-slate-200 print:text-black leading-relaxed">
              "{TRANSACTION_METADATA.strategicThesis}"
            </p>
            <p className="text-slate-400 print:text-gray-700 text-[11px] pt-1">
              "{TRANSACTION_METADATA.boardLevelPrinciple}"
            </p>
          </div>

          {/* 8 Board Approval Conditions Table */}
          <div className="space-y-3">
            <h3 className="font-bold text-white print:text-black text-sm uppercase tracking-wider">
              1. Board-Level Approval Conditions Status (Page 10)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-slate-800 print:border-gray-300">
                <thead>
                  <tr className="bg-slate-950 print:bg-gray-200 text-slate-400 print:text-black font-semibold text-[11px]">
                    <th className="p-2 border border-slate-800 print:border-gray-300 w-12 text-center">#</th>
                    <th className="p-2 border border-slate-800 print:border-gray-300">Condition Specification</th>
                    <th className="p-2 border border-slate-800 print:border-gray-300 w-28">Status</th>
                    <th className="p-2 border border-slate-800 print:border-gray-300">Verification Evidence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 print:divide-gray-300">
                  {BOARD_APPROVAL_CONDITIONS.map((c) => (
                    <tr key={c.id}>
                      <td className="p-2 border border-slate-800 print:border-gray-300 font-mono text-center">{c.number}</td>
                      <td className="p-2 border border-slate-800 print:border-gray-300 font-medium text-slate-200 print:text-black">{c.condition}</td>
                      <td className="p-2 border border-slate-800 print:border-gray-300">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                          c.status === 'Satisfied' ? 'bg-emerald-950 print:bg-emerald-100 text-emerald-300 print:text-emerald-800' : 'bg-amber-950 print:bg-amber-100 text-amber-300 print:text-amber-800'
                        }`}>
                          {c.status}
                        </span>
                      </td>
                      <td className="p-2 border border-slate-800 print:border-gray-300 text-slate-400 print:text-gray-700 font-mono text-[10px]">{c.verificationEvidence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Artifact 1 Summary */}
          <div className="space-y-2">
            <h3 className="font-bold text-white print:text-black text-sm uppercase tracking-wider">
              2. Artifact 1: Risk & Governance Matrix (14 Scenarios Addressed)
            </h3>
            <p className="text-slate-400 print:text-gray-700">
              All 14 structural vulnerabilities (Hold-Up Problem, IP Leakage, Source-Code Exposure, Judicial Bias, Data Appropriation, Model-Improvement Capture, Unauthorized Subcontracting, Deadlock, Exit Divorce) have been paired with pre-emptive contractual terms and measurable quarterly governance metrics.
            </p>
          </div>

          {/* Artifact 2 Summary */}
          <div className="space-y-2">
            <h3 className="font-bold text-white print:text-black text-sm uppercase tracking-wider">
              3. Artifact 2: IP Structuring & Mandatory Grant-Back
            </h3>
            <p className="text-slate-400 print:text-gray-700">
              Retained-ownership / controlled-access model implemented. Core AI black-boxed via authenticated inference gateway. 5-way data taxonomy separates Partner Data ≠ JV Data ≠ Firm Background IP ≠ Model Telemetry ≠ Foreground IP. Section VI Mandatory Grant-Back clause irrevocably assigns all Core AI Improvements to the Firm upon creation.
            </p>
          </div>

          {/* Artifact 3 Summary */}
          <div className="space-y-2">
            <h3 className="font-bold text-white print:text-black text-sm uppercase tracking-wider">
              4. Artifact 3: Third-Party Intermediary (TPI) FCPA/UKBA Compliance
            </h3>
            <p className="text-slate-400 print:text-gray-700">
              4-pillar vetting checklist actively enforced. Red-flag triggers mandate immediate onboarding halt, record preservation, escalation to General Counsel, and termination if required under UK Bribery Act Section 7 and FCPA standards.
            </p>
          </div>

          {/* Signatures */}
          <div className="pt-6 border-t border-slate-800 print:border-black grid grid-cols-2 sm:grid-cols-4 gap-4 text-[11px]">
            <div className="space-y-1">
              <span className="text-slate-400 print:text-gray-600 block">General Counsel:</span>
              <div className="h-7 border-b border-slate-700 print:border-black flex items-end font-semibold text-slate-200 print:text-black">
                Elena Vance, Esq.
              </div>
              <span className="text-[10px] text-slate-500">Legal Risk Verified</span>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 print:text-gray-600 block">Chief Compliance Officer:</span>
              <div className="h-7 border-b border-slate-700 print:border-black flex items-end font-semibold text-slate-200 print:text-black">
                Marcus Thorne
              </div>
              <span className="text-[10px] text-slate-500">FCPA/UKBA Cleared</span>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 print:text-gray-600 block">Chief Technology Counsel:</span>
              <div className="h-7 border-b border-slate-700 print:border-black flex items-end font-semibold text-slate-200 print:text-black">
                Dr. Aris Chen
              </div>
              <span className="text-[10px] text-slate-500">IP Ring-Fence Validated</span>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 print:text-gray-600 block">Head of M&A:</span>
              <div className="h-7 border-b border-slate-700 print:border-black flex items-end font-semibold text-slate-200 print:text-black">
                Sophia Al-Mansoor
              </div>
              <span className="text-[10px] text-slate-500">Deadlock Terms Approved</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
