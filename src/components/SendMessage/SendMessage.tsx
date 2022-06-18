import { FC } from "react";
import styles from "../../styles/SendMessage.module.css"
import { ISendMessage } from "../../types/message";

const sendMessage: FC<ISendMessage> = ( props: ISendMessage ) => {
    return (
        <div
            id={styles.sendMessage}
            className={props?.className}
        >
            <input
                type="text"
                className={styles.input}
            />
        </div>
    )
};

export default sendMessage;
