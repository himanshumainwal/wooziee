import React from "react";

export default function ChatBot() {
  return (
    <div className="absolute bottom-4 right-4 flex items-end space-x-2">
      <div className="bg-gray-800 text-white text-sm px-4 py-2 rounded-lg shadow">
        Hi! I'm Zia, your personal partybot.
      </div>
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
        🤖
      </div>
    </div>
  );
}
