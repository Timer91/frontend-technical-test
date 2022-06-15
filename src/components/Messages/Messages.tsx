import { FC, useRef, useEffect, useState } from 'react'
import { IChat, IMessage } from '../../types/chat';
import styles from '../../styles/Messages.module.css';
import Message from '../Message/Message';
import { fetchAPI } from '../../utils/fetch';

const Messages: FC<IChat> = ( props: IChat ) => {
    const
        [ messages, setMessages ] = useState<IMessage[]>( [] ),
        messagesRef = useRef<HTMLDivElement>( null )
    ;

    useEffect( () => {
        if ( props.conversationId !== -1 ) {
            fetchAPI( {
                url: `/messages/${props.conversationId}`
            } )
            .then( res => {
                setMessages( res.body );
                console.log( 1 )
            } )
            .catch( error => {
                console.error( error );
            } );
        }
    }, [ props.conversationId ] )

    useEffect( () => {
        if ( messages.length ) {
            messagesRef.current?.scroll( {
                top: document.body.offsetHeight
            } );
        }
    }, [ messages ] );

    return(
        <div
            id={styles.messages}
            ref={messagesRef}
        >
        {
            !messages.length
                ?   <p className={styles.empty}>Select a conversation</p>
                :   messages.map( ( message: IMessage ) => (
                        <Message key={message.id} message={message}/>
                    ) )
        }
        </div>
    )
}

export default Messages;
