// MATHLIB5 Meta-Architecture Definition
// Programmatic representation for AI introspection

export interface ArchitectureLayer {
  id: number;
  name: string;
  lang: string;
  tool?: string;
  format?: string;
  role?: string;
  path?: string;
  description?: string;
}

export interface ArchitectureAgent {
  name: string;
  role: string;
  capabilities: string[];
}

export interface SecurityConfig {
  gate: string;
  encryption: string;
  integrity: string;
}

export interface FullArchitecture {
  name: string;
  version: string;
  layers: ArchitectureLayer[];
  agents: Record<string, string>;
  security: SecurityConfig;
  metadata: {
    sovereign: boolean;
    wormSealed: boolean;
    verificationStatus: string;
    lastUpdated: string;
  };
}

// MATHLIB5 VSCP 10-Layer Architecture
export const ARCHITECTURE: FullArchitecture = {
  name: "MATHLIB5 VSCP",
  version: "1.0.0",
  layers: [
    {
      id: 1,
      name: "APL Frontend",
      lang: "Haskell",
      tool: "Megaparsec",
      path: "mathlib5/layers/apl/",
      description: "APL syntax parsing and abstract syntax tree generation"
    },
    {
      id: 2,
      name: "S-Expr IR",
      lang: "Haskell",
      format: "Canonical",
      path: "mathlib5/layers/sexpr/",
      description: "Intermediate representation in S-expression format"
    },
    {
      id: 3,
      name: "Liquid Haskell",
      lang: "Haskell",
      role: "Refinement",
      path: "mathlib5/layers/liquid/",
      description: "Type refinement and formal verification layer"
    },
    {
      id: 4,
      name: "Lean 4 HOL",
      lang: "Lean4",
      role: "Theorem Proving",
      path: "mathlib5/layers/hol/",
      description: "Higher-order logic theorem proving"
    },
    {
      id: 5,
      name: "C-- Kernel",
      lang: "C--",
      role: "Verified Assembly",
      path: "mathlib5/kernel/verified_kernel.cm",
      description: "Verified low-level kernel implementation"
    },
    {
      id: 6,
      name: "FOL/CodeQL",
      lang: "C99/Datalog",
      role: "Meta-Validation",
      path: "mathlib5/layers/fol/",
      description: "First-order logic validation and CodeQL analysis"
    },
    {
      id: 7,
      name: "ASP/Prolog",
      lang: "Clingo/SWI",
      role: "Solver Dispatch",
      path: "mathlib5/layers/asp/",
      description: "Answer Set Programming and Prolog solver integration"
    },
    {
      id: 8,
      name: "PRISM/P-NP",
      lang: "Rust",
      role: "Multi-Agent Search",
      path: "mathlib5/layers/prism-skills/",
      description: "Probabilistic reasoning and P/NP complexity analysis"
    },
    {
      id: 9,
      name: "WORM Chain",
      lang: "Rust",
      role: "Tamper-Evidence",
      path: ".worm/",
      description: "Write-Once Read-Many tamper-evident ledger"
    },
    {
      id: 10,
      name: "Sorry Hunter",
      lang: "Rust",
      role: "Automated Closing",
      path: "mathlib5/layers/sorryhunter/",
      description: "Automated proof completion for Lean sorries"
    }
  ],
  agents: {
    cipher: "Verification Strategy",
    forge: "Code Generation",
    sentinel: "Audit & Security",
    vault: "Memory Persistence",
    oracle: "Analysis & Scaffolding",
    nexus: "Swarm Coordination",
    solarium: "Semantic Knowledge"
  },
  security: {
    gate: "Plasma Gate (Ed25519)",
    encryption: "AES-256-GCM",
    integrity: "SHA-256 Merkle"
  },
  metadata: {
    sovereign: true,
    wormSealed: false,
    verificationStatus: "awaiting_worm_seal",
    lastUpdated: "2026-07-10"
  }
};

