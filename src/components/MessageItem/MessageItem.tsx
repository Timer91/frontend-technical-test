import { FC } from 'react';
import { IMessageItem } from '../../types/message';
import styles from '../../styles/Messages.module.css';
import timestampToMoment from '../../utils/timestampToMoment';
import { getLoggedUserId } from '../../utils/getLoggedUserId';

function isOwner(authorId, loggedUserId) {
    return authorId === loggedUserId;
}

const Message: FC<IMessageItem> = (props: IMessageItem) => {
    const
        loggedUserId = getLoggedUserId(),
        message = props.message,
        classNames: string[] = [
            styles.messageItem,
            isOwner(message.authorId, loggedUserId) ? styles.owner : ''
        ];

    return (
        <div className={classNames.join(' ')}>
            <div className={styles.messageItemContent}>
                <div className={styles.messageItemText}>
                    {props.message.body}
                </div>
            </div>
            <div className={`${styles.timestamp} ${styles.messageItemDate}`}>
                {timestampToMoment(props.message.timestamp)}
            </div>
        </div>
    );
};

export default Message;
