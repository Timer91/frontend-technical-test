import { createContext, FC, useContext, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Messenger.module.css';
import Conversations from '../components/Conversations/Conversations';
import Chat from '../components/Chat/Chat';
import { ConversationContext } from '../types/messenger';

export const ConversationCtx = createContext<ConversationContext | null>(null);

const Messenger: FC = () => {
    const [selected, setSelected] = useState<number | null>(null);

    const contextInit: ConversationContext = {
        selectedConversation: selected,
        setSelectedConversation: setSelected
    }

    return (
        <div id={styles.messenger}>
            <Head>
                <title>LeBonCoin - Chats</title>
            </Head>
            <ConversationCtx.Provider value={contextInit}>
                <Conversations
                    className={styles.conversation}
                />
                <Chat
                    className={styles.chat}
                />
            </ConversationCtx.Provider>
        </div>
    );
}

export default Messenger; 
