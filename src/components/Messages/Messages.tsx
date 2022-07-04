import { FC, useRef, useEffect, useState, useContext } from 'react'
import Message from '../MessageItem/MessageItem';
import { IMessages, IMessage } from '../../types/message';
import styles from '../../styles/Messages.module.css';
import axios from 'axios';
import { API_URL } from '../../pages/_app';
import { ConversationCtx } from '../../pages/messenger';

const Messages: FC<IMessages> = (props: IMessages) => {
    const
        { selectedConversation, } = useContext(ConversationCtx),
        [messages, setMessages] = useState<IMessage[]>([]),
        messagesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (selectedConversation || props.refresh) {
            axios
                .get(`${API_URL}/messages/${selectedConversation}`)
                .then(res => {
                    setMessages(res.data);
                    props.setRefresh(false);
                })
                .catch(error => {
                    console.error(error);
                });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedConversation, props.refresh])

    useEffect(() => {
        if (messages.length) {
            messagesRef.current?.scroll({
                top: document.body.offsetHeight
            });
        }
    }, [messages]);

    return (
        <div
            id={styles.messages}
            ref={messagesRef}
            className={props?.className}
        >
            {
                messages.map((message: IMessage) => (
                    <Message key={message.id} message={message} />
                ))
            }
        </div>
    )
}

export default Messages;
