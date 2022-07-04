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
  className?: string
  children?: FC
}

interface IConversationItem {
  conversation: IConversation,
}

export type { IConversation, IConversations, IConversationItem };
