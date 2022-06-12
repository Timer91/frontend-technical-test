import { FC } from 'react'
import { IConversations } from '../../types/conversation'
import ConversationItem from '../ConversationItem/ConversationItem';
import styles from '../../styles/Chat.module.css';

const Conversations: FC<IConversations> = ( props : IConversations ) => {
    return(
        <div id={styles.conversations}>
            <div id={styles.conversationsTitle}>
                <h3>Conversations</h3>
            </div>
            <>
            { props.conversations.map( ( conversation ) => (
                <ConversationItem
                    key={conversation.id}
                    onClick={props.setSelected}
                    selectedId={props.selectedId}
                    conversation={conversation}
                />
            ) ) }
            </>
        </div>
    )
}

export default Conversations;
