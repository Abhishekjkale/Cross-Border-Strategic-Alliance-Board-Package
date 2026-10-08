export interface VulnerabilityRecord {
  id: string;
  vulnerabilityType: string;
  specificScenario: string;
  riskLevel: 'HIGH';
  preEmptiveMitigation: string;
  operationalGovernanceMetric: string;
  category: 'Strategic & Asset Hold-up' | 'IP & Technology Protection' | 'Governance & Data Control' | 'Compliance & Anti-Bribery' | 'Financial & Operations';
  currentMetricValue: string;
  metricBenchmark: string;
  status: 'Compliant' | 'Caution' | 'Under Review';
}

export interface TpiRedFlagCheckItem {
  id: string;
  text: string;
  isImmediateRedFlag?: boolean;
}

export interface TpiPillar {
  id: string;
  pillarNumber: number;
  title: string;
  description: string;
  verificationItems: string[];
  immediateRedFlags: string[];
}

export interface TpiEntity {
  id: string;
  name: string;
  jurisdiction: string;
  role: string;
  riskRating: 'GREEN' | 'AMBER' | 'RED';
  ultimateBeneficialOwner: string;
  ownershipOpaque: boolean;
  governmentConnection: string;
  bankAccountVerified: boolean;
  commercialRationale: string;
  contractualAuditRightsAccepted: boolean;
  statusNotes: string;
  flagsTriggered: string[];
  onboardingStage: 'Onboarding Diligence' | 'Contractual Controls' | 'Transaction Monitoring' | 'Audit & Rescreening' | 'Blocked / Frozen';
}

export interface BoardApprovalCondition {
  id: string;
  number: number;
  condition: string;
  rationale: string;
  status: 'Satisfied' | 'In Progress' | 'Pending Verification';
  leadOwner: string;
  verificationEvidence: string;
}

export const TRANSACTION_METADATA = {
  title: 'CROSS-BORDER STRATEGIC ALLIANCE',
  subtitle: 'Boardroom-Ready Governance, IP Protection & Anti-Bribery Package',
  transaction: 'Proposed Joint Venture with Local Technology Partner',
  platform: 'AI-Driven Logistics Platform',
  primaryRiskContext: 'Weak IP Enforcement / Cross-Border Regulatory Exposure',
  date: '8 October 2026',
  preparedFor: 'Prepared for Board / Investment Committee Review',
  strategicThesis: 'Alliances fail disproportionately when governance, asset boundaries, incentives, and exit mechanisms are poorly designed—not because the underlying technology is incapable.',
  coreDesignPrinciple: 'Retain ownership of crown-jewel technology outside the JV; license only what the JV needs; expose core AI through controlled interfaces; ring-fence partner assets; classify foreground IP at creation; and pre-engineer deadlock and exit before the relationship becomes distressed.',
  boardLevelPrinciple: 'Do not rely on litigation to restore control after an asset has escaped. Determine in advance where the asset resides, who can access it, who can modify it, who can commercialize it, and what happens when the relationship breaks down.',
  sourceNote: 'The anti-bribery framework should be validated against current U.S. FCPA guidance, the UK Bribery Act 2010 and applicable official guidance, plus local anti-corruption and intermediary laws. The FCPA Resource Guide addresses third-party relationships, foreign-official risk and compliance controls; UK Bribery Act section 7 addresses corporate failure to prevent bribery by associated persons and the statutory adequate-procedures framework.',
  localCounselConfirmationNote: 'This package is a strategic transaction framework and drafting aid. Local counsel should confirm enforceability of IP assignments, grant-back provisions, moral-rights treatment, source-code escrow, arbitration, foreign governing law, deadlock mechanisms, restrictive covenants, insolvency treatment, data localization, employment IP ownership, and technology-transfer restrictions before execution.'
};

