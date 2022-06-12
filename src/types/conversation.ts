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
  conversations: IConversation[],
  selectedId: number,
  setSelected: ( id: number ) => void,
  children?: FC
}

interface IConversationItem {
  onClick: ( id: number ) => void,
  selectedId: number,
  conversation: IConversation,
}

export type { IConversation, IConversations, IConversationItem };
