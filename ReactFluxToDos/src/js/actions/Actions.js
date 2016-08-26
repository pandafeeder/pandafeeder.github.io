'use strict'

import dispatcher from '../dispatcher/Dispatcher'

export function AddTodo(text) {
    dispatcher.dispatch(
            {
                type: 'CREATE_TODO',
                payload: text
            })
}

export function DeleteTodo(id) {
    dispatcher.dispatch(
            {
                type: 'DELETE_TODO',
                payload: id
            })
}

export function CompleteToggle(id) {
    dispatcher.dispatch(
            {
                type: 'COMPLETE_TOGGLE',
                payload: id
            })
}

export function ClearCompleted() {
    dispatcher.dispatch(
            {
                type: 'CLEAR_COMPLETED',
                payload: null 
            })
}

export function ShowCate(value) {
    dispatcher.dispatch(
            {
                type: 'SHOW_CATE',
                payload: value
            })
}

export function SwitchMail() {
    dispatcher.dispatch(
            {
                type: 'SWITCH_MAIL',
                payload: ''
            })
}

export function inputMailAddress(text) {
    dispatcher.dispatch(
            {
                type: 'MAIL_INPUT',
                payload: text
            })
}