export const BOARD_APPROVAL_CONDITIONS: BoardApprovalCondition[] = [
  {
    id: 'bac-1',
    number: 1,
    condition: 'Core AI ownership remains outside the JV.',
    rationale: 'Retained-ownership / controlled-access model prevents irreversible expropriation of crown-jewel algorithms in weak-IP jurisdiction.',
    status: 'Satisfied',
    leadOwner: 'Chief Technology Transactions Counsel',
    verificationEvidence: 'Master Technology Licensing Agreement Section 2.1 (retained proprietary title schedule).'
  },
  {
    id: 'bac-2',
    number: 2,
    condition: 'Core AI is technically ring-fenced and not routinely delivered as source code or model weights.',
    rationale: 'API black-boxing and inference gateway ensure local engineers never receive weights, architecture, or raw code.',
    status: 'Satisfied',
    leadOwner: 'VP Platform Architecture / CISO',
    verificationEvidence: 'Zero-trust API Gateway architecture blueprint & IAM permission audit.'
  },
  {
    id: 'bac-3',
    number: 3,
    condition: 'Background and Foreground IP schedules are complete and incorporated into definitive agreements.',
    rationale: 'Pre-existing assets of both Firm and Partner are ring-fenced prior to JV operational launch to avoid commingling.',
    status: 'Satisfied',
    leadOwner: 'International Technology Transactions Counsel',
    verificationEvidence: 'Schedules 1A (Firm Background IP) and 1B (Partner Background IP) fully itemized.'
  },
  {
    id: 'bac-4',
    number: 4,
    condition: 'Core-AI improvements are subject to enforceable assignment/grant-back provisions.',
    rationale: 'Mandatory automatic assignment and grant-back clause ensures derivative models and optimizations vest exclusively in Firm.',
    status: 'Satisfied',
    leadOwner: 'International Corporate Counsel',
    verificationEvidence: 'Section VI Automatic Assignment and Grant-Back Clause drafted verbatim.'
  },
  {
    id: 'bac-5',
    number: 5,
    condition: 'JV agreement contains credible deadlock and exit mechanics, including a carefully structured Texas Shootout where legally appropriate.',
    rationale: 'Tiered escalation ladder terminating in a defined Texas Shootout prevents 50/50 shareholder paralysis from destroying enterprise value.',
    status: 'Satisfied',
    leadOwner: 'M&A Deal Team / Head of Corporate Development',
    verificationEvidence: 'Shareholders Agreement Article 14 (Tiered Escalation & Shotgun Buy-Sell terms).'
  },
  {
    id: 'bac-6',
    number: 6,
    condition: 'Disputes are subject to neutral international arbitration with an enforceability strategy for relevant asset jurisdictions.',
    rationale: 'Neutral seat outside the host jurisdiction prevents procedural disadvantage, evidentiary asymmetry, and local judicial bias.',
    status: 'Satisfied',
    leadOwner: 'Dispute Resolution / Cross-Border Counsel',
    verificationEvidence: 'ICC / SIAC Arbitration Clause seated in Singapore / London with New York Convention recognition review.'
  },
  {
    id: 'bac-7',
    number: 7,
    condition: 'No local intermediary is engaged without documented risk-based FCPA/UKBA diligence and approval.',
    rationale: 'Pre-clearance, beneficial ownership verification, and strict anti-corruption vetting protect the Firm against strict corporate liability under UKBA s.7 and FCPA.',
    status: 'In Progress',
    leadOwner: 'Chief Compliance Officer',
    verificationEvidence: 'TPI Red-Flag Onboarding Checklist active; 4 high-risk intermediaries under formal vetting.'
  },
  {
    id: 'bac-8',
    number: 8,
    condition: 'Technical, contractual, financial and governance controls are tested periodically rather than merely represented at signing.',
    rationale: 'Representations at signing become stale; operational governance metrics and independent audit rights must be monitored quarterly.',
    status: 'In Progress',
    leadOwner: 'Internal Audit & GRC Director',
    verificationEvidence: 'Quarterly Metric Recertification Schedule & independent auditor retention mandate.'
  }
];

