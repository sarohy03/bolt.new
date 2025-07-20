import { useState } from 'react';
import { Header } from '~/components/header/Header';
import { ClientOnly } from 'remix-utils/client-only';
import { BaseChat } from '~/components/chat/BaseChat';
import { Chat } from '~/components/chat/Chat.client';

export function Landing() {
  const [showMain, setShowMain] = useState(false);

  if (!showMain) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-black">
        <div className="flex flex-col items-center justify-center h-full w-full">
          <h1 className="text-white text-4xl font-bold mb-8">Welcome to Bolt.new</h1>
          <p className="text-white text-lg mb-12 max-w-xl text-center">
            AI-powered full-stack web development in your browser. Prompt, run, edit, and deploy apps instantly.
          </p>
          <button
            className="bg-white text-black rounded-full w-32 h-32 flex items-center justify-center text-xl font-bold shadow-lg hover:bg-gray-200 transition"
            onClick={() => setShowMain(true)}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  // Main app content
  return (
    <div className="flex flex-col h-full w-full">
      <Header />
      <ClientOnly fallback={<BaseChat />}>{() => <Chat />}</ClientOnly>
    </div>
  );
}
