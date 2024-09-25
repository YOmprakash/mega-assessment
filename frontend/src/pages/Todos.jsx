import { useState, useEffect } from 'react';
import axios from 'axios';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Simulating fetching todos (you can uncomment the actual API code)
  // const fetchTodos = async () => {
  //   const response = await axios.get('/api/todos', {
  //     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  //   });
  //   setTodos(response.data);
  // };

  // useEffect(() => {
  //   fetchTodos();
  // }, []);

  const handleAddTask = async () => {
    if (!newTask.trim()) return; // Don't add empty tasks
    // Simulating adding a new task (you can uncomment the actual API code)
    // const response = await axios.post(
    //   '/api/todos',
    //   { title: newTask, status: 'pending' },
    //   {
    //     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    //   }
    // );
    const newTodo = { id: Date.now(), title: newTask, status: 'pending' }; // Simulate response
    setTodos([...todos, newTodo]);
    setNewTask('');
  };

  return (
    <div className="max-w-md p-6 mx-auto mt-10 bg-white ">
      <h1 className="mb-6 text-2xl font-semibold text-center text-gray-700">My Todo List</h1>
      
      <div className="flex items-center justify-between mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <button 
          onClick={handleAddTask}
          className="px-4 py-2 ml-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Add 
        </button>
      </div>

      {todos.length > 0 ? (
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li key={todo.id} className="flex items-center justify-between p-4 border rounded ">
              <span className="text-gray-700">{todo.title}</span>
              <span className={`text-sm ${todo.status === 'pending' ? 'text-yellow-500' : 'text-green-500'}`}>
                {todo.status.charAt(0).toUpperCase() + todo.status.slice(1)}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-6 text-center text-gray-500">
          No tasks available. Add a new task to get started!
        </div>
      )}
    </div>
  );
};

export default TodoPage;
