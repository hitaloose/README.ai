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
exports.contentProcessor = void 0;
const globby_1 = require("globby");
const promises_1 = __importDefault(require("fs/promises"));
const contentProcessor = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const ignoreFiles = options.ignoreFiles.split(",").map((item) => `!${item}`);
    const files = yield (0, globby_1.globby)(["**/*", ...ignoreFiles]);
    const filesContent = {};
    for (const file of files) {
        const fileContent = yield promises_1.default.readFile(file);
        filesContent[file] = fileContent.toString();
    }
    const content = [`Create a professional and modern README for the following project:`];
    content.push(`Project contains ${files.length} files: ${files.join(" ,")}`);
    files.forEach((file) => {
        content.push(`### ${file}`);
        content.push(filesContent[file]);
    });
    return content.join("\n\n");
});
exports.contentProcessor = contentProcessor;
