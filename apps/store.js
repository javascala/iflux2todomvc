import {Store} from 'iflux2'
import TextActor from './actors/text-actor'
import TodoActor from './actors/todo-actor'
import FilterActor from './actors/filter-actor'


export default class AppStore extends Store {
  bindActor() {
    return [
      new TextActor,
      new TodoActor,
      new FilterActor
    ];
  }


  constructor(props) {
    super(props);
    //debug
    window._store = this;
  }


//;;;;;;;;;;;;;action;;;;;;;;;;;;;;;;;;;;;;;
  changeValue = (value) => {
    this.dispatch('changeValue', value);
  };


  addTodo = () => {
    const value = this.state().get('value');
    this.dispatch('addTodo', value);
    this.dispatch('submit')
  };


  changeFilter = (status) => {
    this.dispatch('filter', status);
  };


  toggle = (index) => {
    this.dispatch('toggle', index);
  };


  deleteTodo = (index) => {
    this.dispatch('deleteTodo', index);
  };
}
