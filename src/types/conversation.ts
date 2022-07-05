import { Dispatch, FC, SetStateAction } from "react"

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
  conversation: IConversation
}

interface IConversationContext {
  selectedConversation: number | null
  setSelectedConversation: Dispatch<SetStateAction<number>>
}

interface IConversationProvider {
  children?: React.ReactNode
}


export type {
  IConversation,
  IConversations,
  IConversationItem,
  IConversationContext,
  IConversationProvider
};
