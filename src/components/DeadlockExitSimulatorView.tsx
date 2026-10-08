import React, { useState } from 'react';
import { 
  Scale, 
  ArrowRight, 
  ShieldCheck, 
  AlertTriangle, 
  Key, 
  Database, 
  Users, 
  Clock, 
  CheckCircle2,
  DollarSign
} from 'lucide-react';

export const DeadlockExitSimulatorView: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(5);
  const [valuationOffer, setValuationOffer] = useState<number>(45); // in $M
  const [firmEquityPct, setFirmEquityPct] = useState<number>(50);
  const [initiatingParty, setInitiatingParty] = useState<'Firm' | 'Partner'>('Firm');
  const [simulatedDecision, setSimulatedDecision] = useState<'BUY' | 'SELL'>('BUY');

  const partnerEquityPct = 100 - firmEquityPct;
  const buyCost = (valuationOffer * (100 - (initiatingParty === 'Firm' ? firmEquityPct : partnerEquityPct))) / 100;
  const sellProceeds = (valuationOffer * (initiatingParty === 'Firm' ? firmEquityPct : partnerEquityPct)) / 100;

  const escalationSteps = [
    {
      level: 1,
      title: 'Senior Management Conciliation',
      window: '15 Calendar Days',
      participants: 'CEO (Firm) & Managing Director (Partner)',
      outcome: 'Informal commercial negotiation to resolve operational disagreement.'
    },
    {
      level: 2,
      title: 'Executive Steering Committee',
      window: '15 Calendar Days',
      participants: 'Joint Steering Committee (2 Appointees each)',
      outcome: 'Formal review against original transaction business plan and governance matrix.'
    },
    {
      level: 3,
      title: 'Board of Directors Referral',
      window: '15 Calendar Days',
      participants: 'Full JV Board (Equal Representation)',
      outcome: 'Formal board resolution vote on reserved matters.'
    },
    {
      level: 4,
      title: 'Independent Neutral Expert',
      window: '30 Calendar Days',
      participants: 'Appointed International Expert (ICC / SIAC)',
      outcome: 'Non-binding or binding expert appraisal depending on technical vs valuation dispute.'
    },
    {
      level: 5,
      title: 'Terminal Mechanism: Texas Shootout',
      window: 'Strict 30-Day Window',
      participants: '50/50 Shareholder Shotgun Buy-Sell',
      outcome: 'Initiator quotes price; recipient must either BUY out initiator or SELL its stake at that exact price.'
    }
  ];

  return (
    <div className="space-y-8 pb-16">
      
      {/* Top Banner */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider">
              <span>Artifact 1 & 2 Governance Integration</span>
              <span>·</span>
              <span>Pre-Engineered Deadlock & Exit Waterfall</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              Deadlock Escalation & Texas Shootout Simulator
            </h1>
          </div>
          
          <div className="rounded-xl bg-slate-950/80 border border-slate-800 px-4 py-2 text-xs">
            <span className="text-slate-400 block">Governance Directive:</span>
            <span className="font-semibold text-blue-300">
              Pre-engineer exit before the relationship becomes distressed
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
          In a 50/50 or substantially equal technology joint venture, deadlock over reserved matters (budget, pricing, licensing, C-suite appointments) causes fatal paralysis. The definitive agreements mandate a 4-tier conciliation ladder terminating in a legally binding Texas Shootout (shotgun buy-sell) with asset unbundling covenants.
        </p>
      </div>

      {/* Tiered Escalation Ladder */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-400" />
              Pre-Negotiated 5-Tier Escalation Ladder
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Strict calendar day windows ensure disputes cannot drag on indefinitely.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400">Total Pre-Terminal Period: 75 Days</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {escalationSteps.map((s) => {
            const isActive = currentStep === s.level;
            return (
              <div
                key={s.level}
                onClick={() => setCurrentStep(s.level)}
                className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                  isActive
                    ? s.level === 5 ? 'border-red-500 bg-slate-900 shadow-xl' : 'border-blue-500 bg-slate-900 shadow-xl'
                    : 'border-slate-800 bg-slate-950/70 hover:border-slate-700'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-400">Tier 0{s.level}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400">
                      {s.window}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-white leading-tight">{s.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-snug">{s.participants}</p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 mt-3 text-[11px] text-slate-300">
                  {s.outcome}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Texas Shootout Simulation Engine */}
      <div className="rounded-2xl border border-red-900/40 bg-slate-900/60 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-red-400 font-bold uppercase">
              <Scale className="h-4 w-4" />
              <span>Terminal Resolution Mechanism</span>
            </div>
            <h2 className="text-xl font-bold text-white mt-1">
              Texas Shootout / Shotgun Buy-Sell Simulator
            </h2>
          </div>
          <div className="text-xs text-slate-400">
            Mandatory Financing Pre-qualification & Escrow Deposit (10%)
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Controls */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="text-xs font-semibold text-slate-300 block">Initiating Party Serving Shotgun Notice:</span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => setInitiatingParty('Firm')}
                  className={`p-2 rounded-lg font-medium transition-colors ${
                    initiatingParty === 'Firm' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  The Firm (Foreign Shareholder)
                </button>
                <button
                  onClick={() => setInitiatingParty('Partner')}
                  className={`p-2 rounded-lg font-medium transition-colors ${
                    initiatingParty === 'Partner' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  Local Tech Partner
                </button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300">Proposed JV Enterprise Valuation:</span>
                <span className="font-mono text-emerald-400 font-bold text-sm">${valuationOffer} Million USD</span>
              </div>
              <input
                type="range"
                min="10"
                max="150"
                step="5"
                value={valuationOffer}
                onChange={(e) => setValuationOffer(Number(e.target.value))}
                className="w-full accent-blue-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>$10M Floor</span>
                <span>$75M Median</span>
                <span>$150M Cap</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="text-xs font-semibold text-slate-300 block">Recipient Election:</span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => setSimulatedDecision('BUY')}
                  className={`p-2 rounded-lg font-medium transition-colors ${
                    simulatedDecision === 'BUY' ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  Elects to BUY (Buys Initiator Out)
                </button>
                <button
                  onClick={() => setSimulatedDecision('SELL')}
                  className={`p-2 rounded-lg font-medium transition-colors ${
                    simulatedDecision === 'SELL' ? 'bg-amber-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  Elects to SELL (Sells to Initiator)
                </button>
              </div>
            </div>
          </div>

          {/* Economics & Outcome Card */}
          <div className="lg:col-span-7 rounded-xl border border-blue-900/40 bg-slate-950 p-6 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono text-slate-400">Simulated Shotgun Settlement</span>
                <span className="text-xs px-2.5 py-0.5 rounded font-mono font-bold bg-blue-950 text-blue-300 border border-blue-800">
                  Total Valuation: ${valuationOffer}.0M
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block mb-0.5">Purchasing Party:</span>
                  <span className="font-bold text-white text-sm">
                    {simulatedDecision === 'BUY' 
                      ? (initiatingParty === 'Firm' ? 'Local Partner' : 'The Firm')
                      : (initiatingParty === 'Firm' ? 'The Firm' : 'Local Partner')}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block mb-0.5">Cash Consideration Payable:</span>
                  <span className="font-bold text-emerald-400 text-sm font-mono">
                    ${((valuationOffer * 50) / 100).toFixed(1)}M USD (50% Stake)
                  </span>
                </div>
              </div>

              {/* Crucial IP Unbundling Note */}
              <div className="p-3.5 rounded-lg bg-slate-900/80 border border-amber-900/40 text-xs space-y-2">
                <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                  <AlertTriangle className="h-4 w-4" />
                  <span>Crucial Asset Unbundling Covenant:</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Regardless of who buys out the equity, <strong className="text-white">Firm Background IP does NOT transfer</strong>. If the Local Partner buys out the JV, the Firm's Core AI API license terminates, API keys are revoked, and the Local Partner must substitute its own alternative routing engine within 90 days.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Required Deposit: ${(valuationOffer * 0.1).toFixed(2)}M in Escrow</span>
              <span className="text-emerald-400">Ironclad IP Shield</span>
            </div>
          </div>

        </div>
      </div>

      {/* Exit & Unbundling Waterfall Checklist */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-5">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-emerald-400" />
          Pre-Negotiated Exit Waterfall & Asset Segregation Controls
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-blue-400 font-semibold">
              <Key className="h-4 w-4" />
              <span>1. IP Reversion</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              All licenses to Firm Background IP terminate immediately. Core AI inference gateway access revoked with zero residual rights.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-blue-400 font-semibold">
              <Database className="h-4 w-4" />
              <span>2. Data Portability</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              JV operational logistics data exported in open format. Partner Background Data securely returned or certified destroyed.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-blue-400 font-semibold">
              <Users className="h-4 w-4" />
              <span>3. Customer Continuity</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              180-day transition assistance period ensuring customer logistics contracts continue without breach of SLA during handover.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-blue-400 font-semibold">
              <CheckCircle2 className="h-4 w-4" />
              <span>4. Escrow Neutrality</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Neutral escrow agent verifies no release conditions are triggered by voluntary buyout, preventing code leakage to partner.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};
