import { FC } from 'react';
import { IChat } from '../../types/chat';
import Messages from '../Messages/Messages';
// import SendMessage from '../SendMessage/SendMessage';
import styles from '../../styles/Chat.module.css';

const Chat: FC<IChat> = ( props: IChat ) => {
    return(
        <div
            id={styles.chat}
            className={props.className}
        >
        {
            props.conversationId === -1
                ? <p className="empty">Select a conversation</p>
                : (
                    <>
                        <Messages
                            conversationId={props.conversationId}
                            className={styles.messages}
                        />
                        {/* <SendMessage
                            className={styles.sendMessage}
                        /> */}
                    </>
                )
        }
        </div>
    )
}

export default Chat;
