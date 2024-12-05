# readme.ai

`readme.ai` is a CLI tool designed to automate the generation of professional and modern `README.md` files for your projects. By leveraging the power of OpenAI models, `readme.ai` generates high-quality documentation tailored to your project's structure and content.

## Features

- **AI-Generated Content**: Uses OpenAI's GPT models to create professional documentation.
- **Customizable Output**: Specify output file names and formats.
- **File Filtering**: Easily exclude files or directories from being processed.
- **Raw Output Option**: Obtain raw AI-generated content for further manual integration.

## Installation

Clone this repository and install the dependencies:

```bash
npm install
```

## Usage

Run the CLI tool using the following command:

```bash
npm start -- [options]
```

### Options

- `-o, --output <type>`: Specifies the output file name (default: `README.md`).
- `-t, --openai-token <type>`: Provide an OpenAI API token for AI-assisted README generation.
- `-m, --openai-model <type>`: Specify the OpenAI model to use (default: `gpt-4`).
- `-r, --output-raw-chat`: Outputs raw chat content for manual integration (default: `false`).
- `-i, --ignore-files <ignoreFiles>`: Files or directories to ignore during processing (default: `node_modules/**,package-lock.json,dist/**,README.md`).

## Example

Generate a README file for your project:

```bash
npm start -- -t YOUR_OPENAI_API_KEY -m gpt-4
```

Specify a custom output file name:

```bash
npm start -- -o CustomREADME.md -t YOUR_OPENAI_API_KEY
```

Ignore specific files or directories:

```bash
npm start -- -i "node_modules/**,dist/**"
```

## Project Structure

- **`package.json`**: Defines project metadata, dependencies, and scripts.
- **`tsconfig.json`**: Configures TypeScript compilation options.
- **`src/content-processor.ts`**: Handles file discovery and content aggregation.
- **`src/index.ts`**: Entry point for the CLI tool.
- **`src/option-values.ts`**: Defines the structure of CLI options.
- **`src/output-processor.ts`**: Manages AI interaction and output generation.

## Development

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm

### Build the Project

Compile the TypeScript files to JavaScript:

```bash
npm run build
```

### Run in Development Mode

Execute the CLI tool without building:

```bash
npm start
```

## Dependencies

- [commander](https://www.npmjs.com/package/commander): CLI option parsing.
- [globby](https://www.npmjs.com/package/globby): File matching utility.
- [openai](https://www.npmjs.com/package/openai): Interact with OpenAI's API.

### Dev Dependencies

- [@types/node](https://www.npmjs.com/package/@types/node): Type definitions for Node.js.
- [tsx](https://www.npmjs.com/package/tsx): Run TypeScript files directly.
- [typescript](https://www.npmjs.com/package/typescript): TypeScript compiler.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the ISC License.

## Author

`readme.ai` is created and maintained by Hitalo Loose.

---

### Disclaimer

Ensure your OpenAI API token is handled securely and not exposed in public repositories or logs.
