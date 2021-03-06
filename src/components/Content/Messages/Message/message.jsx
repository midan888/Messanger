import React from "react";
import css from "../Messages.module.css"

// TODO Фиксануть position сообщение (появлятся в header-e)

const MessageBlock = React.memo((props) => {
    console.log('render')
    return (

        <div onClick={() => alert(props.id)} className={css.messageItem}>
            <div className={css.photo}>
            </div>
            <div className={css.content}>
                <span className={css.name}>{props.name}</span>
                <time className={css.time}>{props.time}</time>
                <p className={css.message}>{props.message}</p>
            </div>
        </div>
    )
})

export default MessageBlock