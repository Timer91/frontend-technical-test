import { FC, useContext, useState } from 'react';
import { IChat } from '../../types/chat';
import Messages from '../Messages/Messages';
import SendMessage from '../SendMessage/SendMessage';
import styles from '../../styles/Chat.module.css';
import { ConversationCtx } from '../../pages/messenger';

const Chat: FC<IChat> = (props: IChat) => {
    let [refresh, setRefresh] = useState<boolean>(false);

    const { selectedConversation, } = useContext(ConversationCtx);

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
