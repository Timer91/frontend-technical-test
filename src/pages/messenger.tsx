import { FC, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Messenger.module.css';
import Conversations from '../components/Conversations/Conversations';
import Chat from '../components/Chat/chat';

const Messenger: FC = () => {
    let
        [ selectedConv, setSelectedConv ] = useState<number>( -1 )
    ;
    
    const
        handleSelectConversation = ( convId: number ) => {
            setSelectedConv( convId );
        };
    ;
    

    return (
        <div id={styles.messenger}>
            <Head>
                <title>LeBonCoin - Chats</title>
            </Head>
            <Conversations
                className={styles.conversationOverride}
                setSelected={ handleSelectConversation }
                selectedId={ selectedConv }
            />
            <Chat
                className={styles.chatOverride}
                conversationId={ selectedConv }
            />
        </div>
    );
}

export default Messenger; 
