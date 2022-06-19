import { FC, useState } from 'react';
import { IChat } from '../../types/chat';
import Messages from '../Messages/Messages';
import SendMessage from '../SendMessage/SendMessage';
import styles from '../../styles/Chat.module.css';

const Chat: FC<IChat> = ( props: IChat ) => {
    let
        [ refresh, setRefresh ] = useState<boolean>( false )
    ;

    return(
        <div
            id={styles.chat}
            className={props.className}
        >
        {
            !props.conversationId
                ? <p className="empty">Select a conversation</p>
                : (
                    <>
                        <Messages
                            conversationId={props.conversationId}
                            className={styles.messages}
                            refresh={refresh}
                            setRefresh={setRefresh}
                        />
                        <SendMessage
                            conversationId={props.conversationId}
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
