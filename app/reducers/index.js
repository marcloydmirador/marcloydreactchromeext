import { combineReducers } from 'redux';
import todos from './todos';

export default combineReducers({
  todos
});

var els = document.getElementsByClassName("name");

Array.prototype.forEach.call(els, function(el) {
    // Do stuff here
    console.log(el.innerHTML);
});

//[].forEach.call(els, function (el) {...});