# Architecture Meta-Definition (Janet)
# Path: mathlib5/spec/architecture.janet

(def architecture
  {:name "MATHLIB5 VSCP"
   :version "1.0.0"
   :layers [
     {:id 1 :name "APL Frontend" :lang "Haskell" :tool "Megaparsec"}
     {:id 2 :name "S-Expr IR" :lang "Haskell" :format "Canonical"}
     {:id 3 :name "Liquid Haskell" :lang "Haskell" :role "Refinement"}
     {:id 4 :name "Lean 4 HOL" :lang "Lean4" :role "Theorem Proving"}
     {:id 5 :name "C-- Kernel" :lang "C--" :role "Verified Assembly"}
     {:id 6 :name "FOL/CodeQL" :lang "C99/Datalog" :role "Meta-Validation"}
     {:id 7 :name "ASP/Prolog" :lang "Clingo/SWI" :role "Solver Dispatch"}
     {:id 8 :name "PRISM/P-NP" :lang "Rust" :role "Multi-Agent Search"}
     {:id 9 :name "WORM Chain" :lang "Rust" :role "Tamper-Evidence"}
     {:id 10 :name "Sorry Hunter" :lang "Rust" :role "Automated Closing"}
   ]
   :agents {
     :cipher "Verification Strategy"
     :forge "Code Generation"
     :sentinel "Audit & Security"
     :vault "Memory Persistence"
     :oracle "Analysis & Scaffolding"
     :nexus "Swarm Coordination"
     :solarium "Semantic Knowledge"
   }
   :security {
     :gate "Plasma Gate (Ed25519)"
     :encryption "AES-256-GCM"
     :integrity "SHA-256 Merkle"
   }})

(defn validate-layer [layer]
  (if (and (get layer :id) (get layer :name))
    (print "Layer " (get layer :id) ": " (get layer :name) " [OK]")
    (error "Invalid layer definition")))

(defn main [& args]
  (print "Initializing MATHLIB5 Meta-Architecture...")
  (each l (get architecture :layers)
    (validate-layer l))
  (print "Sovereign Pipeline Ready."))

; MCP Integration Functions
; These functions mirror the MCP server capabilities for Janet-based access

(defn get-layer-by-id [id]
  (first (filter (fn [l] (= (get l :id) id)) (get architecture :layers))))

(defn get-agent-capabilities [agent-name]
  (let [agents (get architecture :agents)]
    (if (contains? agents agent-name)
      (get agents agent-name)
      (error (string "Agent " agent-name " not found")))))

(defn list-all-layers []
  (get architecture :layers))

(defn list-all-agents []
  (get architecture :agents))

; Export for MCP server integration
(setdyn :*mcp-architecture* architecture)
(setdyn :*mcp-get-layer* get-layer-by-id)
(setdyn :*mcp-get-agent* get-agent-capabilities)
