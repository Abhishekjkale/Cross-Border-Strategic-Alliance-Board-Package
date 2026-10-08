import React, { useState } from 'react';
import { VULNERABILITIES_DATA, VulnerabilityRecord } from '../data/boardPackageData';
import { 
  Search, 
  ShieldAlert, 
  SlidersHorizontal, 
  ChevronRight, 
  X, 
  Activity, 
  Lock, 
  FileCheck,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

export const RiskGovernanceMatrixView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedVulnerability, setSelectedVulnerability] = useState<VulnerabilityRecord | null>(null);

  const categories = [
    'All',
    'Strategic & Asset Hold-up',
    'IP & Technology Protection',
    'Governance & Data Control',
    'Compliance & Anti-Bribery',
    'Financial & Operations'
  ];

  const filteredRecords = VULNERABILITIES_DATA.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = 
      item.vulnerabilityType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.specificScenario.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.preEmptiveMitigation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.operationalGovernanceMetric.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-16">
      
      {/* Header Banner */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
              <span>Artifact 1</span>
              <span>·</span>
              <span>14 Structural Vulnerabilities</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              Alliance Risk & Governance Matrix
            </h1>
          </div>
          
          <div className="rounded-xl bg-slate-950/80 border border-slate-800 px-4 py-2 text-xs">
            <span className="text-slate-400 block">Underlying Jurisdiction Assumption:</span>
            <span className="font-semibold text-amber-300">
              Weak-IP jurisdiction requiring technical ring-fencing, auditability & credible exit
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
          Identifies structural vulnerabilities inherent to technology joint ventures where contractual remedies alone are insufficient. Every vulnerability is coupled with pre-emptive contractual and structural mititgation, plus an ongoing operational governance metric to detect drift before dispute escalation.
        </p>

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-slate-800/80">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search scenarios, mitigations, or metrics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl bg-slate-950 border border-slate-800 pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white font-medium shadow-sm'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main High-Density Matrix Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/80 text-slate-400 font-semibold uppercase tracking-wider">
                <th className="py-3.5 px-4 w-48">Vulnerability Type</th>
                <th className="py-3.5 px-4 min-w-[280px]">Specific Scenario</th>
                <th className="py-3.5 px-4 w-20 text-center">Risk</th>
                <th className="py-3.5 px-4 min-w-[340px]">Pre-emptive Contractual / Structural Mitigation</th>
                <th className="py-3.5 px-4 min-w-[260px]">Operational Governance Metric</th>
                <th className="py-3.5 px-4 w-28 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredRecords.map((item) => (
                <tr 
                  key={item.id}
                  onClick={() => setSelectedVulnerability(item)}
                  className="hover:bg-slate-850/60 cursor-pointer transition-colors group"
                >
                  {/* Vulnerability Type */}
                  <td className="py-3 px-4 font-semibold text-white align-top">
                    <div className="flex items-center gap-2">
                      <span className="group-hover:text-blue-400 transition-colors">{item.vulnerabilityType}</span>
                    </div>
                    <span className="text-[11px] text-slate-500 block font-normal mt-0.5">{item.category}</span>
                  </td>

                  {/* Scenario */}
                  <td className="py-3 px-4 text-slate-300 leading-relaxed align-top">
                    {item.specificScenario}
                  </td>

                  {/* Risk Badge */}
                  <td className="py-3 px-4 text-center align-top">
                    <span className="inline-block px-2 py-0.5 rounded font-mono font-bold text-[11px] bg-red-950/80 text-red-400 border border-red-800/60">
                      HIGH
                    </span>
                  </td>

                  {/* Pre-emptive Mitigation */}
                  <td className="py-3 px-4 text-slate-200 leading-relaxed align-top">
                    {item.preEmptiveMitigation}
                  </td>

                  {/* Operational Metric */}
                  <td className="py-3 px-4 text-slate-400 font-mono text-[11px] leading-relaxed align-top">
                    <div className="p-2 rounded bg-slate-950/60 border border-slate-800/60 text-slate-300">
                      {item.operationalGovernanceMetric}
                    </div>
                  </td>

                  {/* Drill-down action */}
                  <td className="py-3 px-4 text-right align-top">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedVulnerability(item);
                      }}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white transition-colors"
                    >
                      <span>Drilldown</span>
                      <ChevronRight className="h-3 w-3" />
                    </button>
                  </td>
                </tr>
              ))}

              {filteredRecords.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-500">
                    No vulnerabilities match your search query or filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Drill-Down Inspection Modal / Drawer */}
      {selectedVulnerability && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                  <span>{selectedVulnerability.category}</span>
                  <span>·</span>
                  <span className="text-red-400 font-bold">HIGH RISK VULNERABILITY</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {selectedVulnerability.vulnerabilityType}
                </h2>
              </div>
              <button
                onClick={() => setSelectedVulnerability(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scenario Breakdown */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldAlert className="h-4 w-4 text-amber-400" />
                Vulnerability Scenario (Operational Reality)
              </span>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm leading-relaxed">
                {selectedVulnerability.specificScenario}
              </div>
            </div>

            {/* Pre-emptive Contractual & Structural Mitigation */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Lock className="h-4 w-4 text-blue-400" />
                Pre-emptive Contractual / Structural Mitigation
              </span>
              <div className="p-4 rounded-xl bg-slate-950 border border-blue-900/40 text-slate-200 text-sm leading-relaxed">
                {selectedVulnerability.preEmptiveMitigation}
              </div>
            </div>

            {/* Operational Governance Metrics & Live KPI Tracker */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Activity className="h-4 w-4 text-emerald-400" />
                Operational Governance Metric & Telemetry Monitoring
              </span>
              
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="text-xs text-slate-300 font-mono leading-relaxed">
                  <strong>Metric Specification:</strong> {selectedVulnerability.operationalGovernanceMetric}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800 text-xs">
                  <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-400 block mb-0.5">Current JV Operational Status</span>
                    <span className="font-semibold text-emerald-400">{selectedVulnerability.currentMetricValue}</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-400 block mb-0.5">Approved Governance Benchmark</span>
                    <span className="font-semibold text-slate-200">{selectedVulnerability.metricBenchmark}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />
                <span>Verified in Definitive Transaction Documentation</span>
              </div>
              <button
                onClick={() => setSelectedVulnerability(null)}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
              >
                Close Inspector
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
