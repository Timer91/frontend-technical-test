import { FC } from "react"

interface IConversation {
  id: number
  recipientId: number
  recipientNickname: string
  senderId: number
  senderNickname: string
  lastMessageTimestamp: number
}

interface IConversations {
  className: any
  selectedId: number,
  onClick: ( id: number ) => void,
  children?: FC
}

interface IConversationItem {
  conversation: IConversation,
  onClick: ( id: number ) => void,
  selectedId: number,
}

export type { IConversation, IConversations, IConversationItem };
