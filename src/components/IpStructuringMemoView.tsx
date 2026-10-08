import React, { useState } from 'react';
import { 
  MANDATORY_GRANT_BACK_CLAUSE, 
  DATA_TAXONOMY_CATEGORIES 
} from '../data/boardPackageData';
import { 
  ShieldCheck, 
  Layers, 
  FileCode, 
  Copy, 
  Check, 
  ArrowRight, 
  HelpCircle,
  Binary,
  Database,
  Terminal,
  Cpu,
  Lock,
  Workflow
} from 'lucide-react';

export const IpStructuringMemoView: React.FC = () => {
  const [copiedClause, setCopiedClause] = useState(false);
  const [activeTab, setActiveTab] = useState<'memo' | 'architecture' | 'taxonomy' | 'clause' | 'simulator'>('architecture');

  // Simulation state for invention classification
  const [simulationPrompt, setSimulationPrompt] = useState('Local fleet engineers fine-tune the core dispatch transformer weights with historical port delay telemetry to increase cold-chain turnaround.');
  const [simulationResult, setSimulationResult] = useState<{
    classification: 'Firm-Owned Core AI Improvement' | 'JV-Owned Local Product Layer' | 'Partner-Owned Background Data';
    clauseArticle: string;
    vestingMechanism: string;
    rationale: string;
  } | null>({
    classification: 'Firm-Owned Core AI Improvement',
    clauseArticle: 'Section VI (Automatic Assignment & Mandatory Grant-Back)',
    vestingMechanism: 'Vests exclusively and immediately in the Firm upon creation by operation of law / automatic irrevocable assignment.',
    rationale: 'Modifies, fine-tunes, enhances, or is derived from Core AI routing model architecture and could not reasonably have been developed without access to Firm Background IP.'
  });

  const handleCopyClause = () => {
    navigator.clipboard.writeText(MANDATORY_GRANT_BACK_CLAUSE);
    setCopiedClause(true);
    setTimeout(() => setCopiedClause(false), 2000);
  };

  const runClassification = (preset: 'fine-tune' | 'ui' | 'partner-data' | 'standalone-connector') => {
    if (preset === 'fine-tune') {
      setSimulationPrompt('Local fleet engineers fine-tune the core dispatch transformer weights with historical port delay telemetry to increase cold-chain turnaround.');
      setSimulationResult({
        classification: 'Firm-Owned Core AI Improvement',
        clauseArticle: 'Section VI (Automatic Assignment & Mandatory Grant-Back)',
        vestingMechanism: 'Vests exclusively and immediately in the Firm upon creation by operation of law / automatic irrevocable assignment.',
        rationale: 'Modifies, fine-tunes, enhances, or is derived from Core AI routing model architecture and could not reasonably have been developed without access to Firm Background IP.'
      });
    } else if (preset === 'ui') {
      setSimulationPrompt('Development of an Android tablet interface and Arabic/Thai localized forms for local dockworkers and warehouse supervisors.');
      setSimulationResult({
        classification: 'JV-Owned Local Product Layer',
        clauseArticle: 'Section V (Local Product Layer Allocation)',
        vestingMechanism: 'Allocated to and owned by the Joint Venture entity (or licensed to Firm for global operations).',
        rationale: 'Local UI/UX customizations and localization modules that do not modify or constitute an algorithmic improvement to Firm Core AI.'
      });
    } else if (preset === 'partner-data') {
      setSimulationPrompt('Pre-existing historical truck route logs and proprietary port berthing schedule tables provided by the local partner.');
      setSimulationResult({
        classification: 'Partner-Owned Background Data',
        clauseArticle: 'Section IV (Ring-Fencing Partner Background IP)',
        vestingMechanism: 'Remains the exclusive property of the Local Partner; narrow purpose-limited license to JV.',
        rationale: 'Pre-existing local logistics datasets that pre-date the JV; ring-fenced from model training repositories.'
      });
    } else {
      setSimulationPrompt('Custom regional EDI connector converting local port authority XML manifests into standardized JSON payloads.');
      setSimulationResult({
        classification: 'JV-Owned Local Product Layer',
        clauseArticle: 'Section V (Regional API Connectors)',
        vestingMechanism: 'Owned by the JV Co. under express allocation schedule.',
        rationale: 'Customer-specific and regional infrastructure integrations that operate outside core neural model weights.'
      });
    }
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Top Banner */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider">
              <span>Artifact 2</span>
              <span>·</span>
              <span>Privileged & Confidential Legal Memo</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              Background vs. Foreground IP Structuring Memo
            </h1>
          </div>
          
          <div className="rounded-xl bg-slate-950/80 border border-slate-800 px-4 py-2 text-xs">
            <span className="text-slate-400 block">Core Architecture Model:</span>
            <span className="font-semibold text-blue-300">
              Retained-Ownership / Controlled-Access (Black-Box API Gateway)
            </span>
          </div>
        </div>

        {/* Sub-Navigation tabs for Artifact 2 */}
        <div className="flex items-center gap-2 overflow-x-auto pt-4 border-t border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'architecture' ? 'bg-blue-600 text-white font-medium' : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Technical Ring-Fence Architecture
          </button>
          <button
            onClick={() => setActiveTab('taxonomy')}
            className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'taxonomy' ? 'bg-blue-600 text-white font-medium' : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            5-Way Data Taxonomy Segregator
          </button>
          <button
            onClick={() => setActiveTab('clause')}
            className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'clause' ? 'bg-blue-600 text-white font-medium' : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Section VI Verbatim Grant-Back Clause
          </button>
          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'simulator' ? 'bg-blue-600 text-white font-medium' : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Invention Classification Simulator
          </button>
          <button
            onClick={() => setActiveTab('memo')}
            className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'memo' ? 'bg-blue-600 text-white font-medium' : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Complete Legal Memo Transcript
          </button>
        </div>
      </div>

      {/* Tab 1: Technical Architecture & Ring-Fencing */}
      {activeTab === 'architecture' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Visual Architecture Schematic Image */}
            <div className="lg:col-span-6 rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden shadow-xl flex flex-col">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img 
                  src="/src/assets/images/ai_ringfence_architecture_1791442568458.jpg" 
                  alt="Technical AI Ring-Fence Architecture" 
                  className="h-full w-full object-cover filter brightness-90 contrast-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-xs font-mono text-slate-300">
                  <span className="text-blue-400 font-bold">ISOLATED ENCLAVE:</span> Zero raw weight transfer; strictly tokenized inference
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-2">Preferred System Boundary (Section VII)</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    The core neural network, routing algorithms, weights, and training pipelines remain hosted exclusively in the Firm's sovereign cloud enclave. local engineers interact strictly via authenticated API tokens.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400 space-y-1">
                  <div className="text-blue-400 font-semibold">Boundary Topology:</div>
                  <div>Firm Core AI Enclave → Authenticated API Gateway → JV App Layer → Partner Local Integrations</div>
                </div>
              </div>
            </div>

            {/* Architecture Invariants & Escrow Rules */}
            <div className="lg:col-span-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-5 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  <Lock className="h-4 w-4 text-blue-400" />
                  Mandatory Technical Ring-Fencing Rules
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
                    <span className="font-semibold text-slate-200">1. No Routine Code or Weight Delivery</span>
                    <p className="text-slate-400">
                      Do not routinely provide model weights, core source code, unrestricted repository credentials, production signing keys, or training infrastructure to the JV or local partner.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
                    <span className="font-semibold text-slate-200">2. Neutral Source-Code Escrow Mechanics</span>
                    <p className="text-slate-400">
                      Neutral escrow agent holds defined continuity materials (compiled runbooks, deployment harnesses) released ONLY upon tightly defined insolvency or uncured abandonment. Escrow release does not transfer ownership.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
                    <span className="font-semibold text-slate-200">3. Identity & Permissions Mirroring</span>
                    <p className="text-slate-400">
                      Contractual IP boundaries must be mirrored in IAM permissions, separate tenant identity domains, deployment controls, model lineage watermarking, and continuous audit logs.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
                    <span className="font-semibold text-slate-200">4. Immediate Kill-Switch Execution</span>
                    <p className="text-slate-400">
                      Technical API revocation terminates inference within 60 seconds upon material breach, security compromise, or exit escalation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-blue-950/30 border border-blue-900/40 text-xs text-blue-200 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 shrink-0 text-blue-400" />
                <span>Enforced by VP Platform Architecture and Chief Technology Counsel</span>
              </div>
            </div>

          </div>

          {/* Section IX Conclusion Formula Banner */}
          <div className="rounded-2xl border border-blue-900/50 bg-gradient-to-r from-blue-950/40 via-slate-900/80 to-slate-950 p-6 space-y-3">
            <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block">
              Section IX — The 9-Step Governance Formula
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-200">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Retain ownership</span>
              <span className="text-blue-500">→</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">License narrowly</span>
              <span className="text-blue-500">→</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Black-box core AI</span>
              <span className="text-blue-500">→</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Segregate data</span>
              <span className="text-blue-500">→</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Classify foreground IP at creation</span>
              <span className="text-blue-500">→</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Automatically assign core-AI improvements</span>
              <span className="text-blue-500">→</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Independently audit</span>
              <span className="text-blue-500">→</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Preserve neutral dispute resolution</span>
              <span className="text-blue-500">→</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Pre-engineer exit</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: 5-Way Data Taxonomy Segregator */}
      {activeTab === 'taxonomy' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase">
              <Database className="h-4 w-4" />
              <span>Section IV — Contractual & Technical Data Ring-Fencing</span>
            </div>
            <h2 className="text-xl font-bold text-white">The 5-Way Legal & Data Segregation Formula</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              To prevent data appropriation or model-capture disputes, the definitive JV agreements strictly distinguish and ring-fence five distinct asset categories:
            </p>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-center text-blue-300">
              Partner Background Data ≠ JV Data ≠ Firm Background IP ≠ Firm Model Telemetry ≠ Foreground IP
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DATA_TAXONOMY_CATEGORIES.map((cat, idx) => (
              <div 
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-blue-400 font-bold">Category 0{idx + 1}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-950 border border-slate-800 font-semibold text-slate-300">
                      {cat.owner}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{cat.name}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    <strong className="text-slate-300">Scope:</strong> {cat.scope}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-800/80 text-xs">
                  <div>
                    <span className="text-slate-500 block mb-0.5">Contractual Legal Status:</span>
                    <p className="text-slate-300 leading-snug">{cat.legalStatus}</p>
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
                    <span className="text-blue-400 font-semibold block mb-0.5">Technical Control:</span>
                    {cat.technicalRingfence}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Section VI Verbatim Legal Grant-Back Clause */}
      {activeTab === 'clause' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FileCode className="h-5 w-5 text-blue-400" />
                Section VI — Mandatory Grant-Back & Automatic Assignment Clause
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Verbatim contractual text incorporated into Master Technology Licensing Agreement.
              </p>
            </div>

            <button
              onClick={handleCopyClause}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors"
            >
              {copiedClause ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copiedClause ? 'Copied to Clipboard' : 'Copy Full Clause'}</span>
            </button>
          </div>

          <div className="rounded-2xl border border-blue-900/40 bg-slate-950 p-6 sm:p-8 font-mono text-xs text-slate-300 leading-relaxed space-y-4 shadow-2xl overflow-x-auto">
            <div className="text-blue-400 font-bold border-b border-slate-800 pb-3">
              CORE AI IMPROVEMENT — AUTOMATIC ASSIGNMENT AND GRANT-BACK
            </div>

            <div className="space-y-4 text-slate-300">
              <p className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/80">
                <strong className="text-white block mb-1">Paragraph 1 — Broad Definition of Core AI Improvements:</strong>
                To the maximum extent permitted by applicable law, all right, title and interest in and to any Improvement, modification, adaptation, enhancement, optimization, derivative work, fine-tuning, retraining methodology, model architecture modification, algorithmic improvement, inference optimization, model compression technique, or other development that (i) modifies, enhances, is derived from, is based upon, incorporates, or materially improves any Core AI IP or other Firm Background IP, or (ii) could not reasonably have been developed without access to or use of the Core AI IP or Firm Background IP (collectively, “Core AI Improvements”), shall vest exclusively in the Firm immediately upon creation.
              </p>

              <p className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/80">
                <strong className="text-white block mb-1">Paragraph 2 — Irrevocable Present Assignment of Future Rights:</strong>
                To the extent any Core AI Improvement does not automatically vest in the Firm by operation of law, the Partner and the JV hereby irrevocably assign, transfer and convey to the Firm, and shall procure the assignment, transfer and conveyance to the Firm of, all worldwide right, title and interest in and to such Core AI Improvement, including all intellectual property rights, patent rights, copyright, database rights, trade secret rights, design rights, know-how rights and all rights to apply for, register, prosecute, maintain, enforce and recover damages in respect of such rights.
              </p>

              <p className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/80">
                <strong className="text-white block mb-1">Paragraph 3 — Self-Executing Assignment & Perfection Covenants:</strong>
                Such assignment shall be effective immediately upon creation and shall not require further payment, consent, approval, notice or other act by the Firm. The Partner and JV shall execute, and procure execution of, all instruments reasonably requested by the Firm to evidence, perfect, register or enforce such ownership.
              </p>

              <p className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/80">
                <strong className="text-white block mb-1">Paragraph 4 — Disclaiming Ownership by Authorship or Funding:</strong>
                Neither the Partner nor the JV shall acquire any ownership interest in any Core AI Improvement by virtue of authorship, development effort, funding, technical contribution, access to Core AI IP, integration of local data, provision of personnel, payment of development costs, or participation in the JV.
              </p>

              <p className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/80">
                <strong className="text-white block mb-1">Paragraph 5 — Worldwide Irrevocable Exclusive License Fallback:</strong>
                To the extent any Core AI Improvement cannot legally be assigned in advance or automatically, the Partner and JV grant the Firm an exclusive, perpetual, irrevocable, worldwide, fully paid-up, royalty-free, transferable and sublicensable license to exploit such Core AI Improvement for all purposes, together with an irrevocable covenant to execute the assignment immediately upon such rights becoming assignable.
              </p>

              <p className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/80">
                <strong className="text-white block mb-1">Paragraph 6 — Absolute Prohibition on Unauthorized Exploitation:</strong>
                The Partner and JV shall not commercialize, license, disclose, transfer, reverse engineer, reproduce, train, fine-tune, deploy or otherwise exploit any Core AI Improvement except as expressly authorized in writing by the Firm.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Interactive Invention Classification Simulator */}
      {activeTab === 'simulator' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Workflow className="h-5 w-5 text-blue-400" />
              Technical Classification & Invention Disclosure Simulator
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Test how new software commits, model fine-tunings, UI modules, and partner connectors are classified under the Background vs. Foreground IP rules.
            </p>

            {/* Presets */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs text-slate-400">Presets:</span>
              <button
                onClick={() => runClassification('fine-tune')}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition-colors"
              >
                Model Weight Fine-Tuning
              </button>
              <button
                onClick={() => runClassification('ui')}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition-colors"
              >
                Localized Dockworker UI
              </button>
              <button
                onClick={() => runClassification('partner-data')}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition-colors"
              >
                Partner Historical Logistics Data
              </button>
              <button
                onClick={() => runClassification('standalone-connector')}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition-colors"
              >
                Regional Port XML/JSON Gateway
              </button>
            </div>
          </div>

          {/* Test area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
              <span className="text-xs font-semibold text-slate-300 block">Proposed Engineering Development / Disclosure:</span>
              <textarea
                value={simulationPrompt}
                onChange={(e) => setSimulationPrompt(e.target.value)}
                rows={4}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
              />

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-slate-500">Evaluates against Sections II, IV, V, and VI</span>
                <button
                  onClick={() => runClassification('fine-tune')}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-colors"
                >
                  Adjudicate Ownership
                </button>
              </div>
            </div>

            {/* Result Box */}
            <div className="lg:col-span-6 rounded-2xl border border-blue-900/40 bg-slate-950 p-6 space-y-4 flex flex-col justify-between">
              {simulationResult && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs text-slate-400">Classification Outcome</span>
                    <span className={`text-xs px-2.5 py-1 rounded font-bold font-mono ${
                      simulationResult.classification === 'Firm-Owned Core AI Improvement'
                        ? 'bg-blue-950 text-blue-300 border border-blue-800'
                        : simulationResult.classification === 'JV-Owned Local Product Layer'
                        ? 'bg-purple-950 text-purple-300 border border-purple-800'
                        : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                    }`}>
                      {simulationResult.classification}
                    </span>
                  </div>

                  <div className="space-y-1 text-xs">
                    <span className="text-slate-400 block">Governing Agreement Clause:</span>
                    <span className="font-mono text-white font-medium">{simulationResult.clauseArticle}</span>
                  </div>

                  <div className="space-y-1 text-xs">
                    <span className="text-slate-400 block">Vesting & Transfer Mechanism:</span>
                    <p className="text-slate-200 leading-relaxed">{simulationResult.vestingMechanism}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
                    <span className="text-blue-400 font-semibold block">Legal Rationale:</span>
                    <p className="text-slate-300 leading-relaxed">{simulationResult.rationale}</p>
                  </div>
                </div>
              )}

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Invention Committee: Required</span>
                <span className="text-emerald-400">Zero Implied License</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Complete Legal Memo Transcript */}
      {activeTab === 'memo' && (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-10 space-y-8 text-xs text-slate-300 leading-relaxed max-w-4xl mx-auto shadow-2xl">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 space-y-2 font-mono">
            <div className="text-red-400 font-bold uppercase tracking-wider">PRIVILEGED & CONFIDENTIAL // ATTORNEY-CLIENT COMMUNICATION</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300 pt-2">
              <div><strong className="text-slate-400">TO:</strong> Board of Directors and Transaction Steering Committee</div>
              <div><strong className="text-slate-400">FROM:</strong> International Corporate / Technology Transactions Counsel</div>
              <div><strong className="text-slate-400">DATE:</strong> 8 October 2026</div>
              <div><strong className="text-slate-400">SUBJECT:</strong> Cross-Border AI Logistics Platform IP Governance</div>
            </div>
          </div>

          {/* Section I */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">I. EXECUTIVE SUMMARY</h3>
            <p>
              The principal legal and strategic objective is to permit intensive technological and commercial collaboration with the local partner without transferring effective ownership or uncontrolled access to the firm's crown-jewel artificial intelligence assets.
            </p>
            <p>
              The transaction should use a <strong className="text-white">retained-ownership / controlled-access model</strong>. The firm's proprietary AI routing models, model weights, core algorithms, foundational software libraries, model architecture, training methodologies, and other pre-existing technology should remain outside the JV and under the firm's exclusive ownership and control.
            </p>
            <p>
              Where feasible, the core AI should be deployed through a controlled API or black-box architecture rather than transferred into repositories controlled by the JV or local partner. The local partner's pre-existing logistics data, local infrastructure, operating know-how, customer relationships, and other pre-existing assets should likewise remain its property, subject only to specifically defined licenses required by the JV.
            </p>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-blue-200">
              <strong>The commercial proposition is:</strong> The JV receives sufficient rights to create enterprise value, but neither the JV nor the local partner receives the legal or technical means to appropriate the firm's crown-jewel AI technology.
            </div>
          </div>

          {/* Section II & III */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">II. BACKGROUND IP — DEFINITIONS AND LICENSING</h3>
            <p>
              Firm Background IP means all intellectual property, technology, software, source code, object code, algorithms, model architectures, model weights, training methodologies, prompts, embeddings, datasets owned or controlled by the firm, documentation, trade secrets, know-how, inventions, patents, copyrights, database rights, and other proprietary materials that pre-date the JV, are independently developed, or are acquired outside the JV.
            </p>
            <p>
              The firm should grant the JV a narrow, non-exclusive, non-transferable, non-sublicensable and revocable license, solely for approved JV development, testing, and deployment.
            </p>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider pt-2">III. NO OWNERSHIP TRANSFER</h3>
            <p>
              No ownership interest in any Firm Background IP is transferred, assigned, contributed, conveyed, pledged, encumbered, or otherwise disposed of by virtue of the JV, the license, technical assistance, payment of consideration, or platform access. Any rights not expressly granted remain exclusively with the firm. No implied license should arise through estoppel or course of dealing.
            </p>
          </div>

          {/* Section V */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">V. FOREGROUND IP OWNERSHIP</h3>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-white">Core AI Technology — Firm-owned:</strong> core routing algorithms, foundational model architecture, model weights, training methodologies, inference techniques, core libraries, compression/distillation techniques, improvements, and derivative works.</li>
              <li><strong className="text-white">Local Product Layer — JV-owned or expressly allocated:</strong> local UI/UX customizations, regional API connectors, customer integrations, localization modules, reporting interfaces.</li>
              <li><strong className="text-white">Partner Background Technology — Partner-owned:</strong> pre-existing partner technology and know-how.</li>
              <li><strong className="text-white">Jointly Developed Assets:</strong> Avoid generic joint-ownership language. Specify ownership, exploitation, territory, sublicensing, enforcement, economics, maintenance, prosecution, confidentiality, and termination rights for every genuinely joint asset.</li>
            </ul>
          </div>

          {/* Section VIII & IX */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">VIII. GOVERNANCE CONSEQUENCES</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Reserved matters affecting Firm Background IP.</li>
              <li>Unanimous or supermajority approval for material technology licensing.</li>
              <li>Mandatory invention disclosure and classification at creation.</li>
              <li>Employee, contractor and subcontractor IP assignments.</li>
              <li>Neutral international arbitration where legally and commercially appropriate.</li>
            </ul>
          </div>
        </div>
      )}

    </div>
  );
};
