export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  showFeedback?: boolean;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  waitingForFeedback: boolean;
}

export interface UserData {
  budget: number | null;
  city: string | null;
  investmentType: string | null;
  targetAudience: string | null;
}

export interface Feedback {
  messageId: string;
  rating: 'useful' | 'not_useful';
  comment?: string;
}