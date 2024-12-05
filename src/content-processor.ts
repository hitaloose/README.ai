import globby from "globby";
import fs from "fs/promises";
import { OptionValues } from "option-values";

export const contentProcessor = async (options: OptionValues) => {
  const ignoreFiles = options.ignoreFiles.split(",").map((item) => `!${item}`);

  const files = await globby(["**/*", ...ignoreFiles]);
  const filesContent: Record<string, string> = {};

  for (const file of files) {
    const fileContent = await fs.readFile(file);
    filesContent[file] = fileContent.toString();
  }

  const content = [`Create a professional and modern README for the following project:`];
  content.push(`Project contains ${files.length} files: ${files.join(" ,")}`);

  files.forEach((file) => {
    content.push(`### ${file}`);
    content.push(filesContent[file]);
  });

  return content.join("\n\n");
};
