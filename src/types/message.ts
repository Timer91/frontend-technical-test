interface IMessage {
  id: number
  conversationId: number
  authorId: number
  timestamp: number
  body: string
}

interface IMessages {
  className?: string,
  refresh: boolean
  setRefresh: (value: boolean) => void,
}

interface IMessageItem {
  message: IMessage
}

interface ISendMessage {
  setRefresh: (value: boolean) => void,
  className?: string
}

export type { IMessage, IMessages, IMessageItem, ISendMessage };
