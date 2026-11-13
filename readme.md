# Research Gap Discovery

## Overview

Research Gap Discovery is a web-based system designed to help researchers
identify potential research gaps by analyzing existing scholarly literature.

The system allows users to either upload an existing research PDF or enter
their research idea. It then searches selected scholarly sources, analyzes
relevant literature, compares existing research, and identifies candidate
research gaps.

## Main Objectives

- Analyze existing scholarly literature
- Identify potential research gaps
- Compare related research papers
- Perform semantic similarity analysis
- Provide a literature-based novelty/originality assessment
- Suggest possible research improvements
- Generate a final research gap report

## Research Input

Users can provide their research in two ways:

1. Upload a research PDF
2. Enter a research idea manually

## Scholarly Sources

The system is planned to support:

- IEEE Xplore
- ScienceDirect / Elsevier
- SpringerLink
- ACM Digital Library
- Semantic Scholar
- OpenAlex

## Access and Subscription

The system will ask users whether they have authorized subscription or
institutional access to selected scholarly platforms.

If authorized access is available, the system will use the appropriate
official access/API mechanisms supported by the provider.

If authorized access is not available, the system will work with publicly
available metadata, abstracts, and permitted open-access content.

## Planned Technology Stack

### Frontend

- HTML
- CSS
- JavaScript

### Backend and Services

- Firebase Authentication
- Firebase Storage
- Cloud Firestore
- Firebase Cloud Functions

### AI and Research Analysis

- NLP
- Embeddings
- Semantic similarity
- Cosine similarity
- Semantic search
- Retrieval-Augmented Generation (RAG)
- Large Language Model (LLM)

## Planned System Workflow

User Login
→ Select Research Input
→ Select Scholarly Sources
→ Check Authorized Access
→ Process Research Input
→ Generate Research Queries
→ Retrieve Literature
→ Normalize and Deduplicate
→ Generate Embeddings
→ Semantic Similarity Analysis
→ Select Relevant Papers
→ Cross-Paper Comparison
→ RAG Context Construction
→ LLM Analysis
→ Candidate Research Gaps
→ Evidence Linking
→ Novelty / Originality Assessment
→ Research Improvement Suggestions
→ Graphical Analysis
→ Final Research Gap Report

## Project Structure

```text
research-gap-discovery/
│
├── index.html
├── style.css
├── app.js
├── README.md
│
├── frontend/
│
├── functions/
│
├── firebase/
│
└── ...