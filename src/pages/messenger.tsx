import { createContext, FC, useContext, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Messenger.module.css';
import Conversations from '../components/Conversations/Conversations';
import Chat from '../components/Chat/Chat';
import ConversationProvider from '../context/conversationContext';

const Messenger: FC = () => {
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <div id={styles.messenger}>
            <Head>
                <title>LeBonCoin - Chats</title>
            </Head>
            <ConversationProvider>
                <Conversations
                    className={styles.conversation}
                />
                <Chat
                    className={styles.chat}
                />
            </ConversationProvider>
        </div>
    );
}

export default Messenger; 
