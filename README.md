# MATHLIB5 Meta-Architecture MCP Server

> **Custom MCP Server** that bridges the 10-layer VSCP architecture to AI agents

This MCP (Model Context Protocol) server provides full system introspection for the MATHLIB5 VSCP meta-architecture, allowing AI agents to:
- Query the complete 10-layer pipeline
- Access layer-specific tools and capabilities
- Coordinate with sovereign agents (Cipher, Forge, Sentinel, Vault, Oracle, Nexus, Solarium)
- Execute commands across the entire stack

## Features

### Architecture Introspection
- Full 10-layer VSCP pipeline access
- Agent capability queries
- Security configuration exposure
- Real-time system metadata

### Layer Access
Each of the 10 layers is exposed with its own tools:

| Layer | Name | Language | Tools |
|-------|------|----------|-------|
| 1 | APL Frontend | Haskell | `parse_apl` |
| 2 | S-Expr IR | Haskell | `generate_sexpr` |
| 3 | Liquid Haskell | Haskell | `refine_types` |
| 4 | Lean 4 HOL | Lean4 | `prove_theorem` |
| 5 | C-- Kernel | C-- | `verify_kernel` |
| 6 | FOL/CodeQL | C99/Datalog | `validate_fol` |
| 7 | ASP/Prolog | Clingo/SWI | `solve_asp` |
| 8 | PRISM/P-NP | Rust | `search_prism` |
| 9 | WORM Chain | Rust | `seal_worm` |
| 10 | Sorry Hunter | Rust | `hunt_sorries` |

### Agent Coordination
Access to all 7 sovereign agents:
- **Cipher**: Verification Strategy
- **Forge**: Code Generation
- **Sentinel**: Audit & Security
- **Vault**: Memory Persistence
- **Oracle**: Analysis & Scaffolding
- **Nexus**: Swarm Coordination
- **Solarium**: Semantic Knowledge

## Installation

```bash
# Clone and install
cd mathlib5-spec-mcp
git clone https://github.com/SNAPKITTYWEST/mathlib5-spec-mcp.git
cd mathlib5-spec-mcp
npm install
npm run build

# Run the server
node dist/index.js
```

## MCP Configuration

Add to your MCP client configuration:

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

## Usage Examples

### Query Architecture

```python
# Python MCP client
from mcp import Client

client = Client("mathlib5-spec")

# Get full architecture
architecture = client.read_resource("urn:mathlib5:architecture")

# Get specific layer
layer_4 = client.read_resource("urn:mathlib5:layer:4")

# List all layers
layers = client.read_resource("urn:mathlib5:layers")
```

### Use Tools

```python
# Parse APL code
result = client.call_tool("parse_apl", {"code": "3 + 4 * 2"})

# Prove a theorem
result = client.call_tool("prove_theorem", {
    "statement": "forall x y, x + y = y + x",
    "context": "commutative_addition"
})

# Seal WORM chain
result = client.call_tool("seal_worm", {})
```

### Agent Coordination

```python
# Query Solarium
result = client.call_tool("query_solarium", {
    "query": "Find all theorems about commutative operations"
})

# Coordinate swarm
result = client.call_tool("coordinate_swarm", {
    "task": "Verify all layer 3 refinements",
    "agents": ["cipher", "forge", "sentinel"]
})

# Audit system
result = client.call_tool("audit_system", {
    "scope": "layers 1-5",
    "depth": "full"
})
```

## Resources

### URIs

| URI | Description |
|-----|-------------|
| `urn:mathlib5:architecture` | Full architecture definition |
| `urn:mathlib5:layers` | All layers list |
| `urn:mathlib5:agents` | All agents list |
| `urn:mathlib5:security` | Security configuration |
| `urn:mathlib5:metadata` | System metadata |
| `urn:mathlib5:summary` | Human-readable summary |
| `urn:mathlib5:layer:{id}` | Specific layer (1-10) |
| `urn:mathlib5:agent:{name}` | Specific agent |
| `urn:mathlib5:tool:{name}` | Specific tool |

### Tools

**System Tools:**
- `get_architecture` - Get full architecture JSON
- `get_layer` - Get specific layer by ID
- `list_layers` - List all layers
- `list_agents` - List all agents
- `get_agent_capabilities` - Get agent capabilities
- `get_security_config` - Get security configuration
- `list_tools` - List all available tools

**Layer Tools:**
- `parse_apl` - Parse APL code
- `generate_sexpr` - Generate S-expression IR
- `refine_types` - Apply Liquid Haskell refinement
- `prove_theorem` - Prove Lean theorem
- `verify_kernel` - Verify C-- kernel
- `validate_fol` - Validate FOL formula
- `solve_asp` - Solve ASP program
- `search_prism` - Multi-agent search
- `seal_worm` - Seal WORM chain
- `hunt_sorries` - Hunt Lean sorries

**Agent Tools:**
- `query_solarium` - Query semantic knowledge
- `coordinate_swarm` - Coordinate multi-agent task
- `audit_system` - Perform system audit

## Integration with Janet/Hy

The MCP server uses the same architecture definition as the Janet and Hy specs:

```janet
# From mathlib5/spec/architecture.janet
(def architecture
  {:name "MATHLIB5 VSCP"
   :version "1.0.0"
   :layers [
     {:id 1 :name "APL Frontend" :lang "Haskell" :tool "Megaparsec"}
     ...
   ]
   :agents {...}
   :security {...}})
```

The MCP server provides programmatic access to this same structure, allowing AI agents to reason about the architecture using the same definitions.

## Metadata for AI

The server exposes comprehensive metadata that allows AI to understand:

1. **System Structure**: 10 layers, their relationships, and dependencies
2. **Language Ecosystem**: Haskell, Lean4, C--, Rust, C99, Datalog
3. **Agent Capabilities**: What each agent can do
4. **Security Model**: Plasma Gate, AES-256-GCM, SHA-256 Merkle
5. **Verification Status**: Current state of WORM sealing and validation

This metadata enables AI agents to:
- Navigate the architecture autonomously
- Discover available tools and capabilities
- Understand dependencies between layers
- Make informed decisions about task delegation

## Development

```bash
# Build
npm run build

# Development mode (auto-reload)
npm run dev

# Test
npm test
```

## License

Apache 2.0 - Sovereign Source License compatible

## Sovereign Status

- **WORM Sealed**: Pending
- **Verification**: awaiting_worm_seal
- **Sovereign**: True

---

**Part of SNAPKITTYWEST sovereign mathematics infrastructure**
