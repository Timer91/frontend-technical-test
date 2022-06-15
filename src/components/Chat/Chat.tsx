import { FC } from 'react';
import { IChat } from '../../types/chat';
import Messages from '../Messages/Messages';
import styles from '../../styles/Chat.module.css';

const Chat: FC<IChat> = ( props: IChat ) => {
    return(
        <div id={styles.chat}>
            <Messages conversationId={props.conversationId} />
            {/* <SendMessage /> */}
        </div>
    )
}

export default Chat;