// Agent capabilities
export const AGENT_CAPABILITIES: Record<string, ArchitectureAgent> = {
  cipher: {
    name: "Cipher",
    role: "Verification Strategy",
    capabilities: [
      "Formal proof validation",
      "Type checking",
      "Constraint solving",
      "Invariant verification"
    ]
  },
  forge: {
    name: "Forge",
    role: "Code Generation",
    capabilities: [
      "APL code synthesis",
      "Haskell compilation",
      "Lean proof generation",
      "Rust binding creation"
    ]
  },
  sentinel: {
    name: "Sentinel",
    role: "Audit & Security",
    capabilities: [
      "Security audit",
      "Vulnerability scanning",
      "Cryptographic verification",
      "Access control"
    ]
  },
  vault: {
    name: "Vault",
    role: "Memory Persistence",
    capabilities: [
      "WORM chain storage",
      "State persistence",
      "Version control",
      "Data retrieval"
    ]
  },
  oracle: {
    name: "Oracle",
    role: "Analysis & Scaffolding",
    capabilities: [
      "System analysis",
      "Architecture introspection",
      "Dependency mapping",
      "Performance profiling"
    ]
  },
  nexus: {
    name: "Nexus",
    role: "Swarm Coordination",
    capabilities: [
      "Multi-agent orchestration",
      "Task distribution",
      "Result aggregation",
      "Conflict resolution"
    ]
  },
  solarium: {
    name: "Solarium",
    role: "Semantic Knowledge",
    capabilities: [
      "Document chunking",
      "Vector embedding",
      "Semantic search",
      "Contextual retrieval"
    ]
  }
};

// Tool definitions for each layer
export interface LayerTool {
  name: string;
  layerId: number;
  command: string;
  description: string;
  arguments: { name: string; type: string; description: string }[];
}

export const LAYER_TOOLS: LayerTool[] = [
  {
    name: "parse_apl",
    layerId: 1,
    command: "mathlib5/layers/apl/parse",
    description: "Parse APL source code into AST",
    arguments: [
      { name: "code", type: "string", description: "APL code to parse" }
    ]
  },
  {
    name: "generate_sexpr",
    layerId: 2,
    command: "mathlib5/layers/sexpr/generate",
    description: "Generate S-expression IR from AST",
    arguments: [
      { name: "ast", type: "object", description: "Abstract syntax tree" }
    ]
  },
  {
    name: "refine_types",
    layerId: 3,
    command: "mathlib5/layers/liquid/refine",
    description: "Apply Liquid Haskell type refinement",
    arguments: [
      { name: "code", type: "string", description: "Haskell code to refine" }
    ]
  },
  {
    name: "prove_theorem",
    layerId: 4,
    command: "mathlib5/layers/hol/prove",
    description: "Prove theorem using Lean 4",
    arguments: [
      { name: "statement", type: "string", description: "Theorem statement" },
      { name: "context", type: "string", description: "Proof context" }
    ]
  },
  {
    name: "verify_kernel",
    layerId: 5,
    command: "mathlib5/kernel/verify",
    description: "Verify C-- kernel correctness",
    arguments: []
  },
  {
    name: "validate_fol",
    layerId: 6,
    command: "mathlib5/layers/fol/validate",
    description: "Validate first-order logic formulas",
    arguments: [
      { name: "formula", type: "string", description: "FOL formula to validate" }
    ]
  },
  {
    name: "solve_asp",
    layerId: 7,
    command: "mathlib5/layers/asp/solve",
    description: "Solve ASP program using Clingo",
    arguments: [
      { name: "program", type: "string", description: "ASP program code" }
    ]
  },
  {
    name: "search_prism",
    layerId: 8,
    command: "mathlib5/layers/prism-skills/search",
    description: "Multi-agent search using PRISM",
    arguments: [
      { name: "query", type: "string", description: "Search query" }
    ]
  },
  {
    name: "seal_worm",
    layerId: 9,
    command: "scripts/generate_metadata.ps1",
    description: "Seal WORM chain with current state",
    arguments: []
  },
  {
    name: "hunt_sorries",
    layerId: 10,
    command: "mathlib5/layers/sorryhunter/hunt",
    description: "Find and attempt to close Lean sorries",
    arguments: [
      { name: "file", type: "string", description: "Lean file to check" }
    ]
  }
];
