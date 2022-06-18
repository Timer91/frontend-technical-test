import { FC } from "react"
import { loggedUserId } from '../../pages/_app';
import { IMessageItem } from "../../types/message";
import styles from "../../styles/Messages.module.css"
import Timestamp from "react-timestamp";

function isOwner( authorId, loggedUserId ) {
    return authorId === loggedUserId;
}

const Message: FC<IMessageItem> = ( props: IMessageItem ) => {
    const
        message = props.message,
        classNames: string[] = [
            styles.messageItem,
            isOwner( message.authorId, loggedUserId ) ? styles.owner : ''
        ]
    ;

    return (
        <div className={classNames.join( ' ' )}>
            <div className={styles.messageItemContent}>
                <div className={styles.messageItemText}>
                    { props.message.body }
                </div>
            </div>
            <Timestamp
                className={`${styles.timestamp} ${styles.messageItemDate}` }
                relative
                autoUpdate
                date={props.message.timestamp}
            />
        </div>
    );
};

export default Message;
