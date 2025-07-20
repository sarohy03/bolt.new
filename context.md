# Bolt.new Codebase Context

## Project Overview

Bolt.new is an AI-powered web development platform that allows users to prompt, run, edit, and deploy full-stack applications directly in the browser without requiring local setup. The platform integrates AI capabilities with [WebContainer API](https://webcontainers.io/api) from StackBlitz to provide a complete in-browser development experience.

## Key Features

- **AI-Powered Development**: Integrates with Claude 3.5 Sonnet to generate and modify code
- **Full-Stack In-Browser Environment**: Runs Node.js, package managers, terminals, and servers directly in the browser
- **Real-time Code Editing**: Provides a code editor based on CodeMirror
- **File System Access**: Allows creating, editing, and managing files
- **Terminal Integration**: Includes a full terminal for running commands
- **Live Preview**: Shows real-time previews of the web application
- **Persistence**: Saves chat history and projects for later use

## Technology Stack

- **Frontend Framework**: React with Remix
- **Deployment**: Cloudflare Pages and Workers
- **Editor**: CodeMirror 6
- **Terminal**: Xterm.js
- **State Management**: Nanostores
- **UI Components**: Custom components, Radix UI, Framer Motion
- **Styling**: SCSS modules, UnoCSS (Tailwind-compatible utility classes)
- **AI Integration**: AI SDK with Anthropic's Claude 3.5 Sonnet

## Project Structure

### Root Files

| File | Purpose | Client/Server |
|------|---------|---------------|
| `bindings.sh` | Sets up necessary bindings for environment variables | Server |
| `CONTRIBUTING.md` | Information for contributors | Documentation |
| `eslint.config.mjs` | ESLint configuration | Development |
| `LICENSE` | MIT license file | Documentation |
| `load-context.ts` | Context loader for Remix | Server |
| `package.json` | Project dependencies and scripts | Development |
| `pnpm-lock.yaml` | Package lock file | Development |
| `README.md` | Project documentation | Documentation |
| `tsconfig.json` | TypeScript configuration | Development |
| `uno.config.ts` | UnoCSS configuration | Client |
| `vite.config.ts` | Vite bundler configuration | Development |
| `worker-configuration.d.ts` | Type definitions for Worker configuration | Server |
| `wrangler.toml` | Cloudflare Workers configuration | Server |

### App Directory Structure

#### Core Files

| File | Purpose | Client/Server |
|------|---------|---------------|
| `entry.client.tsx` | Client-side entry point | Client |
| `entry.server.tsx` | Server-side entry point | Server |
| `root.tsx` | Root component for the Remix app | Both |

#### Routes

| File | Purpose | Client/Server |
|------|---------|---------------|
| `_index.tsx` | Main application page | Both |
| `api.chat.ts` | API endpoint for chat functionality | Server |
| `api.enhancer.ts` | API endpoint for prompt enhancement | Server |
| `chat.$id.tsx` | Dynamic route for individual chat sessions | Both |

#### Components

The components directory contains various UI components organized by feature:

##### Chat Components (`/app/components/chat/`)

| File | Purpose | Client/Server |
|------|---------|---------------|
| `Artifact.tsx` | Displays code artifacts from AI responses | Client |
| `AssistantMessage.tsx` | Renders assistant messages | Client |
| `BaseChat.tsx` | Base chat component structure | Both |
| `Chat.client.tsx` | Client-side chat functionality | Client |
| `CodeBlock.tsx` | Code syntax highlighting component | Client |
| `Markdown.tsx` | Markdown rendering component | Client |
| `Messages.client.tsx` | Message list renderer | Client |
| `SendButton.client.tsx` | Button for sending messages | Client |
| `UserMessage.tsx` | Renders user messages | Client |

##### Editor Components (`/app/components/editor/`)

| File | Purpose | Client/Server |
|------|---------|---------------|
| `codemirror/CodeMirrorEditor.tsx` | CodeMirror integration for code editing | Client |

##### Header Components (`/app/components/header/`)

| File | Purpose | Client/Server |
|------|---------|---------------|
| `Header.tsx` | Application header | Both |
| `HeaderActionButtons.client.tsx` | Action buttons in header | Client |

##### Sidebar Components (`/app/components/sidebar/`)

| File | Purpose | Client/Server |
|------|---------|---------------|
| `date-binning.ts` | Organizes chat history by date | Client |
| `HistoryItem.tsx` | Individual chat history item | Client |
| `Menu.client.tsx` | Sidebar menu component | Client |

##### UI Components (`/app/components/ui/`)

| File | Purpose | Client/Server |
|------|---------|---------------|
| `Dialog.tsx` | Modal dialog component | Client |
| `IconButton.tsx` | Button with icon | Client |
| `LoadingDots.tsx` | Loading indicator | Client |
| `PanelHeader.tsx` | Header for panels | Client |
| `PanelHeaderButton.tsx` | Buttons for panel headers | Client |
| `Slider.tsx` | Slider control | Client |
| `ThemeSwitch.tsx` | Theme toggle component | Client |

##### Workbench Components (`/app/components/workbench/`)

| File | Purpose | Client/Server |
|------|---------|---------------|
| `EditorPanel.tsx` | Panel containing code editor | Client |
| `FileBreadcrumb.tsx` | Breadcrumb navigation for files | Client |
| `FileTree.tsx` | File explorer tree component | Client |
| `PortDropdown.tsx` | Port selection dropdown | Client |
| `Preview.tsx` | Preview panel for running application | Client |
| `Workbench.client.tsx` | Main workbench component | Client |
| `terminal/` | Terminal-related components | Client |

#### Library Code (`/app/lib/`)

| Directory/File | Purpose | Client/Server |
|------|---------|---------------|
| `crypto.ts` | Cryptography utilities | Both |
| `fetch.ts` | Fetch utilities | Both |
| `hooks/` | React hooks | Client |
| `persistence/` | Data persistence | Client |
| `runtime/` | Runtime functionality | Both |
| `stores/` | State management stores | Client |
| `.server/llm/` | Server-only LLM integration | Server |
| `webcontainer/` | WebContainer API integration | Client |

#### Server-side Library (`/app/lib/.server/`)

| Directory/File | Purpose | Client/Server |
|------|---------|---------------|
| `llm/constants.ts` | LLM configuration constants | Server |
| `llm/model.ts` | LLM model setup (Claude 3.5 Sonnet) | Server |
| `llm/prompts.ts` | System prompts for the LLM | Server |
| `llm/stream-text.ts` | Text streaming functionality | Server |

#### State Management (`/app/lib/stores/`)

| File | Purpose | Client/Server |
|------|---------|---------------|
| `chat.ts` | Chat state management | Client |
| `editor.ts` | Editor state management | Client |
| `files.ts` | File system state management | Client |
| `previews.ts` | Preview state management | Client |
| `settings.ts` | Application settings state | Client |
| `terminal.ts` | Terminal state management | Client |
| `theme.ts` | Theme state management | Client |
| `workbench.ts` | Workbench state management | Client |

#### Types (`/app/types/`)

| File | Purpose | Client/Server |
|------|---------|---------------|
| `actions.ts` | Types for actions | Both |
| `artifact.ts` | Types for artifacts | Both |
| `terminal.ts` | Types for terminal | Client |
| `theme.ts` | Types for theme | Client |

#### Utilities (`/app/utils/`)

| File | Purpose | Client/Server |
|------|---------|---------------|
| `buffer.ts` | Buffer utilities | Both |
| `classNames.ts` | CSS class name utilities | Both |
| `constants.ts` | Constant values | Both |
| `debounce.ts` | Debounce function | Client |
| `diff.ts` | Code diffing utilities | Both |
| `easings.ts` | Animation easing functions | Client |
| `logger.ts` | Logging utilities | Both |
| `markdown.ts` | Markdown processing | Both |
| `mobile.ts` | Mobile detection utilities | Client |
| `promises.ts` | Promise utilities | Both |
| `react.ts` | React utilities | Client |
| `shell.ts` | Shell command utilities | Client |
| `stripIndent.ts` | String indentation utilities | Both |
| `terminal.ts` | Terminal utilities | Client |
| `unreachable.ts` | Typesafe error function | Both |

### Functions Directory

| File | Purpose | Client/Server |
|------|---------|---------------|
| `[[path]].ts` | Handles Cloudflare Pages functions | Server |

### Icons and Public Directories

| Directory | Purpose | Client/Server |
|------|---------|---------------|
| `icons/` | SVG icons | Client |
| `public/` | Public assets | Client |
| `types/` | Additional type definitions | Both |

## Architecture

Bolt.new follows a client-server architecture:

1. **Server-side**: 
   - Built with Remix and deployed on Cloudflare Pages/Workers
   - Handles API requests for AI interaction using Claude 3.5 Sonnet
   - Processes prompts and generates responses
   - Streams responses back to the client

2. **Client-side**:
   - React application that provides the user interface
   - WebContainer API integration for in-browser development
   - CodeMirror for code editing
   - Xterm.js for terminal functionality
   - State management using Nanostores

3. **Core Functionality Flow**:
   - User sends a prompt to the AI
   - Server processes the prompt with Claude 3.5 Sonnet
   - AI generates a response with code artifacts
   - Client parses the response and extracts file content, shell commands
   - WebContainer executes commands and manages files
   - User can interact with the created application, edit files, run commands

## Development Workflow

1. Use `pnpm run dev` to start the development server
2. Modify files in the `app` directory for application changes
3. Add API endpoints in the `app/routes` directory
4. Create new components in the appropriate subdirectory of `app/components`
5. Run tests with `pnpm test`
6. Build for production with `pnpm run build`
7. Deploy with `pnpm run deploy`

## Dependencies

Major dependencies include:
- Remix for server-side rendering and routing
- React for UI components
- AI SDK for LLM integration (Claude 3.5 Sonnet)
- WebContainer API for in-browser development environment
- CodeMirror for code editing
- Xterm.js for terminal emulation
- Nanostores for state management
- Framer Motion for animations
- UnoCSS for utility-based styling

## Special Features

1. **Artifact System**: Parses AI responses for code artifacts that can be displayed and executed
2. **Action Runner**: Executes shell commands and file operations
3. **Chat Persistence**: Saves chat history for future reference
4. **Prompt Enhancement**: Improves user prompts before sending to the AI
5. **Live Preview**: Shows real-time preview of the running application
6. **File Tree Navigation**: Allows browsing and selecting files in the project
