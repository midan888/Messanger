let initState = {
    message: [
        {id: 1, name: 'Pasha', time: '10:45', message: 'Hello world'},
        {id: 2, name: 'Artem', time: '10:42', message: 'Hi'},
        {id: 3, name: 'Sveta', time: '10:32', message: 'How are u?'},
        {id: 4, name: 'Katya', time: '11:21', message: 'Thx'},
        {id: 5, name: 'Vitalik', time: '11:19', message: 'BB'}
    ],
    correspondence: [
        {id: 1, time: '10:45', message: 'Hello world'},
        {id: 2, time: '10:45', message: 'BRUH'},
        {id: 3, time: '10:45', message: 'Hi'},
        {id: 4, time: '10:45', message: 'thx'}
    ],
    newMessageText: ''
}

// ACTION TYPE
let NEW_MESSAGE = 'NEW-MESSAGE';
let UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

// ACTION CREATOR
export const actionAddMessage = () => ({type: NEW_MESSAGE})
export const actionOnMessageChange = (text) => ({type: UPDATE_NEW_MESSAGE, newText: text})

const messagesReducer = (state = initState, action) => {
    switch (action.type) {
        case NEW_MESSAGE:
            return {
                ...state,
                ...state,correspondence: [...state.correspondence,{id: 5, time: new Date(), message: state.newMessageText}],
                newMessageText: ''
            }
        case UPDATE_NEW_MESSAGE:{
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        default:
            return state
    }
}

export default messagesReducer