import { FC } from 'react'
import { IConversationItem } from '../../types/conversation';
import Timestamp from 'react-timestamp';
import styles from '../../styles/Chat.module.css';

const ConversationItem: FC<IConversationItem> = ( props : IConversationItem ) => {
    const
        classNames: string[] = [
            styles.conversation,
            props.selectedId === props.conversation.id ? styles.selected : ''
        ]
    ;

    return(
        <div
            className={classNames.join( ' ' )}
            onClick={props.onClick.bind( this, props.conversation.id )}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png"
                alt=""
            />
            <div className={styles.convDetails}>
                <div className={styles.convName}>
                    {props.conversation.recipientNickname}
                </div>
                <div className={styles.convLastDate}>
                    <Timestamp relative date={props.conversation.lastMessageTimestamp}/>
                </div>
            </div>
        </div>
    );
}

export default ConversationItem;