export const VULNERABILITIES_DATA: VulnerabilityRecord[] = [
  {
    id: 'vuln-1',
    vulnerabilityType: 'Hold-Up Problem',
    specificScenario: 'After the platform becomes dependent on the local partner, the partner threatens to withhold critical personnel, infrastructure, regulatory support, local data, or customer access unless economics or control rights are renegotiated.',
    riskLevel: 'HIGH',
    preEmptiveMitigation: 'Alternative vendors and cloud environments; prohibition on unilateral suspension; step-in rights; transition assistance; minimum service levels; escrowed operational documentation; Texas Shootout / buy-sell deadlock mechanism for defined terminal deadlocks; pre-agreed valuation and funding mechanics.',
    operationalGovernanceMetric: 'Single-source dependency ratio; alternate-supplier coverage; unresolved dependency issues; time-to-transition; quarterly continuity exercise.',
    category: 'Strategic & Asset Hold-up',
    currentMetricValue: '18% Single-Source Ratio',
    metricBenchmark: 'Threshold < 25%; Transition Runbook Tested',
    status: 'Compliant'
  },
  {
    id: 'vuln-2',
    vulnerabilityType: 'IP Leakage / Reverse Engineering',
    specificScenario: 'Local engineers receive sufficient source code, model weights, architecture, prompts, datasets, or deployment credentials to reproduce or derive the core AI routing technology.',
    riskLevel: 'HIGH',
    preEmptiveMitigation: 'API black-boxing and ring-fencing: retain core models in a controlled environment; authenticated APIs; no routine transfer of weights/source code; segregated repositories; least privilege; watermarking; reverse-engineering prohibition; invention assignment; audit logs; technical kill-switches.',
    operationalGovernanceMetric: '% production calls through controlled APIs; privileged-access exceptions; repository access events; model downloads; anomalous API traffic; quarterly access recertification.',
    category: 'IP & Technology Protection',
    currentMetricValue: '100% via Controlled API',
    metricBenchmark: '100% API Gate; 0 Raw Weight Transfers',
    status: 'Compliant'
  },
  {
    id: 'vuln-3',
    vulnerabilityType: 'Source-Code Exposure',
    specificScenario: 'Partner argues that operational continuity requires direct repository access or delivery of source code.',
    riskLevel: 'HIGH',
    preEmptiveMitigation: 'No routine source-code delivery. Establish a neutral source-code escrow account holding defined continuity materials, released only upon tightly defined triggers such as insolvency, uncured material breach, or legally established abandonment. Escrow release does not transfer underlying ownership.',
    operationalGovernanceMetric: 'Escrow release requests; repository exposure score; % core repositories accessible to partner; annual escrow integrity test.',
    category: 'IP & Technology Protection',
    currentMetricValue: '0% Partner Repo Exposure',
    metricBenchmark: '0 Direct Repos; Escrow Agent: IronMountain/NCC',
    status: 'Compliant'
  },
  {
    id: 'vuln-4',
    vulnerabilityType: 'Asymmetric Information',
    specificScenario: 'Local partner controls customer relationships, regulatory information, infrastructure data, or operational metrics that the foreign shareholder cannot independently verify.',
    riskLevel: 'HIGH',
    preEmptiveMitigation: 'Reserved matters; dual-signature authority; real-time dashboards; independent audit and verification rights; direct customer/vendor verification; board reporting standards; independent directors/advisers where appropriate; information covenants.',
    operationalGovernanceMetric: 'Reporting latency; variance between partner and independent data; audit exceptions; % reserved matters independently verified.',
    category: 'Governance & Data Control',
    currentMetricValue: '4.2h Latency / 0.8% Variance',
    metricBenchmark: 'Telemetry sync < 12h; Variance < 2.0%',
    status: 'Compliant'
  },
  {
    id: 'vuln-5',
    vulnerabilityType: 'Local Judicial Bias',
    specificScenario: 'Dispute over IP, shareholder rights, or JV assets is litigated locally, creating perceived or actual procedural disadvantage, delay, or evidentiary asymmetry.',
    riskLevel: 'HIGH',
    preEmptiveMitigation: 'Neutral governing law where permissible; international arbitration seated outside the JV jurisdiction; institutional rules; independent arbitrator appointment; confidentiality; interim/emergency relief; enforceability analysis in asset jurisdictions.',
    operationalGovernanceMetric: 'Disputes resolved through escalation; average dispute age; compliance with interim orders; award-enforcement assessment.',
    category: 'Governance & Data Control',
    currentMetricValue: 'SIAC/ICC Neutral Seat Enacted',
    metricBenchmark: 'Seat: Singapore / English Law; NY Convention mapped',
    status: 'Compliant'
  },
  {
    id: 'vuln-6',
    vulnerabilityType: 'Foreground-IP Ambiguity',
    specificScenario: 'Joint engineers develop improvements and later disagree whether the feature is partner IP, JV IP, or an improvement to pre-existing core AI.',
    riskLevel: 'HIGH',
    preEmptiveMitigation: 'Detailed Background/Foreground IP Schedule; invention disclosure at creation; technical classification committee; automatic assignment of defined improvements; employee/contractor invention assignments; no implied licenses.',
    operationalGovernanceMetric: '% new features with IP classification; unresolved disclosures; time to assignment; quarterly IP register reconciliation.',
    category: 'IP & Technology Protection',
    currentMetricValue: '96% Classified at Creation',
    metricBenchmark: 'Target 100%; < 7 days disclosure latency',
    status: 'Caution'
  },
  {
    id: 'vuln-7',
    vulnerabilityType: 'Deadlock / Governance Paralysis',
    specificScenario: 'Equal or substantially equal shareholders cannot agree on budget, hiring, pricing, product direction, capital expenditure, licensing, or a strategic transaction.',
    riskLevel: 'HIGH',
    preEmptiveMitigation: 'Tiered escalation: management → executive committee → board → independent expert → Texas Shootout / shotgun buy-sell mechanism for defined fundamental deadlocks. Include objective triggers and financing/security requirements.',
    operationalGovernanceMetric: 'Number of deadlocks; average resolution days; % resolved below terminal mechanism; shareholder-level escalations.',
    category: 'Governance & Data Control',
    currentMetricValue: 'Tiered Escalation Codified',
    metricBenchmark: 'Max resolution window 45 days before Shootout',
    status: 'Compliant'
  },
  {
    id: 'vuln-8',
    vulnerabilityType: 'Data Appropriation',
    specificScenario: 'Partner combines JV-generated logistics data with its own datasets and later claims ownership over derived datasets or analytics.',
    riskLevel: 'HIGH',
    preEmptiveMitigation: 'Data taxonomy separating Partner Background Data, JV operational data, personal data, derived data, model telemetry, and aggregated analytics; purpose limitation; data-use licenses; return/destruction; technical segregation.',
    operationalGovernanceMetric: '% datasets classified; unauthorized transfers; cross-environment flows; unresolved data exceptions.',
    category: 'Governance & Data Control',
    currentMetricValue: '100% Data Taxonomy Enforced',
    metricBenchmark: 'Strict 5-way taxonomy; automated DLP tags',
    status: 'Compliant'
  },
  {
    id: 'vuln-9',
    vulnerabilityType: 'Model-Improvement Capture',
    specificScenario: 'Partner fine-tunes, optimizes, distills, or modifies core routing models and later claims ownership because its personnel performed the development.',
    riskLevel: 'HIGH',
    preEmptiveMitigation: 'Express improvement ownership; mandatory grant-back/assignment; invention assignment; repository provenance; model lineage; contribution records; prohibition on independent commercialization.',
    operationalGovernanceMetric: '% model commits with provenance; unassigned contributions; lineage completeness; unauthorized derivative-model detection.',
    category: 'IP & Technology Protection',
    currentMetricValue: '98.5% Lineage Provenance',
    metricBenchmark: 'Mandatory Grant-Back Clause Section VI enforced',
    status: 'Compliant'
  },
  {
    id: 'vuln-10',
    vulnerabilityType: 'Unauthorized Subcontracting',
    specificScenario: 'Partner delegates engineering, customs, port, data, or government-facing activities to undisclosed third parties.',
    riskLevel: 'HIGH',
    preEmptiveMitigation: 'No subcontracting without prior approval; flow-down confidentiality/IP/anti-bribery terms; beneficial ownership disclosure; audit rights; termination for unauthorized delegation; mandatory TPI diligence.',
    operationalGovernanceMetric: '% subcontractors approved; undocumented vendor count; TPI refresh completion.',
    category: 'Compliance & Anti-Bribery',
    currentMetricValue: '4 Vendors Under Review',
    metricBenchmark: '0 unvetted third parties; 100% flow-down clauses',
    status: 'Caution'
  },
  {
    id: 'vuln-11',
    vulnerabilityType: 'Regulatory / Government Dependency',
    specificScenario: 'Partner claims informal relationships with regulators, customs, ports, or state-owned logistics entities are required for permits or commercial access.',
    riskLevel: 'HIGH',
    preEmptiveMitigation: 'Government-interaction protocol; no undocumented facilitation payments; pre-clearance of intermediaries; anti-bribery representations; audit rights; books-and-records obligations; termination rights for bribery violations.',
    operationalGovernanceMetric: 'Government engagements logged; compliance exceptions; TPI status; suspicious-payment alerts.',
    category: 'Compliance & Anti-Bribery',
    currentMetricValue: 'Logbook Active / Pre-clearance',
    metricBenchmark: 'Zero facilitation payments allowed (FCPA/UKBA)',
    status: 'Compliant'
  },
  {
    id: 'vuln-12',
    vulnerabilityType: 'Accounting / Cash Leakage',
    specificScenario: 'JV funds are diverted through related-party invoices, inflated consulting fees, cash payments, offshore accounts, or unexplained commissions.',
    riskLevel: 'HIGH',
    preEmptiveMitigation: 'Dual authorization; centralized treasury; restricted cash policy; bank-account controls; related-party approval; invoice substantiation; beneficial-owner certification; audit rights.',
    operationalGovernanceMetric: 'Unreconciled transactions; related-party spend; cash transactions; offshore payments; invoice exception rate.',
    category: 'Financial & Operations',
    currentMetricValue: 'Dual-Sig Active / 0 Offshore Accts',
    metricBenchmark: 'Threshold $0 cash disbursements; Dual approval > $10k',
    status: 'Compliant'
  },
  {
    id: 'vuln-13',
    vulnerabilityType: 'Cybersecurity / Credential Compromise',
    specificScenario: "Partner's weaker controls provide an attack path into JV cloud environments or core model infrastructure.",
    riskLevel: 'HIGH',
    preEmptiveMitigation: 'Zero-trust architecture; MFA; privileged-access management; separate identity domains; security minimums; penetration testing; incident notification; cyber-insurance requirements.',
    operationalGovernanceMetric: 'Critical vulnerabilities beyond SLA; MFA coverage; privileged accounts; incident-response time; third-party security score.',
    category: 'IP & Technology Protection',
    currentMetricValue: '100% MFA / Zero-Trust Domain Segregation',
    metricBenchmark: 'Zero critical CVEs > 48h; Isolated cloud VPCs',
    status: 'Compliant'
  },
  {
    id: 'vuln-14',
    vulnerabilityType: 'Exit / Divorce Risk',
    specificScenario: 'Relationship becomes untenable but assets, customers, employees, data, and technology are inseparably embedded in the local entity.',
    riskLevel: 'HIGH',
    preEmptiveMitigation: 'Pre-negotiated exit waterfall; call/put rights; Texas Shootout for fundamental deadlock; IP reversion; customer transition rights; source-code escrow; data portability; transition services.',
    operationalGovernanceMetric: 'Simulated exit completion time; % transferable assets; customer portability; local-entity dependency.',
    category: 'Strategic & Asset Hold-up',
    currentMetricValue: 'Exit Runbook Simulated (90d max)',
    metricBenchmark: 'Data portability ready; IP reversion automatic',
    status: 'Compliant'
  }
];

