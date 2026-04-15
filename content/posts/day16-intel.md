---
title: "Day 16: State Transition Hunting & Bug Bounty Architecture"
date: 2026-04-14
author: "prigma"
tags: ["Bug Bounty", "Smart Contract Auditing", "State Transitions", "Code Review"]
description: "Mapping global variable reads and writes to uncover logic flaws in decentralized protocols."
---

## IV. Current Execution State
I have initiated a global repository search (`grep -rnw . -e 'roundSnapshotSupply'`) to map every single read, write, and deletion of the target variable across the entire protocol architecture. We are hunting the state transitions.

---
> 🚀 **[Click here to see my full interactive bug bounty journey!](/PreshieDoesDeFi/briefings/bug-bounty.html)**
