# README.ai

## Overview

**README.ai** is a CLI tool that leverages OpenAI's GPT-based models to generate professional and modern README files for projects. By analyzing project files and configurations, it provides an AI-powered solution to streamline documentation creation.

## Features

- **File Content Processing**: Scans and processes project files, excluding ignored files, to construct contextual prompts.
- **AI Integration**: Uses OpenAI’s API to generate detailed and polished README files.
- **Customizable Output**: Allows users to specify output filenames and options for raw or processed content.
- **Flexible File Ignoring**: Customizable file ignore patterns to tailor processing.

## Installation

To install the project and its dependencies, clone the repository and run:

```bash
npm install
```

## Usage

### CLI Options

The CLI offers several options to customize the behavior of the tool:

```bash
Usage: readme.ai [options]

Options:
  -o, --output <type>         Specifies the output file name (default: `README.md`)
  -t, --openai-token <type>   Provide an OpenAI API token for AI-assisted README generation
  -m, --openai-model <type>   Specify the OpenAI model (default: `gpt-4`)
  -r, --output-raw-chat       Outputs raw chat content for manual integration (default: `false`)
  -i, --ignore-files <list>   Files to ignore (default: `node_modules/**,package-lock.json,dist/**`)
  -h, --help                  Display help for command
```

### Example Usage

Generate a README file for your project with the following command:

```bash
npx readme.ai -t YOUR_OPENAI_API_TOKEN
```

### Customization Example

Specify a custom output filename and model:

```bash
npx readme.ai -o MyCustomReadme.md -t YOUR_OPENAI_API_TOKEN -m gpt-3.5-turbo
```

## Project Structure

The project is structured as follows:

```
readme.ai
├── package.json            # Project metadata and dependencies
├── tsconfig.json           # TypeScript configuration
├── src
│   ├── content-processor.ts  # Processes project files and prepares content for AI
│   ├── index.ts              # CLI entry point
│   ├── option-values.ts      # Defines CLI option types
│   └── output-processor.ts   # Processes OpenAI's output and handles errors
```

## How It Works

1. **File Scanning**: The tool scans project files using `globby`, excluding files specified in the `--ignore-files` option.
2. **Content Processing**: Processes file contents into a cohesive input for OpenAI's API.
3. **AI-Assisted Generation**: Interacts with OpenAI to create a professional README based on the project context.
4. **Output Handling**: Saves the generated README to the specified output file.

## Dependencies

This project relies on the following packages:

- [`commander`](https://www.npmjs.com/package/commander): CLI option parsing
- [`globby`](https://www.npmjs.com/package/globby): File matching and globbing utility
- [`openai`](https://www.npmjs.com/package/openai): API client for OpenAI
- [`typescript`](https://www.npmjs.com/package/typescript): TypeScript support for robust development
- [`tsx`](https://www.npmjs.com/package/tsx): TypeScript execution

## Development

### Build

To compile the TypeScript source code, run:

```bash
npm run build
```

### Run Locally

To run the project locally without building:

```bash
npm run start
```

### Testing

Ensure all required dependencies and configurations are in place before testing.

## License

This project is licensed under the **ISC License**.

## Contributions

Contributions are welcome! Please open an issue or submit a pull request for any bug fixes, feature requests, or improvements.

## Author

Developed by [Your Name].