export const TPI_PILLARS: TpiPillar[] = [
  {
    id: 'pillar-1',
    pillarNumber: 1,
    title: 'Corporate Structure & Ownership',
    description: 'Vet beneficial ownership, holding chains, operating premises, and screening status.',
    verificationItems: [
      'Identify ultimate beneficial owners, not merely registered shareholders.',
      'Obtain corporate registry extracts and constitutional documents.',
      'Identify directors, officers, controlling shareholders and authorized signatories.',
      'Map ownership through every intermediate holding company.',
      'Identify trusts, nominees, bearer interests, foundations or opaque vehicles.',
      'Determine whether the TPI was newly incorporated immediately before engagement.',
      'Identify common ownership or control with the local JV partner.',
      'Verify registered office and actual operating premises.',
      'Screen owners and principals for sanctions, debarment, litigation, PEP status and adverse media.',
      'Document the legitimate commercial rationale for selecting the TPI.',
      'Reject explanations based solely on "local relationships" or "government access."'
    ],
    immediateRedFlags: [
      'Anonymous ownership',
      'Refusal to identify beneficial owners',
      'Unexplained offshore structure',
      'Nominee shareholders',
      'Newly formed entity with no operating history',
      'Undisclosed government-linked ownership',
      'TPI selected personally by a government-facing executive'
    ]
  },
  {
    id: 'pillar-2',
    pillarNumber: 2,
    title: 'Financial & Payment Anomalies',
    description: 'Scrutinize banking channels, compensation rates, success fees, and economic substance.',
    verificationItems: [
      'Require a written statement of services and measurable deliverables.',
      'Benchmark commissions against market rates.',
      'Match invoices to actual services and evidence of performance.',
      'Require payment to an account held in the TPI\'s legal name.',
      'Independently verify bank-account ownership.',
      'Prohibit cash except narrowly approved and documented circumstances.',
      'Prohibit payments to personal or unrelated third-party accounts absent documented legal/commercial justification.',
      'Pre-approve commissions, success fees, bonuses, rebates and expense reimbursements.',
      'Require disclosure of subcontractors receiving compensation.',
      'Investigate round-dollar invoices, vague retainers and unexplained reimbursements.',
      'Maintain books and records sufficient to demonstrate economic substance.'
    ],
    immediateRedFlags: [
      'Cash-payment request',
      'Offshore account unrelated to contracting entity',
      'Payment to third party',
      'Undefined "success fee"',
      'Materially above-market commission',
      '"Expediting fee" involving customs/ports',
      'Vague "relationship management" charges',
      'Backdated invoices',
      'Split invoices designed to evade approval thresholds'
    ]
  },
  {
    id: 'pillar-3',
    pillarNumber: 3,
    title: 'Relationship with Government Officials',
    description: 'Map government contacts, customs/port touchpoints, PEP affiliations, and pre-clearance.',
    verificationItems: [
      'Identify every government-facing function the TPI will perform.',
      'Identify current and former government officials associated with the TPI.',
      'Identify relevant family relationships where legally permissible and material.',
      'Screen for PEP status.',
      'Identify relationships with customs, ports, transport ministries, municipal authorities, state-owned logistics operators, licensing authorities and procurement officials.',
      'Determine whether the TPI was recommended by a government official.',
      'Document the legitimate purpose of every government-facing activity.',
      'Require Compliance pre-clearance for government-facing engagements.',
      'Prohibit unauthorized payments or anything of value to officials.',
      'Require anti-bribery certification and flow-down obligations to subcontractors.',
      'Require immediate notification of changes in government ownership or relationships.'
    ],
    immediateRedFlags: [
      'TPI owner is a government official',
      'Close family relationship with a decision-maker',
      'Claim to "guarantee" government outcomes',
      'Requests for "relationship building" funds',
      'Inability to explain how a license or government contract was obtained',
      'Refusal to identify government-facing personnel',
      'Proposal to bypass ordinary regulatory requirements'
    ]
  },
  {
    id: 'pillar-4',
    pillarNumber: 4,
    title: 'Track Record & Operational Capabilities',
    description: 'Verify logistics competence, physical facilities, staffing, and audit rights.',
    verificationItems: [
      'Verify claimed logistics experience independently.',
      'Obtain and verify customer references.',
      'Confirm staffing levels and key personnel.',
      'Inspect operating facilities where risk warrants.',
      'Validate technical and regulatory capabilities.',
      'Confirm licenses and insurance.',
      'Require a written statement of work with measurable deliverables.',
      'Require periodic certification that services were actually performed.',
      'Maintain audit and inspection rights.'
    ],
    immediateRedFlags: [
      'No meaningful physical office',
      'No demonstrable logistics experience',
      'Unexplained claims of government/customer access',
      'No identifiable delivery personnel',
      'Unverifiable references',
      'Newly established entity with unusually high fees',
      'Capabilities entirely dependent on the local partner',
      'Refusal of audit rights'
    ]
  }
];

