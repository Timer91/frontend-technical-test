import { Component, ReactNode } from 'react';
import Head from 'next/head';
import type { Conversation } from '../types/conversation';
import { loggedUserId } from './_app';
import { myFetch } from '../utils/fetch';
import ConversationsList from '../components/ConversationsList/ConversationsList';
import styles from '../styles/Conversations.module.css';

class Conversations extends Component {
    state = {
        conversations: Array<Conversation>()
    }

    componentDidMount(): void {
        myFetch( `/conversations?senderId=${loggedUserId}` )
            .then( res => this.setState( { conversations: res.body } ) )
            .catch( error => { console.error( error ) } );
    }

    render(): ReactNode {
        return (
            <div id={styles.conversations}>
                <Head>
                    <title>LeBonCoin - Conversations</title>
                </Head>
                <div id={styles.container}>
                    <ConversationsList conversations={this.state.conversations}></ConversationsList>
                    {/* <ConversationsMessages></ConversationsMessages> */}
                </div>
            </div>
        )
    }
}

export default Conversations; 
