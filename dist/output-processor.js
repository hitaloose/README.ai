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
exports.outputProcessor = void 0;
const openai_1 = __importDefault(require("openai"));
const outputProcessor = (content, options) => __awaiter(void 0, void 0, void 0, function* () {
    if (options.outputRawChat) {
        return content;
    }
    if (!options.openaiToken) {
        throw new Error("OpenAi token is not provided");
    }
    const client = new openai_1.default({
        apiKey: options.openaiToken,
    });
    const aiResponse = yield client.chat.completions.create({
        model: options.openaiModel,
        messages: [
            {
                role: "user",
                content: content,
            },
        ],
    });
    const output = aiResponse.choices[0].message.content || "";
    return output.trim();
});
exports.outputProcessor = outputProcessor;
