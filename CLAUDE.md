# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Genkit TypeScript chatbot with RAG (Retrieval-Augmented Generation) capabilities using AstraDB as the vector database. The project integrates Google AI models with AstraDB for document indexing and retrieval.

## Key Dependencies

- **genkit**: Core Genkit framework for building AI applications
- **@genkit-ai/googleai**: Google AI integration (Gemini 2.0 Flash, text embeddings)
- **genkitx-astra-db**: AstraDB plugin for vector storage and retrieval

## Development Commands

Currently no build, test, or lint scripts are configured in package.json. The project uses:
- `node index.js` or `ts-node index.ts` to run the application
- No test framework configured yet

## Architecture

The application is structured around Genkit's flow-based architecture:
- Uses Google AI's `textEmbedding004` for generating embeddings
- Uses `gemini20Flash` for LLM responses  
- Uses AstraDB for vector storage with `astraDBIndexerRef` and `astraDBRetrieverRef`
- Main application logic in `index.ts` (currently minimal implementation)

## Environment Setup

The project expects environment variables for:
- Google AI API credentials
- AstraDB connection details (endpoint, token, keyspace, collection)

Check `.env` files for required configuration (excluded by .gitignore).