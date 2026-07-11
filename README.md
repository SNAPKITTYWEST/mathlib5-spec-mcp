# MATHLIB5 SPEC MCP

> **A Model Context Protocol server that exposes the MATHLIB5 VSCP meta-architecture to AI agents.**
>
> `Ω ← TRUST ∧ CODE`

Part of the **SNAPKITTYWEST** sovereign-compute constellation. This is the introspection
surface for [MATHLIB5](https://github.com/SNAPKITTYWEST/mathlib5) — it lets agents *reason
about* the 10-layer verified pipeline through a stable, machine-readable protocol.

---

## OVERVIEW

MATHLIB5 SPEC MCP is a TypeScript **MCP (Model Context Protocol) server** built on
`@modelcontextprotocol/sdk`. It publishes the full MATHLIB5 VSCP architecture — its ten
layers, seven sovereign agents, security posture, and per-layer tooling — as MCP **resources**
and **tools**, so that AI agents can discover the system, query dependencies, and delegate work
without human intervention.

The same architecture definition is mirrored across three languages (TypeScript, Janet, Hy) so
that the meta-spec stays canonical regardless of which runtime an agent lives in.

## WHAT IT IS

- A single-process **stdio MCP server** (`src/index.ts`) exposing resources + tools.
- A **typed architecture definition** (`src/architecture.ts`) — the source of truth for layers,
  agents, security config, and layer tools, with interfaces (`FullArchitecture`,
  `ArchitectureLayer`, `ArchitectureAgent`, `LayerTool`).
- **Cross-language mirrors** of the same spec in Lisp dialects: `spec/architecture.hy`
  (Hy → Python) and `spec/architecture.janet`.
- A **comprehensive metadata document** (`metadata/system-metadata.json`) with layer
  dependency graphs (`produces`/`consumes`), agent `accessesLayers`, keywords, and the WORM
  seal schedule — designed for autonomous agent navigation.

## ARCHITECTURE / COMPONENTS

| Path | Language | Purpose |
|------|----------|---------|
| `src/index.ts` | TypeScript | MCP server: registers resources, tool list, and `CallTool`/`ReadResource` handlers |
| `src/architecture.ts` | TypeScript | Canonical `ARCHITECTURE`, `AGENT_CAPABILITIES`, `LAYER_TOOLS` definitions |
| `spec/architecture.hy` | Hy (Lisp→Python) | Mirror spec + `get-layer-by-id` / `get-agent-capabilities` helpers |
| `spec/architecture.janet` | Janet | Mirror spec for Janet-based agents |
| `metadata/system-metadata.json` | JSON | Full dependency graph, agent layer-access map, WORM schedule |
| `package.json` | — | `build` (tsc), `start`, `dev` (ts-node); dep `@modelcontextprotocol/sdk ^0.6.0` |
| `tsconfig.json` | — | TypeScript compiler configuration |

### The 10-layer VSCP pipeline (as served)

| # | Layer | Language | MCP tool |
|---|-------|----------|----------|
| 1 | APL Frontend | Haskell (Megaparsec) | `parse_apl` |
| 2 | S-Expr IR | Haskell (canonical) | `generate_sexpr` |
| 3 | Liquid Haskell | Haskell | `refine_types` |
| 4 | Lean 4 HOL | Lean4 | `prove_theorem` |
| 5 | C-- Kernel | C-- | `verify_kernel` |
| 6 | FOL/CodeQL | C99/Datalog | `validate_fol` |
| 7 | ASP/Prolog | Clingo/SWI | `solve_asp` |
| 8 | PRISM/P-NP | Rust | `search_prism` |
| 9 | WORM Chain | Rust | `seal_worm` |
| 10 | Sorry Hunter | Rust | `hunt_sorries` |

### Sovereign agents

Cipher (Verification Strategy), Forge (Code Generation), Sentinel (Audit & Security),
Vault (Memory Persistence), Oracle (Analysis & Scaffolding), Nexus (Swarm Coordination),
Solarium (Semantic Knowledge). Each carries a capability list and an `accessesLayers` map in
`metadata/system-metadata.json`.

### Resources & tools

**Resource URIs** — `urn:mathlib5:architecture`, `:layers`, `:agents`, `:security`,
`:metadata`, `:summary`, plus parameterized `:layer:{id}`, `:agent:{name}`, `:tool:{name}`.

**System tools** — `get_architecture`, `get_layer`, `list_layers`, `list_agents`,
`get_agent_capabilities`, `get_security_config`, `list_tools`.

**Agent tools** — `query_solarium`, `coordinate_swarm`, `audit_system`.

> Note: the layer tools (`parse_apl`, `prove_theorem`, …) are wired as MCP dispatch endpoints;
> `invokeLayerTool` currently returns a structured placeholder describing the command that a
> production deployment would execute against the underlying MATHLIB5 layer.

## HOW IT FITS THE CONSTELLATION

- **Plasma Gate / Ed25519** — the served `security` block declares `Plasma Gate (Ed25519)`,
  `AES-256-GCM` encryption, and `SHA-256 Merkle` integrity, matching the constellation trust root.
- **WORM chain / Bifrost** — layer 9 (`seal_worm`) and the metadata `wormChain` schema (SHA-256,
  Merkle linking, 6-hour seal interval) expose the tamper-evident ledger to agents;
  current status `awaiting_worm_seal`, `sovereign: true`.
- **P/NP swarm** — layer 8 (PRISM/P-NP) plus `coordinate_swarm` let agents claim, distribute,
  and aggregate proof-search work; the MCP server is the discovery layer for that swarm.
- **3-witness verification** — by publishing the same spec in TypeScript, Janet, and Hy, any
  claim about the architecture can be cross-checked across three independent runtimes before it
  is trusted.

## BUILD / USAGE / INSTALL

```bash
npm install
npm run build         # tsc → dist/
node dist/index.js    # start the MCP server (stdio)
# or during development:
npm run dev           # ts-node src/index.ts
```

Register with an MCP client:

```json
{
  "servers": {
    "mathlib5-spec": {
      "command": "node",
      "args": ["path/to/mathlib5-spec-mcp/dist/index.js"],
      "env": {}
    }
  }
}
```

Compatibility (per `metadata/system-metadata.json`): Janet 1.30+, Hy 0.26+, Node.js 20+,
MCP SDK 0.6+.

## KEY FILES REFERENCE

| File | Why it matters |
|------|----------------|
| `src/index.ts` | The MCP server entry point and request routing |
| `src/architecture.ts` | Canonical typed architecture / agents / tools |
| `metadata/system-metadata.json` | Dependency graph + agent access map for autonomous navigation |
| `spec/architecture.hy` | Hy mirror of the spec (Python runtime) |
| `spec/architecture.janet` | Janet mirror of the spec |
| `package.json` | Build/run scripts and MCP SDK dependency |

## LICENSE

Apache-2.0 — Sovereign Source License compatible. Author: SNAPKITTYWEST.
