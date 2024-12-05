#!/usr/bin/env node

import { Command } from "commander";
import { contentProcessor } from "content-processor";
import fs from "fs/promises";
import { type OptionValues } from "option-values";
import { outputProcessor } from "output-processor";

const program = new Command();

program
  .version("1.0.0")
  .option("-o, --output <type>", "Specifies the output file name (default: `README.md`)", "README.md")
  .option("-t, --openai-token <type>", "Provide an OpenAI API token for AI-assisted README generation")
  .option("-m, --openai-model <type>", "Provide an OpenAI model", "gpt-4")
  .option("-r, --output-raw-chat", "Outputs raw chat content for manual integration", false)
  .option("-i, --ignore-files <ignoreFiles>", "Files to scan ignore", "node_modules/**,package-lock.json,dist/**")
  .parse(process.argv);

const options = program.opts<OptionValues>();

async function generateReadme() {
  try {
    console.log(options);
    const content = await contentProcessor(options);
    const output = await outputProcessor(content, options);
    await fs.writeFile(options.output, output);
    console.log(`README generated: ${options.output}`);
  } catch (error) {
    console.error("Error generating README:");
  }
}

generateReadme();
