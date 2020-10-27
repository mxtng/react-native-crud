import React, {useReducer} from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'create_task':
    case 'edit_task':
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item,
      );
    case 'delete_task':
    default:
      return state;
  }
};

const initialState = [
  {id: 1, title: 'Task #1', description: 'Todo Task #1'},
  {id: 2, title: 'Task #2', description: 'Todo Task #2'},
  {id: 3, title: 'Task #3', description: 'Todo Task #3'},
];

const TaskContext = React.createContext();

export const TaskProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const editTask = (id, title, description, callback) => {
    dispatch({type: 'edit_task', payload: {id, title, description}});
    if (callback) return callback();
  };

  return (
    <TaskContext.Provider value={{state, editTask}}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
