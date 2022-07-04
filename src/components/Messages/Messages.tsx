import { FC, useRef, useEffect, useState } from 'react'
import Message from '../MessageItem/MessageItem';
import { IMessages, IMessage } from '../../types/message';
import styles from '../../styles/Messages.module.css';
import axios from 'axios';
import { API_URL } from '../../pages/_app';

const Messages: FC<IMessages> = ( props: IMessages ) => {
    const
        [ messages, setMessages ] = useState<IMessage[]>( [] ),
        messagesRef = useRef<HTMLDivElement>( null )
    ;

    useEffect(() => {
        if (props.conversationId || props.refresh) {
            axios
                .get(`${API_URL}/messages/${props.conversationId}`)
                .then(res => {
                    setMessages(res.data);
                    props.setRefresh(false);
                })
                .catch(error => {
                    console.error(error);
                });
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ props.conversationId, props.refresh ] )

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