export const INITIAL_TPI_REGISTRY: TpiEntity[] = [
  {
    id: 'tpi-1',
    name: 'Trans-Oceanic Customs Agency Pte Ltd',
    jurisdiction: 'Host Country (Port Authority Zone)',
    role: 'Port & Customs Expediting Subcontractor',
    riskRating: 'AMBER',
    ultimateBeneficialOwner: 'Tan Sri H. Rahman (48%), Port Logistics Trust (52%)',
    ownershipOpaque: false,
    governmentConnection: 'Former port authority deputy commissioner on advisory panel (retired 2021).',
    bankAccountVerified: true,
    commercialRationale: 'Manages automated electronic customs clearance filings for cold-chain containers.',
    contractualAuditRightsAccepted: true,
    statusNotes: 'Under enhanced diligence. Requires pre-clearance protocol and fee re-benchmarking against statutory schedules.',
    flagsTriggered: ['Former official on advisory panel', 'Includes line items for "priority terminal handling"'],
    onboardingStage: 'Audit & Rescreening'
  },
  {
    id: 'tpi-2',
    name: 'Vanguard Regional Cloud & Telematics Ltd',
    jurisdiction: 'Host Country (High-Tech Park)',
    role: 'Local IoT Fleet Sensor Integration Partner',
    riskRating: 'GREEN',
    ultimateBeneficialOwner: 'Elena Rostova (100% individual beneficial owner)',
    ownershipOpaque: false,
    governmentConnection: 'None. Commercial private enterprise with audited accounts.',
    bankAccountVerified: true,
    commercialRationale: 'Provides Bluetooth/4G telemetry sensors fitted onto regional logistics fleet trucks.',
    contractualAuditRightsAccepted: true,
    statusNotes: 'Passed all 4 diligence pillars. Flow-down anti-bribery and IP clauses fully executed.',
    flagsTriggered: [],
    onboardingStage: 'Transaction Monitoring'
  },
  {
    id: 'tpi-3',
    name: 'Orion Straits Maritime Intermediary Corp',
    jurisdiction: 'British Virgin Islands / Offshore',
    role: 'Regulatory & Port Access Consultant',
    riskRating: 'RED',
    ultimateBeneficialOwner: 'Opaque nominee trust; representative refused to identify beneficial owners.',
    ownershipOpaque: true,
    governmentConnection: 'Selected personally by local partner citing "key relationships inside maritime regulatory committee".',
    bankAccountVerified: false,
    commercialRationale: 'Claimed "relationship management" and "permitting facilitation" without measurable deliverables.',
    contractualAuditRightsAccepted: false,
    statusNotes: 'BLOCKED / NO-GO TRIGGERED. Mandatory 7-step blocking protocol executed. Refusal to disclose beneficial owners + vague success fee.',
    flagsTriggered: [
      'Refusal to disclose beneficial ownership',
      'Unexplained offshore structure (BVI nominee trust)',
      'Vague relationship management charges & undefined success fee',
      'Refusal to accept anti-bribery clauses or audit rights'
    ],
    onboardingStage: 'Blocked / Frozen'
  },
  {
    id: 'tpi-4',
    name: 'Equator Drayage Logistics Hub Co.',
    jurisdiction: 'Host Country (Free Trade Zone)',
    role: 'Last-Mile Cross-Docking Subcontractor',
    riskRating: 'GREEN',
    ultimateBeneficialOwner: 'Cheung Brothers Logistics Group (Singapore-registered parent)',
    ownershipOpaque: false,
    governmentConnection: 'None. Standard commercial freight handler.',
    bankAccountVerified: true,
    commercialRationale: 'Operates 14 refrigerated transit cross-dock warehouses connected to platform APIs.',
    contractualAuditRightsAccepted: true,
    statusNotes: 'Verified operating physical facilities and insurance. Regular milestone verification active.',
    flagsTriggered: [],
    onboardingStage: 'Transaction Monitoring'
  }
];

