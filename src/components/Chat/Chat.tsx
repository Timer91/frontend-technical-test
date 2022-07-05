import { FC, useContext, useState } from 'react';
import { IChat } from '../../types/chat';
import Messages from '../Messages/Messages';
import SendMessage from '../SendMessage/SendMessage';
import styles from '../../styles/Chat.module.css';
import { ConversationContext } from '../../context/conversationContext';
import { IConversationContext } from '../../types/conversation';

const Chat: FC<IChat> = (props: IChat) => {
    let [refresh, setRefresh] = useState<boolean>(false);

    const { selectedConversation, } = useContext<IConversationContext>(ConversationContext);

    return (
        <div
            id={styles.chat}
            className={props.className}
        >
            {
                !selectedConversation
                    ? <p className="empty">Select a conversation</p>
                    : (
                        <>
                            <Messages
                                className={styles.messages}
                                refresh={refresh}
                                setRefresh={setRefresh}
                            />
                            <SendMessage
                                className={styles.sendMessage}
                                setRefresh={setRefresh}
                            />
                        </>
                    )
            }
        </div>
    )
}

export default Chat;
