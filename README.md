# genkit-astra-db-rag
A Genkit Typescript chatbot with RAG database

# RAG with Astra DB and Firebase Genkit

This is an example of using [DataStax Astra DB](https://www.datastax.com/products/datastax-astra) with [Firebase Genkit](https://firebase.google.com/docs/genkit). It uses the [genkitx-astra-db](https://www.npmjs.com/package/genkitx-astra-db) plugin to make it easy to access Astra DB through Genkit.

## Running the application

First clone the app from GitHub:

```sh
git clone https://github.com/singfoom/genkit-astra-db-rag
cd genkit-astra-db-rag
```

Install the dependencies:

```sh
npm install
```

Create a .env file and populate the ASTRA_DB_API_ENDPOINT and GEMINI_API_KEY with credentials and values from your Google Gemini Account and your Astra DB account.

```sh
cp .env.example .env
```

Run the Genkit application with your code:

```sh
npm run genkit
```

Open the Genkit UI at [http://localhost:4000](http://localhost:4000) and check out the flows, indexers and retrievers.
