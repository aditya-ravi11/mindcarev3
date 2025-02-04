export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatSession {
  id: string;
  messages: Message[];
  createdAt: Date;
}