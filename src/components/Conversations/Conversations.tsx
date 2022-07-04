import { FC, useEffect, useState } from 'react'
import { IConversation, IConversations } from '../../types/conversation'
import ConversationItem from '../ConversationItem/ConversationItem';
import styles from '../../styles/Conversations.module.css';
import { API_URL } from '../../pages/_app';
import axios from 'axios';
import { getLoggedUserId } from '../../utils/getLoggedUserId';

const Conversations: FC<IConversations> = (props: IConversations) => {
    const loggedUserId = getLoggedUserId();

    let [conversations, setConversations] = useState<IConversation[]>([]);

    useEffect(() => {
        axios
            .get(`${API_URL}/conversations?senderId=${loggedUserId}`)
            .then(res => {
                setConversations(res.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [loggedUserId]);

    return (
        <div
            id={styles.conversations}
            className={props?.className}
        >
            <div id={styles.conversationsTitle}>
                <h3>Conversations</h3>
            </div>
            <>
                {!conversations.length
                    ? <p className="empty">No conversation found</p>
                    : conversations.map((conversation) => (
                        <ConversationItem
                            key={conversation.id}
                            conversation={conversation}
                        />
                    ))
                }
            </>
        </div>
    )
}

export default Conversations;
