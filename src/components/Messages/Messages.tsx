import { FC, useRef, useEffect, useState } from 'react'
import Message from '../MessageItem/MessageItem';
import { fetchAPI } from '../../utils/fetch';
import { IMessages, IMessage } from '../../types/message';
import styles from '../../styles/Messages.module.css';

const Messages: FC<IMessages> = ( props: IMessages ) => {
    const
        [ messages, setMessages ] = useState<IMessage[]>( [] ),
        messagesRef = useRef<HTMLDivElement>( null )
    ;

    useEffect( () => {
        if ( props.conversationId ) {
            fetchAPI( {
                url: `/messages/${props.conversationId}`
            } )
            .then( res => {
                setMessages( res.body );
            } )
            .catch( error => {
                console.error( error );
            } );
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
