# Learning Focus and Responsibilities for Bolt.new Codebase

## Backend Engineer & AI Focus

### Day 1: Core Backend Infrastructure

1. **Server Architecture**
   - Explore `/app/routes/*.ts` API routes
   - Understand how `api.chat.ts` and `api.enhancer.ts` are handling requests
   - Study `entry.server.tsx` to understand server-side rendering

2. **LLM Integration**
   - Focus on `/app/lib/.server/llm/` directory
   - Understand how `stream-text.ts` works with the Anthropic API
   - Study the prompt system in `prompts.ts`
   - Look at how `model.ts` configures Claude 3.5 Sonnet

3. **Message Processing**
   - Review `app/lib/runtime/message-parser.ts` and `action-runner.ts`
   - Understand how AI messages are parsed and executed
   - Study the artifact system that extracts code from AI responses

### Day 2: Database, WebContainer & Backend Extension Points

1. **Database Structure**
   - Study `app/lib/persistence/db.ts` for the persistence layer
   - Understand how chat history is stored and retrieved
   - Look at how URLs and messages are managed

2. **WebContainer API Integration**
   - Explore `/app/lib/webcontainer/` to understand how the in-browser environment works
   - Look at how terminal, file system, and preview are integrated with WebContainer API

3. **Key Extension Points**
   - Identify where to add authentication endpoints
   - Understand how to extend the server-side functionality
   - Plan how to add new API routes for your custom features

---

## Frontend Engineer Focus

### Day 1: UI Structure and Components

1. **Core UI Components**
   - Study `app/components/chat/` for chat UI components
   - Review `app/components/workbench/` to understand the code editor UI
   - Look at how `BaseChat.tsx` and `Chat.client.tsx` are structured

2. **State Management**
   - Explore `/app/lib/stores/` to understand the nanostores state management
   - Focus on how the chat, editor, and workbench stores interact
   - Understand how application state is organized and updated

3. **Routing & Layout**
   - Review `app/root.tsx` and `app/routes/_index.tsx`
   - Understand how routes are structured in Remix
   - Study how client-side and server-side components are integrated

### Day 2: UI Interactivity & Styling

1. **UI Interactivity**
   - Study the React hooks in `/app/lib/hooks/`
   - Understand how `useMessageParser.ts` and `usePromptEnhancer.ts` work
   - Look at how events and user interactions are handled

2. **Styling System**
   - Examine the current approach with UnoCSS and SCSS modules
   - Review `/app/styles/` directory and component-specific style modules
   - Understand how theming works with `app/lib/stores/theme.ts`

3. **Editor & Preview Integration**
   - Study how CodeMirror is integrated in `/app/components/editor/codemirror/`
   - Understand preview panel in `Preview.tsx`
   - Look at terminal integration in `/app/components/workbench/terminal/`

---

## Collaboration Points

When working together, focus on these integration points:

1. **Data Flow**
   - How data flows from backend API responses to frontend UI components
   - How user inputs are processed and sent to the backend

2. **State Management**
   - How application state is shared between components
   - How server-side and client-side state is synchronized

3. **Component Extensions**
   - How to extend UI components to support new backend features
   - How to maintain consistent UX when adding authentication flows

---

## Key Files for Both to Review

1. **API Flow**
   - `/app/routes/api.chat.ts` - Main chat API endpoint
   - `/app/lib/.server/llm/stream-text.ts` - LLM streaming implementation

2. **UI-Backend Integration**
   - `/app/components/chat/Chat.client.tsx` - Main chat UI component
   - `/app/lib/runtime/message-parser.ts` - Parses AI messages for UI display

3. **Core Architecture**
   - `/app/root.tsx` - App root and main layout
   - `/app/entry.server.tsx` - Server entry point

---

## Key Questions to Answer Together

1. How does the application handle streaming responses from the AI?
2. How are code artifacts extracted and displayed in the UI?
3. How does the WebContainer API integrate with the frontend components?
4. What is the data flow from user input to LLM response and back to UI?
5. How would authentication state affect the existing UI components?

By focusing on these areas, you'll both have a solid understanding of the codebase within two days and be well-positioned to start extending it with new features like authentication and any custom AI integrations you plan to add.
