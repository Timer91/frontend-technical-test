import { FC } from 'react';
import { loggedUserId } from '../../pages/_app';
import { IMessageItem } from '../../types/message';
import styles from '../../styles/Messages.module.css';
import timestampToMoment from '../../utils/timestampToMoment';

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
            <div className={`${styles.timestamp} ${styles.messageItemDate}` }>
                {timestampToMoment(props.message.timestamp)}
            </div>
        </div>
    );
};

export default Message;
