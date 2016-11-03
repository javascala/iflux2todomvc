import {Actor, Action} from 'iflux2';

export default class FilterActor extends Actor {
  defaultState() {
    return {
      //过滤条件
      filter: ''
    };
  }

  @Action("changeFilter")
  changeFilter(state, filter) {
    state.set('filter', filter);
  }
}