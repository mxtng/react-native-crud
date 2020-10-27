import React, {useReducer} from 'react';

const reducer = (state, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'create_task':
      return [
        ...state,
        {
          id: state.length + 1,
          title: payload.title,
          description: payload.description,
        },
      ];
    case 'edit_task':
      return state.map((item) => (item.id === payload.id ? payload : item));
    case 'delete_task':
      return state.filter((item) => item.id !== payload);
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

  const createTask = (title, description, callback) => {
    dispatch({type: 'create_task', payload: {title, description}});
    if (callback) return callback();
  };

  const editTask = (id, title, description, callback) => {
    dispatch({type: 'edit_task', payload: {id, title, description}});
    if (callback) return callback();
  };

  const deleteTask = (id) => {
    dispatch({type: 'delete_task', payload: id});
  };

  return (
    <TaskContext.Provider value={{state, createTask, editTask, deleteTask}}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
