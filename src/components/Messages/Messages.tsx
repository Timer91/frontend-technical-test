import { FC, useRef, useEffect, useState } from 'react'
import { IMessage, IMessages } from '../../types/message';
import styles from '../../styles/Messages.module.css';
import Message from '../Message/Message';
import { fetchAPI } from '../../utils/fetch';

const Messages: FC<IMessages> = ( props: IMessages ) => {
    const
        [ messages, setMessages ] = useState<IMessage[]>( [] ),
        messagesRef = useRef<HTMLInputElement>( null )
    ;

    useEffect( () => {
        if ( props.conversationId !== -1 ) {
            fetchAPI( {
                url: `/messages/${props.conversationId}`
            } )
            .then( res => {
                setMessages( res.body );
            } )
            .catch( error => console.error( error ) );
        }
    }, [ props.conversationId ] )

    return(
        <div
            id={styles.messages}
            ref={messagesRef}
        >
            { messages.map( ( message: IMessage ) => (
                <Message
                    key={message.id}
                    message={message}
                />
            ) ) }
        </div>
    )
}

export default Messages;
