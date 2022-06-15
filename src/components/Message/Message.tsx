import { FC } from "react"
import { loggedUserId } from '../../pages/_app';
import { IMessage, IMessageItem } from "../../types/chat";
import styles from "../../styles/Messages.module.css"
import Timestamp from "react-timestamp";

function isOwner( authorId, loggedUserId ) {
    return authorId === loggedUserId;
}

const Message: FC<IMessageItem> = ( props: IMessageItem ) => {
    const
        message = props.message,
        classNames: string[] = [
            styles.message,
            isOwner( message.authorId, loggedUserId ) ? styles.owner : ''
        ]
    ;

    return (
        <div className={classNames.join( ' ' )}>
            <div className={styles.messageContent}>
                <div className={styles.messageText}>
                    { props.message.body }
                </div>
            </div>
            <Timestamp
                className={`${styles.timestamp} ${styles.messageDate}` }
                relative
                autoUpdate
                date={props.message.timestamp}
            />
        </div>
    );
};

export default Message;
