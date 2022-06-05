import { Component, FC } from 'react'
import { Conversation } from '../../types/conversation'
import styles from '../../styles/Conversations.module.css';
import Image from 'next/image';

class ConversationsList extends Component< { conversations: Conversation[] } > {
    state = {
        selectedId: -1
    }

    handleSelect( id ) {
        this.setState( { selectedId: id } );
    }
    
    render() {
        const selectedId: number = this.state.selectedId;
        
        return(
            <div id={styles.conversationsList}>
                <div id={styles.conversationContainerTitle}>Conversations</div>
            { this.props.conversations.map( c => (
                <div
                    key={c.id}
                    className={`
                        ${styles.conversation} 
                        ${selectedId == c.id ? styles.conversationSelected : ''}
                    `}
                    onClick={this.handleSelect.bind( this, c.id )}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png"
                        alt=""
                    />
                    <div className={styles.convDetails}>
                        <div className={styles.convName}>{c.senderNickname}</div>
                        <div className={styles.convLastDate}>{c.lastMessageTimestamp}</div>
                    </div>
                </div>
            ) ) }
            </div>
        )
    }
}

export default ConversationsList;
