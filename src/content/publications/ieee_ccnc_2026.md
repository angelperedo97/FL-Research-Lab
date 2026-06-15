---
title: "Improving Generalization with Harmonic Aggregation in Personalized Federated Learning"
date: "2026"
venue: "2026 IEEE 23rd Consumer Communications & Networking Conference (CCNC)"
summary: "Statistical heterogeneity in Federated Learning (FL) causes gradient conflict, where updates from different clients oppose each other. Standard aggregation methods like FedAvg struggle in these non-IID settings, often degrading performance for minority clients and causing model divergence. To address this, we introduce FedHarmo, a model-agnostic aggregation strategy for personalized FL. FedHarmo operates by identifying and separating conflicting parameters at the client level. Each client computes a lightweight conflict score to detect parameters that are misaligned with the global update trend. These conflicting parameters are withheld from aggregation and updated only locally, allowing for client-specific specialization. Meanwhile, non-conflicting parameters are aggregated to build a robust global model. Our experiments demonstrate that FedHarmo improves peak accuracy for the majority of participating clients, which translates to a consistent 5% gain in the aggregated accuracy, without compromising convergence speed, thereby enhancing the end-user consumer experience."
authors:
- "Angel Peredo"
- "Sergei Chuprov"
link: "https://ieeexplore.ieee.org/abstract/document/11366390" # Optional: link to paper
---