export const MANDATORY_GRANT_BACK_CLAUSE = `SECTION VI. MANDATORY GRANT-BACK / AUTOMATIC ASSIGNMENT CLAUSE

CORE AI IMPROVEMENT — AUTOMATIC ASSIGNMENT AND GRANT-BACK.

To the maximum extent permitted by applicable law, all right, title and interest in and to any Improvement, modification, adaptation, enhancement, optimization, derivative work, fine-tuning, retraining methodology, model architecture modification, algorithmic improvement, inference optimization, model compression technique, or other development that (i) modifies, enhances, is derived from, is based upon, incorporates, or materially improves any Core AI IP or other Firm Background IP, or (ii) could not reasonably have been developed without access to or use of the Core AI IP or Firm Background IP (collectively, “Core AI Improvements”), shall vest exclusively in the Firm immediately upon creation.

To the extent any Core AI Improvement does not automatically vest in the Firm by operation of law, the Partner and the JV hereby irrevocably assign, transfer and convey to the Firm, and shall procure the assignment, transfer and conveyance to the Firm of, all worldwide right, title and interest in and to such Core AI Improvement, including all intellectual property rights, patent rights, copyright, database rights, trade secret rights, design rights, know-how rights and all rights to apply for, register, prosecute, maintain, enforce and recover damages in respect of such rights.

Such assignment shall be effective immediately upon creation and shall not require further payment, consent, approval, notice or other act by the Firm. The Partner and JV shall execute, and procure execution of, all instruments reasonably requested by the Firm to evidence, perfect, register or enforce such ownership.

Neither the Partner nor the JV shall acquire any ownership interest in any Core AI Improvement by virtue of authorship, development effort, funding, technical contribution, access to Core AI IP, integration of local data, provision of personnel, payment of development costs, or participation in the JV.

To the extent any Core AI Improvement cannot legally be assigned in advance or automatically, the Partner and JV grant the Firm an exclusive, perpetual, irrevocable, worldwide, fully paid-up, royalty-free, transferable and sublicensable license to exploit such Core AI Improvement for all purposes, together with an irrevocable covenant to execute the assignment immediately upon such rights becoming assignable.

The Partner and JV shall not commercialize, license, disclose, transfer, reverse engineer, reproduce, train, fine-tune, deploy or otherwise exploit any Core AI Improvement except as expressly authorized in writing by the Firm.`;

