import { useState, FC } from 'react';
import Conversations from '../Conversations/Conversations';
import Messages from '../Messages/Messages';
import styles from '../../styles/Chat.module.css';

const Chat: FC = () => {
    let
        [ selectedConv, setSelectedConv ] = useState<number>( -1 )
    ;
    
    const
        handleSelectConversation = ( convId: number ) => {
            setSelectedConv( convId );
        };
    ;
    
    return (
        <div id={styles.chat}>
            <Conversations
                setSelected={ handleSelectConversation }
                selectedId={ selectedConv }
            />
            <Messages
                conversationId={ selectedConv }
            />
        </div>
    );
}

export default Chat;

