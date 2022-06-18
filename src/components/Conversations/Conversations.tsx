import { FC, useEffect, useState } from 'react'
import { IConversation, IConversations } from '../../types/conversation'
import ConversationItem from '../ConversationItem/ConversationItem';
import styles from '../../styles/Conversations.module.css';
import { loggedUserId } from '../../pages/_app';
import { fetchAPI } from '../../utils/fetch';

const Conversations: FC<IConversations> = ( props : IConversations ) => {
    let
        [ conversations, setConversations ] = useState<IConversation[]>( [] )
    ;

    useEffect( () => {
        fetchAPI( {
            url: `/conversations?senderId=${loggedUserId}`
        } )
        .then( res => {
            setConversations( res.body );
        } )
        .catch( error => {
            console.error( error )
        } );
    }, [] );

    return(
        <div
            id={styles.conversations}
            className={props?.className}
        >
            <div id={styles.conversationsTitle}>
                <h3>Conversations</h3>
            </div>
            <>
            { conversations.map( ( conversation ) => (
                <ConversationItem
                    key={conversation.id}
                    conversation={conversation}
                    onClick={props.onClick}
                    selectedId={props.selectedId}
                />
            ) ) }
            </>
        </div>
    )
}

export default Conversations;
