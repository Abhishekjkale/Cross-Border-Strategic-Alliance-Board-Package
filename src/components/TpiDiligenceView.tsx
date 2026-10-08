import React, { useState } from 'react';
import { 
  TPI_PILLARS, 
  INITIAL_TPI_REGISTRY, 
  RED_FLAG_RESPONSE_PROTOCOL_STEPS,
  TpiEntity,
  TpiPillar
} from '../data/boardPackageData';
import { 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Search, 
  Plus, 
  ExternalLink,
  Building2,
  DollarSign,
  Landmark,
  Truck,
  ArrowRight,
  FileCheck2,
  Lock,
  RefreshCw,
  Scale
} from 'lucide-react';

export const TpiDiligenceView: React.FC = () => {
  const [tpiRegistry, setTpiRegistry] = useState<TpiEntity[]>(INITIAL_TPI_REGISTRY);
  const [selectedTpi, setSelectedTpi] = useState<TpiEntity | null>(INITIAL_TPI_REGISTRY[2]); // Default to Orion Straits (RED) to demonstrate the 7-step blocking protocol
  const [activeTab, setActiveTab] = useState<'registry' | 'pillars' | 'protocols' | 'new-audit'>('registry');
  const [selectedPillarId, setSelectedPillarId] = useState<string>('pillar-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRating, setFilterRating] = useState<'ALL' | 'GREEN' | 'AMBER' | 'RED'>('ALL');

  // New TPI Form state
  const [newTpiName, setNewTpiName] = useState('');
  const [newTpiRole, setNewTpiRole] = useState('Customs Clearance & Port Handler');
  const [newTpiJurisdiction, setNewTpiJurisdiction] = useState('Host Jurisdiction');
  const [newTpiUbo, setNewTpiUbo] = useState('');
  const [newTpiHasGovConnection, setNewTpiHasGovConnection] = useState(false);
  const [newTpiGovNotes, setNewTpiGovNotes] = useState('');
  const [newTpiBankVerified, setNewTpiBankVerified] = useState(true);
  const [newTpiAcceptsAudit, setNewTpiAcceptsAudit] = useState(true);
  const [newTpiRationale, setNewTpiRationale] = useState('');
  const [newTpiFlags, setNewTpiFlags] = useState<string[]>([]);

  // Protocol step execution tracker for selected TPI
  const [executedSteps, setExecutedSteps] = useState<number[]>([1, 2, 3]);

  const toggleProtocolStep = (stepNumber: number) => {
    setExecutedSteps(prev => 
      prev.includes(stepNumber) ? prev.filter(s => s !== stepNumber) : [...prev, stepNumber]
    );
  };

  const handleAddNewTpi = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTpiName) return;

    let computedRating: 'GREEN' | 'AMBER' | 'RED' = 'GREEN';
    const computedFlags: string[] = [...newTpiFlags];

    if (!newTpiAcceptsAudit) {
      computedRating = 'RED';
      computedFlags.push('Refusal to accept anti-bribery clauses or audit rights');
    }
    if (!newTpiBankVerified) {
      computedRating = 'RED';
      computedFlags.push('Payment requested to unverified account or offshore vehicle');
    }
    if (newTpiHasGovConnection) {
      computedRating = 'AMBER';
      computedFlags.push('Undisclosed or material government affiliation requiring enhanced diligence');
    }

    const created: TpiEntity = {
      id: `tpi-${Date.now()}`,
      name: newTpiName,
      jurisdiction: newTpiJurisdiction,
      role: newTpiRole,
      riskRating: computedRating,
      ultimateBeneficialOwner: newTpiUbo || 'Pending registry extract',
      ownershipOpaque: !newTpiUbo,
      governmentConnection: newTpiGovNotes || (newTpiHasGovConnection ? 'Flagged government connection' : 'None reported'),
      bankAccountVerified: newTpiBankVerified,
      commercialRationale: newTpiRationale || 'Operational logistics support for JV shipments',
      contractualAuditRightsAccepted: newTpiAcceptsAudit,
      statusNotes: computedRating === 'RED' ? 'BLOCKED — Requires General Counsel escalation' : computedRating === 'AMBER' ? 'Frozen — Enhanced due diligence in progress' : 'Cleared for contract execution',
      flagsTriggered: computedFlags,
      onboardingStage: computedRating === 'RED' ? 'Blocked / Frozen' : computedRating === 'AMBER' ? 'Audit & Rescreening' : 'Contractual Controls'
    };

    setTpiRegistry([created, ...tpiRegistry]);
    setSelectedTpi(created);
    setActiveTab('registry');
    // reset
    setNewTpiName('');
    setNewTpiUbo('');
    setNewTpiGovNotes('');
    setNewTpiRationale('');
    setNewTpiFlags([]);
  };

  const filteredTpiList = tpiRegistry.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.jurisdiction.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRating = filterRating === 'ALL' || item.riskRating === filterRating;
    return matchesSearch && matchesRating;
  });

  const activePillar = TPI_PILLARS.find(p => p.id === selectedPillarId) || TPI_PILLARS[0];

  return (
    <div className="space-y-8 pb-16">
      
      {/* Top Banner */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider">
              <span>Artifact 3</span>
              <span>·</span>
              <span>FCPA & UK Bribery Act 2010 Section 7</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              Third-Party Intermediary (TPI) Red-Flag Checklist
            </h1>
          </div>
          
          <div className="rounded-xl bg-slate-950/80 border border-slate-800 px-4 py-2 text-xs">
            <span className="text-slate-400 block">Compliance Standard:</span>
            <span className="font-semibold text-emerald-400">
              Statutory "Adequate Procedures" Defense (UKBA s.7)
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
          Vet local partner subcontractors, customs brokers, port expeditors, and government-facing intermediaries before engagement and throughout the alliance lifecycle. Ensures strict corporate liability shields and immediate termination rights.
        </p>

        {/* Sub-Navigation tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pt-4 border-t border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('registry')}
            className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'registry' ? 'bg-blue-600 text-white font-medium' : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            TPI Live Screening Register ({tpiRegistry.length})
          </button>
          <button
            onClick={() => setActiveTab('pillars')}
            className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'pillars' ? 'bg-blue-600 text-white font-medium' : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            4 Diligence Pillars & Immediate Red Flags
          </button>
          <button
            onClick={() => setActiveTab('protocols')}
            className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'protocols' ? 'bg-blue-600 text-white font-medium' : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Go / No-Go Decision Protocol & 7-Step Escalation
          </button>
          <button
            onClick={() => setActiveTab('new-audit')}
            className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'new-audit' ? 'bg-blue-600 text-white font-medium' : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Plus className="h-3.5 w-3.5" />
            <span>Screen New Intermediary</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Live TPI Register & Inspection */}
      {activeTab === 'registry' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left: TPI List & Search */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Filter intermediaries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Status filter */}
              <div className="flex items-center gap-1 text-xs">
                {(['ALL', 'GREEN', 'AMBER', 'RED'] as const).map(rating => (
                  <button
                    key={rating}
                    onClick={() => setFilterRating(rating)}
                    className={`px-2 py-1 rounded text-[11px] font-mono font-medium transition-colors ${
                      filterRating === rating
                        ? rating === 'RED' ? 'bg-red-950 text-red-300 border border-red-800'
                          : rating === 'AMBER' ? 'bg-amber-950 text-amber-300 border border-amber-800'
                          : rating === 'GREEN' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                          : 'bg-blue-600 text-white'
                        : 'bg-slate-950 text-slate-400 border border-slate-800'
                    }`}
                  >
                    {rating}
                  </button>
                ))}
              </div>
            </div>

            {/* List */}
            <div className="space-y-3">
              {filteredTpiList.map((tpi) => {
                const isSelected = selectedTpi?.id === tpi.id;
                return (
                  <div
                    key={tpi.id}
                    onClick={() => setSelectedTpi(tpi)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'border-blue-500 bg-slate-900 shadow-lg'
                        : 'border-slate-800 bg-slate-950/70 hover:border-slate-700 hover:bg-slate-900/60'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                            tpi.riskRating === 'RED' ? 'bg-red-950 text-red-400 border border-red-800' :
                            tpi.riskRating === 'AMBER' ? 'bg-amber-950 text-amber-300 border border-amber-800' :
                            'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          }`}>
                            {tpi.riskRating} — {tpi.riskRating === 'RED' ? 'NO-GO' : tpi.riskRating === 'AMBER' ? 'ENHANCED DILIGENCE' : 'APPROVED'}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white leading-snug">{tpi.name}</h4>
                        <p className="text-xs text-slate-400">{tpi.role} · {tpi.jurisdiction}</p>
                      </div>

                      <span className="text-[11px] font-mono text-slate-500 shrink-0">
                        {tpi.onboardingStage}
                      </span>
                    </div>

                    {tpi.flagsTriggered.length > 0 && (
                      <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-red-400">
                        <AlertTriangle className="h-3 w-3 shrink-0" />
                        <span className="truncate">{tpi.flagsTriggered.length} immediate red flag(s) identified</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Selected TPI Audit Dossier & Action Protocol */}
          <div className="lg:col-span-7">
            {selectedTpi ? (
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 space-y-6 shadow-2xl">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-800 pb-5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="text-slate-400">TPI File ID: {selectedTpi.id}</span>
                      <span>·</span>
                      <span className="text-slate-400">Jurisdiction: {selectedTpi.jurisdiction}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{selectedTpi.name}</h3>
                    <p className="text-xs text-slate-300">{selectedTpi.role}</p>
                  </div>

                  <div className="text-right">
                    <span className={`inline-block px-3 py-1 rounded-lg text-xs font-mono font-bold ${
                      selectedTpi.riskRating === 'RED' ? 'bg-red-950 text-red-300 border border-red-700' :
                      selectedTpi.riskRating === 'AMBER' ? 'bg-amber-950 text-amber-300 border border-amber-700' :
                      'bg-emerald-950 text-emerald-300 border border-emerald-700'
                    }`}>
                      TRIAGE: {selectedTpi.riskRating}
                    </span>
                    <span className="block text-[11px] text-slate-500 mt-1 font-mono">{selectedTpi.onboardingStage}</span>
                  </div>
                </div>

                {/* Substantive Diligence Findings */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-slate-400 block font-semibold">1. Beneficial Ownership (UBO):</span>
                    <p className="text-slate-200">{selectedTpi.ultimateBeneficialOwner}</p>
                    <span className={`text-[10px] inline-block font-mono mt-1 ${selectedTpi.ownershipOpaque ? 'text-red-400' : 'text-emerald-400'}`}>
                      {selectedTpi.ownershipOpaque ? '❌ Opaque Ownership Structure' : '✓ Direct Corporate Extract Verified'}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-slate-400 block font-semibold">2. Banking & Payment Channel:</span>
                    <p className="text-slate-200">
                      {selectedTpi.bankAccountVerified ? 'Verified bank account in legal entity name.' : 'Unverified or offshore third-party account request.'}
                    </p>
                    <span className={`text-[10px] inline-block font-mono mt-1 ${selectedTpi.bankAccountVerified ? 'text-emerald-400' : 'text-red-400'}`}>
                      {selectedTpi.bankAccountVerified ? '✓ Bank Account Verified' : '❌ Payment Anomaly Detected'}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-slate-400 block font-semibold">3. Government Official Nexus:</span>
                    <p className="text-slate-200">{selectedTpi.governmentConnection}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-slate-400 block font-semibold">4. Audit Rights & Representations:</span>
                    <p className="text-slate-200">
                      {selectedTpi.contractualAuditRightsAccepted ? 'Unconditional audit & inspection rights agreed.' : 'Refusal of anti-bribery covenants or audit rights.'}
                    </p>
                    <span className={`text-[10px] inline-block font-mono mt-1 ${selectedTpi.contractualAuditRightsAccepted ? 'text-emerald-400' : 'text-red-400'}`}>
                      {selectedTpi.contractualAuditRightsAccepted ? '✓ Audit Rights Accepted' : '❌ Refusal of Audit Rights'}
                    </span>
                  </div>
                </div>

                {/* Commercial Rationale */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1">
                  <span className="text-slate-400 block font-semibold">Commercial Rationale & Measurable Deliverables:</span>
                  <p className="text-slate-300">{selectedTpi.commercialRationale}</p>
                </div>

                {/* Immediate Red Flags Triggered */}
                {selectedTpi.flagsTriggered.length > 0 && (
                  <div className="rounded-xl border border-red-900/60 bg-red-950/30 p-4 space-y-2">
                    <span className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                      <AlertTriangle className="h-4 w-4" />
                      Immediate Red Flags Detected ({selectedTpi.flagsTriggered.length})
                    </span>
                    <ul className="space-y-1 text-xs text-red-200 list-disc pl-5">
                      {selectedTpi.flagsTriggered.map((flag, idx) => (
                        <li key={idx} className="leading-relaxed">{flag}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* If RED: Display Mandatory 7-Step Blocking Response Protocol Execution */}
                {selectedTpi.riskRating === 'RED' && (
                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                          <Lock className="h-4 w-4" />
                          Mandatory Red Flag Blocking Response Protocol (Pages 9-10)
                        </span>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          Required compliance sequence when a disqualifying red flag is triggered.
                        </p>
                      </div>
                      <span className="text-xs font-mono text-slate-400">
                        {executedSteps.length}/7 Completed
                      </span>
                    </div>

                    <div className="space-y-2">
                      {RED_FLAG_RESPONSE_PROTOCOL_STEPS.map((s) => {
                        const isDone = executedSteps.includes(s.step);
                        return (
                          <div 
                            key={s.step}
                            onClick={() => toggleProtocolStep(s.step)}
                            className={`flex items-start gap-3 p-2.5 rounded-lg border cursor-pointer transition-colors ${
                              isDone ? 'bg-slate-900 border-emerald-900/40 text-slate-200' : 'bg-slate-950 border-slate-800 text-slate-400'
                            }`}
                          >
                            <div className="mt-0.5">
                              {isDone ? (
                                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                              ) : (
                                <div className="h-4 w-4 rounded-full border border-slate-600 flex items-center justify-center text-[10px] font-mono">
                                  {s.step}
                                </div>
                              )}
                            </div>
                            <div className="flex-1 text-xs space-y-0.5">
                              <div className="flex items-center gap-2">
                                <span className="font-mono font-bold text-red-300">{s.action}</span>
                                <span className="text-slate-300 font-semibold">— {s.title}</span>
                              </div>
                              <p className="text-[11px] text-slate-400">{s.detail}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* If AMBER: Display Enhanced Diligence Actions */}
                {selectedTpi.riskRating === 'AMBER' && (
                  <div className="rounded-xl border border-amber-900/50 bg-amber-950/20 p-4 text-xs space-y-2">
                    <span className="font-bold text-amber-400 uppercase tracking-wider block">
                      Amber Protocol — Enhanced Diligence Mandate (Page 9)
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      Onboarding is automatically frozen. Escalated to General Counsel and Compliance for: (1) independent corporate intelligence check; (2) fee re-benchmarking against local market rates; (3) in-person principal interview; and (4) senior-management residual risk approval.
                    </p>
                  </div>
                )}

                {/* If GREEN: Display Execution Action Trail */}
                {selectedTpi.riskRating === 'GREEN' && (
                  <div className="rounded-xl border border-emerald-900/50 bg-emerald-950/20 p-4 text-xs space-y-2">
                    <span className="font-bold text-emerald-400 uppercase tracking-wider block">
                      Green Protocol — Standard Execution Cycle (Page 9)
                    </span>
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="font-semibold text-emerald-300">Action Path:</span>
                      <span>Deal Team → Compliance approval → Legal approval → Contract execution → Ongoing monitoring</span>
                    </div>
                  </div>
                )}

              </div>
            ) : (
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-12 text-center text-slate-500">
                Select an intermediary from the register to inspect its full diligence dossier.
              </div>
            )}
          </div>

        </div>
      )}

      {/* Tab 2: 4 Diligence Pillars & Immediate Red Flags */}
      {activeTab === 'pillars' && (
        <div className="space-y-6">
          {/* Pillar Selector Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {TPI_PILLARS.map((pillar) => {
              const isSelected = selectedPillarId === pillar.id;
              const Icon = pillar.pillarNumber === 1 ? Building2 :
                           pillar.pillarNumber === 2 ? DollarSign :
                           pillar.pillarNumber === 3 ? Landmark : Truck;
              return (
                <div
                  key={pillar.id}
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    isSelected ? 'border-blue-500 bg-slate-900 shadow-lg' : 'border-slate-800 bg-slate-950/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-2">
                    <Icon className="h-4 w-4" />
                    <span>Pillar {pillar.pillarNumber}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{pillar.title}</h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">{pillar.description}</p>
                </div>
              );
            })}
          </div>

          {/* Active Pillar Detail */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-mono text-blue-400 font-bold uppercase">Pillar {activePillar.pillarNumber} Detailed Framework</span>
              <h2 className="text-xl font-bold text-white mt-1">{activePillar.title}</h2>
              <p className="text-xs text-slate-300 mt-1">{activePillar.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Verification Checklist Items */}
              <div className="lg:col-span-7 space-y-3">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Mandatory Verification Checklist ({activePillar.verificationItems.length} items)
                </span>
                <div className="space-y-2">
                  {activePillar.verificationItems.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Immediate Red Flags */}
              <div className="lg:col-span-5 space-y-3">
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider block flex items-center gap-1.5">
                  <ShieldAlert className="h-4 w-4" />
                  Immediate Red Flags ({activePillar.immediateRedFlags.length} triggers)
                </span>
                <div className="space-y-2">
                  {activePillar.immediateRedFlags.map((flag, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-red-950/30 border border-red-900/40 text-xs text-red-200 flex items-start gap-2.5">
                      <AlertTriangle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{flag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Go/No-Go Protocols & Ongoing Cycle */}
      {activeTab === 'protocols' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Green Box */}
            <div className="rounded-2xl border border-emerald-900/50 bg-slate-900/60 p-6 space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold font-mono px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 uppercase block w-fit mb-3">
                  GREEN — GO PROTOCOL
                </span>
                <h4 className="text-base font-bold text-white mb-2">Unconditional Clearance Criteria</h4>
                <ul className="text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed">
                  <li>Beneficial ownership verified</li>
                  <li>Commercial rationale documented</li>
                  <li>Services specific & independently verifiable</li>
                  <li>Compensation commercially reasonable</li>
                  <li>Bank account & payment path transparent</li>
                  <li>Government relationships understood</li>
                  <li>No unresolved material adverse findings</li>
                  <li>Required anti-bribery reps & audit rights accepted</li>
                </ul>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-emerald-400">
                <strong>Action Trail:</strong> Deal Team → Compliance approval → Legal approval → Contract execution → Ongoing monitoring
              </div>
            </div>

            {/* Amber Box */}
            <div className="rounded-2xl border border-amber-900/50 bg-slate-900/60 p-6 space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold font-mono px-2.5 py-1 rounded bg-amber-950 text-amber-300 border border-amber-800 uppercase block w-fit mb-3">
                  AMBER — ENHANCED DILIGENCE
                </span>
                <h4 className="text-base font-bold text-white mb-2">Escalation & Freezing Triggers</h4>
                <ul className="text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed">
                  <li>Freeze onboarding immediately</li>
                  <li>Escalate to Compliance and Legal</li>
                  <li>Obtain additional corporate & banking documents</li>
                  <li>Conduct enhanced UBO and PEP screening</li>
                  <li>Independently verify references & government ties</li>
                  <li>Re-benchmark proposed compensation against market</li>
                  <li>Interview principals where appropriate</li>
                  <li>Require enhanced contractual indemnities</li>
                </ul>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-amber-300">
                <strong>Action Trail:</strong> Freeze Onboarding → Investigate → Re-benchmark → Designated Senior Management Approval
              </div>
            </div>

            {/* Red Box */}
            <div className="rounded-2xl border border-red-900/50 bg-slate-900/60 p-6 space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold font-mono px-2.5 py-1 rounded bg-red-950 text-red-300 border border-red-800 uppercase block w-fit mb-3">
                  RED — NO-GO / BLOCK
                </span>
                <h4 className="text-base font-bold text-white mb-2">Absolute Disqualifying Barriers</h4>
                <ul className="text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed">
                  <li>Refusal to disclose beneficial ownership</li>
                  <li>Evidence or credible allegation of bribery</li>
                  <li>Undisclosed government ownership / nexus</li>
                  <li>Requested cash payment / offshore account</li>
                  <li>Payment to unrelated third party</li>
                  <li>Materially unexplained success fee</li>
                  <li>False statements or fabricated documents</li>
                  <li>Refusal to accept anti-bribery / audit clauses</li>
                  <li>Material sanctions / debarment status</li>
                </ul>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-red-300">
                <strong>Action Trail:</strong> STOP → PRESERVE → ESCALATE → INVESTIGATE → DECIDE → DOCUMENT → TERMINATE
              </div>
            </div>

          </div>

          {/* Ongoing TPI Control Cycle Banner (Page 10) */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3">
            <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block">
              Ongoing TPI Control Cycle (Page 10)
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-200">
              <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">Onboarding diligence</span>
              <span className="text-blue-500 font-bold">→</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">Contractual controls</span>
              <span className="text-blue-500 font-bold">→</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">Training</span>
              <span className="text-blue-500 font-bold">→</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">Transaction monitoring</span>
              <span className="text-blue-500 font-bold">→</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">Periodic re-screening</span>
              <span className="text-blue-500 font-bold">→</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">Audit</span>
              <span className="text-blue-500 font-bold">→</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">Remediation / termination</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Screen New Intermediary Wizard */}
      {activeTab === 'new-audit' && (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-6 max-w-3xl mx-auto shadow-2xl">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-blue-400" />
              New Third-Party Intermediary (TPI) Diligence Intake
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Complete initial intake questions to determine whether to advance, freeze (Amber), or block (Red) onboarding.
            </p>
          </div>

          <form onSubmit={handleAddNewTpi} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-slate-300 font-semibold block">Legal Entity Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Marine Freight Logistics Ltd"
                  value={newTpiName}
                  onChange={(e) => setNewTpiName(e.target.value)}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-semibold block">Proposed Role / Function</label>
                <input
                  type="text"
                  required
                  value={newTpiRole}
                  onChange={(e) => setNewTpiRole(e.target.value)}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-slate-300 font-semibold block">Country / Jurisdiction</label>
                <input
                  type="text"
                  required
                  value={newTpiJurisdiction}
                  onChange={(e) => setNewTpiJurisdiction(e.target.value)}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-semibold block">Ultimate Beneficial Owner(s)</label>
                <input
                  type="text"
                  placeholder="Identify natural person owners (not nominee)"
                  value={newTpiUbo}
                  onChange={(e) => setNewTpiUbo(e.target.value)}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-slate-300 font-semibold block">Commercial Rationale & Measurable Deliverables</label>
              <textarea
                rows={2}
                placeholder="Explain legitimate operational rationale (avoid 'local relationships' or 'government access')"
                value={newTpiRationale}
                onChange={(e) => setNewTpiRationale(e.target.value)}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Checkbox checks */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="bankVerified"
                  checked={newTpiBankVerified}
                  onChange={(e) => setNewTpiBankVerified(e.target.checked)}
                  className="rounded border-slate-700 text-blue-600 focus:ring-0"
                />
                <label htmlFor="bankVerified" className="text-slate-200 cursor-pointer">
                  Bank account independently verified in TPI's legal corporate name (No cash or offshore diversion)
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="auditAccepted"
                  checked={newTpiAcceptsAudit}
                  onChange={(e) => setNewTpiAcceptsAudit(e.target.checked)}
                  className="rounded border-slate-700 text-blue-600 focus:ring-0"
                />
                <label htmlFor="auditAccepted" className="text-slate-200 cursor-pointer">
                  TPI accepts anti-bribery covenants, books-and-records obligations & independent audit rights
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="govConnection"
                  checked={newTpiHasGovConnection}
                  onChange={(e) => setNewTpiHasGovConnection(e.target.checked)}
                  className="rounded border-slate-700 text-amber-500 focus:ring-0"
                />
                <label htmlFor="govConnection" className="text-amber-300 cursor-pointer">
                  Entity has current or former government officials, port directors, or PEP relationships
                </label>
              </div>

              {newTpiHasGovConnection && (
                <div className="pt-2">
                  <input
                    type="text"
                    placeholder="Specify government department, official name, and relationship..."
                    value={newTpiGovNotes}
                    onChange={(e) => setNewTpiGovNotes(e.target.value)}
                    className="w-full rounded-lg bg-slate-900 border border-amber-900/50 p-2 text-xs text-amber-200 focus:outline-none"
                  />
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-3 pt-3">
              <button
                type="button"
                onClick={() => setActiveTab('registry')}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 font-semibold text-white transition-colors"
              >
                Submit for Triage & Register
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
};
