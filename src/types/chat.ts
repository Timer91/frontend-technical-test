export interface IMessage {
  id: number
  conversationId: number
  authorId: number
  timestamp: number
  body: string
}

export interface IChat {
  conversationId: number
}

export interface IMessageItem {
  message: IMessage
}
