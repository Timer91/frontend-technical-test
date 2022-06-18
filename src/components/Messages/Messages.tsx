import { FC, useRef, useEffect, useState } from 'react'
import Message from '../MessageItem/MessageItem';
import { fetchAPI } from '../../utils/fetch';
import { IChat } from '../../types/chat';
import { IMessage } from '../../types/message';
import styles from '../../styles/Messages.module.css';

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
            className={props?.className}
        >
        {
            messages.map( ( message: IMessage ) => (
                <Message key={message.id} message={message}/>
            ) )
        }
        </div>
    )
}

export default Messages;
