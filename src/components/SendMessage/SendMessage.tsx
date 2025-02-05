import { FC, useContext, useEffect, useRef, useState } from "react";
import { ISendMessage } from "../../types/message";
import styles from "../../styles/SendMessage.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { getLoggedUserId } from "../../utils/getLoggedUserId";
import axios from "axios";
import { API_URL } from "../../pages/_app";
import { ConversationContext } from "../../context/conversationContext";


const SendMessage: FC<ISendMessage> = (props: ISendMessage) => {
    let
        { selectedConversation, } = useContext(ConversationContext),
        inputRef = useRef<HTMLInputElement>(null),
        [isSending, setIsSending] = useState<boolean>(false);

    const
        handleSendMessage = () => {
            const message = inputRef.current.value;

            if (!isSending && selectedConversation && message) {
                setIsSending(true);

                axios
                    .post(
                        `${API_URL}/messages/${selectedConversation}`,
                        {
                            conversationId: selectedConversation,
                            authorId: getLoggedUserId(),
                            timestamp: new Date().getTime(),
                            body: message
                        }
                    )
                    .then(() => {
                        setIsSending(false);
                        inputRef.current.value = '';
                        props.setRefresh(true);
                    })
                    .catch(error => {
                        console.error(error);
                    })
            }
        }
        ;

    useEffect(() => {
        const
            keyDownHandler = event => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    handleSendMessage();
                }
            };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            id={styles.sendMessage}
            className={props?.className}
        >
            <input
                autoFocus
                type="text"
                className={styles.input}
                placeholder="Aa"
                ref={inputRef}
            />
            <FontAwesomeIcon
                className={styles.button}
                icon={faPaperPlane}
                onClick={handleSendMessage}
            />
        </div>
    )
};

export default SendMessage;
