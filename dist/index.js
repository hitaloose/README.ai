#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const promises_1 = __importDefault(require("fs/promises"));
const content_processor_1 = require("./content-processor");
const output_processor_1 = require("./output-processor");
const program = new commander_1.Command();
program
    .version("1.0.0")
    .option("-o, --output <type>", "Specifies the output file name (default: `README.md`)", "README.md")
    .option("-t, --openai-token <type>", "Provide an OpenAI API token for AI-assisted README generation")
    .option("-m, --openai-model <type>", "Provide an OpenAI model", "gpt-4")
    .option("-r, --output-raw-chat", "Outputs raw chat content for manual integration", false)
    .option("-i, --ignore-files <ignoreFiles>", "Files to scan ignore", "node_modules/**,package-lock.json,dist/**")
    .parse(process.argv);
const options = program.opts();
function generateReadme() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(options);
            const content = yield (0, content_processor_1.contentProcessor)(options);
            const output = yield (0, output_processor_1.outputProcessor)(content, options);
            yield promises_1.default.writeFile(options.output, output);
            console.log(`README generated: ${options.output}`);
        }
        catch (error) {
            console.error("Error generating README:");
        }
    });
}
generateReadme();
