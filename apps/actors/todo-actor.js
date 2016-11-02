import {Actor, Action} from 'iflux2';
import {fromJS, deleteIn} from 'immutable'
let uuid = 0

export default class TodoActor extends Actor {
  defaultState() {
    return {
      todos: []
    };
  }

  @Action("addTodo")
  addTodo(state, value) {
    return state.update('todos', (todos) => {
      return todos.push(fromJS({
        id: uuid++,
        text: value,
        done: false
      }))
    })
  }

  @Action("deleteTodo")
  deleteTodo(state, index) {
    return state.deleteIn(['todos', index])
  }

  @Action("toggle")
  toggle(state, index) {
    return state.updateIn(['todos', index, 'done'], (done) => !done)
  }
}