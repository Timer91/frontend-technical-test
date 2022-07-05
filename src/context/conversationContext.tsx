import { createContext, FC, useState } from "react";
import { IConversationContext, IConversationProvider } from "../types/conversation";

export const ConversationContext = createContext<IConversationContext | null>(null);

const ConversationProvider: FC<IConversationProvider> = ({ children }) => {
    const [selectedConversation, setSelectedConversation] = useState<number | null>(null);

    return (
        <ConversationContext.Provider value={{ selectedConversation, setSelectedConversation }}>
            {children}
        </ConversationContext.Provider>
    );

};

export default ConversationProvider;
