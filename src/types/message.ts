interface IMessage {
  id: number
  conversationId: number
  authorId: number
  timestamp: number
  body: string
}

interface IMessages {
  conversationId: number,
  className?: string,
  refresh: boolean
  setRefresh: (value: boolean) => void,
}

interface IMessageItem {
  message: IMessage
}

interface ISendMessage {
  className?: string
}

export type { IMessage, IMessages, IMessageItem };
