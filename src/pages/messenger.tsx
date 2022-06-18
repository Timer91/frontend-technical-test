import { FC, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Messenger.module.css';
import Conversations from '../components/Conversations/Conversations';
import Chat from '../components/Chat/Chat';

const Messenger: FC = () => {
    let
        [ selectedConv, setSelectedConv ] = useState<number>( -1 )
    ;
    
    return (
        <div id={ styles.messenger }>
            <Head>
                <title>LeBonCoin - Chats</title>
            </Head>
            <Conversations
                onClick={ setSelectedConv }
                selectedId={ selectedConv }
                className={ styles.conversation }
            />
            <Chat
                conversationId={ selectedConv }
                className={ styles.chat }
            />
        </div>
    );
}

export default Messenger; 
