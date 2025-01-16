import * as path from "path";
import * as dotenv from "dotenv";
import { createRequestHandler } from "@remix-run/express";
import express from "express";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const app = express();
const BUILD_DIR = path.join(__dirname, "build");

app.use(express.static("public"));

// Convert the build path to a file URL
const buildPath = `file://${BUILD_DIR}/index.js`;

app.all(
  "*",
  createRequestHandler({
    build: await import(buildPath),
    mode: process.env.NODE_ENV,
  })
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
}); 