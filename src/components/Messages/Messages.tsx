import { FC } from 'react'
import { IMessage, IMessages } from '../../types/message';
import styles from '../../styles/Messages.module.css';
import Message from '../Message/Message';

const Messages: FC<IMessages> = ( props: IMessages ) => {
    return(
        <div id={styles.messages}>
        { props.messages.map( ( message: IMessage ) => (
            <Message
                key={message.id}
                message={message}
            />
        ) ) }
        </div>
    )
}

export default Messages;
