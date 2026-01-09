import axios from 'axios';

interface GrokMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface GrokRequest {
  messages: GrokMessage[];
  model?: string;
  temperature?: number;
  max_tokens?: number;
}

interface GrokResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

class GrokService {
  private apiKey: string;
  private apiUrl: string;
  private model: string;

  constructor() {
    // Get API key from environment variables
    this.apiKey = import.meta.env.VITE_GROK_API_KEY || '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';
    this.apiUrl = 'https://api.groq.com/openai/v1/chat/completions';
    this.model = 'llama3-70b-8192'; // Default model, can be changed
    
    if (!this.apiKey) {
      console.warn('GROK_API_KEY is not set in environment variables');
    }
  }

  async sendMessage(userMessage: string, conversationHistory: { role: string; content: string }[] = []): Promise<string> {
    if (!this.apiKey) {
      throw new Error('GROK_API_KEY is not configured. Please set VITE_GROK_API_KEY in your environment variables.');
    }

    try {
      // Prepare messages for the API - include conversation history
      const messages: GrokMessage[] = [
        {
          role: 'system',
          content: `You are a helpful customer support assistant for Swift Delivery Hub, a delivery service in Morocco. 
          Provide helpful, friendly responses about delivery services, order tracking, pricing, driver registration, 
          and other related topics. Respond in the same language as the user's message. 
          Be concise but informative. If you don't know specific information, acknowledge that and suggest 
          contacting human support for detailed inquiries.`
        },
        ...conversationHistory.map(msg => ({
          role: msg.role as 'user' | 'assistant',
          content: msg.content
        })),
        {
          role: 'user',
          content: userMessage
        }
      ];

      const requestData: GrokRequest = {
        messages,
        model: this.model,
        temperature: 0.7,
        max_tokens: 1024,
      };

      const response = await axios.post<GrokResponse>(
        this.apiUrl,
        requestData,
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json'
          },
          timeout: 30000 // 30 second timeout
        }
      );

      if (response.data.choices && response.data.choices.length > 0) {
        return response.data.choices[0].message.content.trim();
      } else {
        throw new Error('No response from Grok API');
      }
    } catch (error) {
      console.error('Error calling Grok API:', error);
      
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          throw new Error('Invalid or missing API key. Please check your Grok API key configuration.');
        } else if (error.response?.status === 429) {
          throw new Error('Rate limit exceeded. Please try again later.');
        } else if (error.response?.status === 503) {
          throw new Error('Grok service is temporarily unavailable. Please try again later.');
        } else {
          throw new Error(`Grok API error: ${error.response?.data?.error?.message || error.message}`);
        }
      }
      
      throw new Error('Failed to connect to Grok API. Please check your connection and API key.');
    }
  }

  setModel(model: string) {
    this.model = model;
  }

  getAvailableModels() {
    // Grok models - these are the known models available
    return [
      'llama3-70b-8192',
      'llama3-8b-8192',
      'mixtral-8x7b-32768',
      'gemma-7b-it'
    ];
  }
}

export const grokService = new GrokService();
export type { GrokMessage, GrokRequest, GrokResponse };