var redux = require('redux');

console.log('redux loaded');

var mState =  {
  searchText: '',
  showCompleted: 'false',
  todos: [
    {
      id: 1,
      text: 'go see client',
      createdAt: 1235
    },
    {
      id: 2,
      text: 'work on redux',
      createdAt: 19799
    },
    {
      id: 3,
      text: "walk the Dog",
      createdAt: 179739
    }
  ]
}

var reducer = (state = mState, action) => {

  //switch searh types
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      //always return state
      return state;

  }
}

var store = redux.createStore(reducer, redux.compose(
  /*check if developer tools exist and if they do call them as a function*/
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

//Subscribe to change

var unsubscribe =  store.subscribe(() => {
  var state = store.getState();

  console.log('searchtext is ', state.searchText);
});

var currentState = store.getState();
console.log('current todostate ', currentState);


var action = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'dog'
}

store.dispatch(action);

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'new text'
})


unsubscribe();
store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'new new text'
})
