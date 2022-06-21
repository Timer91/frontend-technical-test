import { FC, useEffect, useRef, useState } from 'react'
import { IConversation, IConversationItem } from '../../types/conversation';
import styles from '../../styles/Conversations.module.css';
import timestampToMoment from '../../utils/timestampToMoment';

const isSelected = ( selectedId: number, conversationId: number ) => {
    return selectedId === conversationId ? styles.selected : "";
};

const ConversationItem: FC<IConversationItem> = ( props : IConversationItem ) => {
    let
        [ conversation, setConversation ] = useState<IConversation>( null ),
        conversationItem = useRef<HTMLDivElement>( null );
    ;

    const
        conversationItemClass: string[] = [
            styles.conversationItem,
            isSelected( props?.selectedId, conversation?.id )
        ]
    ;

    useEffect( () => {
        setConversation( props.conversation );
    }, [ props.conversation ] );

    return(
        <div
            ref={conversationItem}
            onClick={() => props.onClick(conversation?.id)}
            className={conversationItemClass.join( ' ' )}
        >
            <div className={styles.conversationList}>
                <div className={styles.conversationName}>
                    {conversation?.recipientNickname}
                </div>
                <div className={styles.conversationDate}>
                    {timestampToMoment(conversation?.lastMessageTimestamp)}
                </div>
            </div>
        </div>
    );
}

export default ConversationItem;
