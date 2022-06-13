export interface IMessage {
  id: number
  conversationId: number
  authorId: number
  timestamp: number
  body: string
}

export interface IMessages {
  conversationId: number
}

export interface IMessageItem {
  message: IMessage
}
