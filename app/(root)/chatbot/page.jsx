"use client";

import React, { useContext } from "react";
import Sidebar from "@/components/chatbot/Sidebar";
import Main from "@/components/chatbot/Main";
import { Context } from '@/context/Context';

const ChatbotPage = () => {
  return (
    <div className="flex gap-4 px-4 py-6 max-w-7xl mx-auto">
      <Sidebar />
      <Main />
    </div>
  );
};

export default ChatbotPage;