import React from "react";
import css from "./Messages.module.css"
import MessageBlock from "./Message/message";
import Correspondence from "./Message/correspondence";
import {Field, reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";


const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={css.corManage}>
            <Field name='message'
                   component={'textarea'}
                   placeholder='Написать сообщение...'></Field>
            <button className={css.btn}>Отправить</button>
        </form>
    )
}
const MessageFormRedux = reduxForm({form: 'message'})(MessageForm)

const Messages = (props) => {
    // MAP jsx
    let newMessages = props.state.message.map(m => (
        <MessageBlock id={m.id} key={m.id} name={m.name} time={m.time} message={m.message}/>)
    )

    let newCorrespondence = props.state.correspondence.map(m => (
        <Correspondence key={m.id} message={m.message}/>
    ))
    //Functions
    let addMessage = (value) => {
        props.addMessage(value.message)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={css.section}>
            <div className={css.messageList}>
                <h4 className={css.messagesTitle}>Last messages</h4>
                {newMessages}
            </div>
            <div className={css.сorrespondence}>
                <div className={css.corTitle}>
                    Title
                </div>
                <div className="css.cor">
                    {newCorrespondence}
                </div>
                <MessageFormRedux onSubmit={addMessage}/>
            </div>
        </div>
    )
}

export default Messages