export const RED_FLAG_RESPONSE_PROTOCOL_STEPS = [
  {
    step: 1,
    action: 'STOP',
    title: 'Halt Onboarding & Negotiations',
    detail: 'Immediately freeze onboarding, commercial talks, contract drafting, and any operational deployment with the intermediary.'
  },
  {
    step: 2,
    action: 'PRESERVE',
    title: 'Preserve Diligence Records',
    detail: 'Secure all communications, questionnaires, meeting notes, invoice drafts, and emails in an immutable compliance repository.'
  },
  {
    step: 3,
    action: 'ESCALATE',
    title: 'Escalate to General Counsel & CCO',
    detail: 'Submit formal Notification of Disqualifying Red Flag to the General Counsel, Chief Compliance Officer, and Transaction Committee.'
  },
  {
    step: 4,
    action: 'INVESTIGATE',
    title: 'Conduct Documented Enhanced Diligence',
    detail: 'Initiate formal investigative review. Independent corporate intelligence check on ownership, banking, and government ties.'
  },
  {
    step: 5,
    action: 'DECIDE',
    title: 'Adjudicate Permissibility / Remedy / Rejection',
    detail: 'Determine whether the defect is remediable within strict statutory bounds or represents an absolute legal barrier.'
  },
  {
    step: 6,
    action: 'DOCUMENT',
    title: 'Formalize Rationale & Approvals',
    detail: 'Draft privileged Compliance Memorandum documenting findings, risk analysis, and final decision signatures.'
  },
  {
    step: 7,
    action: 'REPORT & TERMINATE',
    title: 'Terminate Engagement & Report if Required',
    detail: 'Issue formal notice of termination. If corruption or sanctions violations are established, assess mandatory self-reporting thresholds.'
  }
];

