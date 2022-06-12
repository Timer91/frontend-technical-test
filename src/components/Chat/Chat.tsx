import { useState, useEffect, FC } from 'react';
import { loggedUserId } from '../../pages/_app';
import { fetchAPI } from '../../utils/fetch';
import type { IConversation } from '../../types/conversation';
import { IMessage } from '../../types/message';
import Conversations from '../Conversations/Conversations';
import ConversationMessages from '../Messages/Messages';
import styles from '../../styles/Chat.module.css';

const Chat: FC = () => {
    let
        [ conversations, setConversations ] = useState<IConversation[]>( [] ),
        [ isFetchingConv, setIsFetchingConv ] = useState<boolean>( false ),
        [ selectedConv, setSelectedConv ] = useState<number>( -1 ),
        [ messages, setMessages ] = useState<IMessage[]>( [] )
    ;
    
    const
        handleSelectConversation = ( convId: number ) => {
            setSelectedConv( convId );
            
            if ( isFetchingConv ) {
                return;
            }

            if ( selectedConv !== convId ) {
                setIsFetchingConv( true );
                
                fetchAPI( {
                    url: `/messages/${convId}`
                } )
                .then( res => {
                    setMessages( res.body );
                    setIsFetchingConv( false );
                } )
                .catch( error => console.error( error ) );
            }
        };
    ;

    useEffect( () => {
        fetchAPI( { 
            url: `/conversations?senderId=${loggedUserId}`
        } )
        .then( res => {
            setConversations( res.body );
        } )
        .catch( error => console.error( error ) );
    }, [] );
    
    return (
        <div id={styles.chat}>
            <Conversations
                conversations={ conversations }
                setSelected={ handleSelectConversation }
                selectedId={ selectedConv }
            />
            <ConversationMessages
                messages={ messages }
            />
        </div>
    );
}

export default Chat;

