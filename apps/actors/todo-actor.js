import {Actor, Action} from 'iflux2';
import {fromJS} from 'immutable'
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
      return todos.push({
        id: uuid++,
        text: value,
        done: false
      })
    })
  }

  @Action("deleteTodo")
  deleteTodo(state, id) {
    return state.deleteIn(['todos', id])
  }

  @Action("toggle")
  toggle(state, id) {
    return state.updateIn(['todos', id],
      val => val.set('done', !val.get('done')));
  }


  @Action("init")
  init(state, {todos}) {
    return state.set('todos', todos);
  }
}