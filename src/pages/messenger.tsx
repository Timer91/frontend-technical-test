import { FC } from 'react';
import Head from 'next/head';
import Chat from '../components/Chat/Chat';
import styles from '../styles/Messenger.module.css';

const Messenger: FC = () => {
    return (
        <div id={styles.messenger}>
            <Head>
                <title>LeBonCoin - Chats</title>
            </Head>
            <Chat></Chat>
        </div>
    );
}

export default Messenger; 