export const DATA_TAXONOMY_CATEGORIES = [
  {
    name: 'Partner Background Data',
    owner: 'Local Partner',
    scope: 'Pre-existing local logistics datasets, historical freight books, warehouse capacity logs, road traffic databases, local customer contact lists.',
    legalStatus: 'Licensed to JV solely for operational routing in territory; strictly segregated from model training weights.',
    technicalRingfence: 'Read-only access via isolated connector; data never persisted in Firm model training repositories.'
  },
  {
    name: 'JV Operational Data',
    owner: 'Joint Venture Co.',
    scope: 'Real-time booking records, active shipment status, waypoint timestamps, local billing ledgers, local user session logs.',
    legalStatus: 'JV property for operational continuity; either party holds non-exclusive run-out rights upon exit.',
    technicalRingfence: 'Resides inside JV tenant database instance; subject to dual-key authorization and data-portability export.'
  },
  {
    name: 'Firm Background IP',
    owner: 'The Firm (Retained)',
    scope: 'Core neural routing algorithms, foundational transformer architectures, pre-trained model weights, training methodologies, prompt systems.',
    legalStatus: 'Firm-owned crown-jewel assets; narrow non-exclusive revocable license to JV; no implied transfer.',
    technicalRingfence: 'Hosted strictly within Firm-controlled cloud enclave; exposed solely through authenticated inference API.'
  },
  {
    name: 'Firm Model Telemetry',
    owner: 'The Firm (Retained)',
    scope: 'Inference latency logs, token counts, gradient drift telemetry, loss metrics, API gateway access audits, query execution stats.',
    legalStatus: 'Exclusive property of the Firm; used to monitor model integrity, anomalous requests, and reverse-engineering attempts.',
    technicalRingfence: 'Encrypted push to Firm global monitoring pipeline; impenetrable to partner engineers.'
  },
  {
    name: 'Foreground IP',
    owner: 'Allocated by Category',
    scope: 'Core AI improvements vest in Firm; local product UI/UX & regional connectors vest in JV; partner improvements vest in Partner.',
    legalStatus: 'Governed by Section VI Automatic Assignment & Grant-Back Clause and Foreground IP Allocation Schedule.',
    technicalRingfence: 'Continuous code commit classification via CI/CD gates and IP Disclosure Committee review.'
  }
];

export const LOCAL_COUNSEL_CHECKLIST_ITEMS = [
  { id: 'lc-1', topic: 'Enforceability of Automatic IP Assignment', requirement: 'Ensure local law recognizes present assignment of future copyright and patent rights without separate confirmatory deeds.', status: 'Reviewed & Addressed' },
  { id: 'lc-2', topic: 'Grant-Back & Competition Law Compliance', requirement: 'Confirm mandatory grant-back does not breach local anti-monopoly or restrictive trade practices regulations.', status: 'Reviewed & Addressed' },
  { id: 'lc-3', topic: 'Moral Rights Waiver Treatment', requirement: 'Confirm employee/contractor moral rights waivers are enforceable and irrevocable under local intellectual property statutes.', status: 'Reviewed & Addressed' },
  { id: 'lc-4', topic: 'Source-Code Escrow Mechanics', requirement: 'Verify that escrow release conditions cannot be seized or blocked by local insolvency trustees or bankruptcy courts.', status: 'Reviewed & Addressed' },
  { id: 'lc-5', topic: 'Neutral International Arbitration & Award Recognition', requirement: 'Confirm host country is party to the 1958 New York Convention on the Recognition and Enforcement of Foreign Arbitral Awards without carveouts for technology JVs.', status: 'Reviewed & Addressed' },
  { id: 'lc-6', topic: 'Foreign Governing Law Enforceability', requirement: 'Confirm choice of English / Delaware law will be respected in cross-border shareholder agreements.', status: 'Reviewed & Addressed' },
  { id: 'lc-7', topic: 'Deadlock & Texas Shootout Enforceability', requirement: 'Confirm shotgun buy-sell options comply with local corporate law preemption rights and share transfer restrictions.', status: 'Reviewed & Addressed' },
  { id: 'lc-8', topic: 'Cross-Border Technology-Transfer Restrictions', requirement: 'Validate whether dual-use technology or cryptographic API export permits are required by host state ministry of trade.', status: 'Reviewed & Addressed' },
  { id: 'lc-9', topic: 'Data Localization & Sovereign Privacy Statutes', requirement: 'Ensure shipping telemetry and logistics metadata can be lawfully processed in Firm\'s secure cloud without sovereign data repatriation orders.', status: 'Reviewed & Addressed' },
  { id: 'lc-10', topic: 'Employment IP & Invention Remuneration', requirement: 'Verify statutory inventor remuneration regimes do not create unliquidated statutory claims against Firm for local JV developers.', status: 'Reviewed & Addressed' }
];
