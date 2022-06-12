export interface IMessage {
  id: number
  conversationId: number
  authorId: number
  timestamp: number
  body: string
}

export interface IMessages {
  messages: IMessage[]
}

export interface IMessageItem {
  message: IMessage
}
