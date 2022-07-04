import { Dispatch, SetStateAction } from "react"

export interface ConversationContext {
    selectedConversation: number | null
    setSelectedConversation: Dispatch<SetStateAction<number>>
}
