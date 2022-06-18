interface IMessage {
  id: number
  conversationId: number
  authorId: number
  timestamp: number
  body: string
}

interface IMessageItem {
  message: IMessage
}

interface ISendMessage {
  className?: string
}

export type { IMessage, IMessageItem, ISendMessage };
