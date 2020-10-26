import React, {useReducer} from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'create_task':
    case 'edit_task':
    case 'delete_task':
    default:
      return state;
  }
};

const initialState = [
  {title: 'Task #1'},
  {title: 'Task #2'},
  {title: 'Task #3'},
];

const TaskContext = React.createContext();

export const TaskProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TaskContext.Provider value={{state, dispatch}}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
