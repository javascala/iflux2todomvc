import {QL, DQL} from 'iflux2';
import {fromJS} from 'immutable';



/**
 * 输入框的查询值
 */
export const valueQL = QL('valueQL', ['value', (value) => value]);


/**
 * todo查询
 */
export const todoQL = QL('todoQL', ['todos', 'filter',
  (todos, filter) => {
    if(__DEV__) {
      console.log('')
    }

    if (filter === '') {
      return todos
    }
    const done = (filter === 'Activity')
    return todos.filter(val => val.get('done') === done)
  }
]);

/**
 * 统计值
 */
export const countQL = QL([todoQL, (todos) => todos.count()]);


/**
 * dql
 */
export const todoDQL = QL(['todoDQL', ['todo', '$index'], todo => todo || fromJS({})]);
