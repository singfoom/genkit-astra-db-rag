import { z, genkit, Document } from "genkit";
import { textEmbedding004, googleAI, gemini20Flash } from "@genkit-ai/googleai";
import {
  astraDBIndexerRef,
  astraDBRetrieverRef,
  astraDB,
} from "genkitx-astra-db";

const collectionName = process.env.ASTRA_DB_COLLECTION_NAME!

const ai = genkit({
  plugins: [
    googleAI(),
    astraDB([
      {
        clientParams: {
          applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN!,
          apiEndpoint: process.env.ASTRA_DB_API_ENDPOINT!,
        },
        collectionName: collectionName,
        embedder: textEmbedding004,
      },
    ]),
  ],
});