import React, { useState, useEffect } from 'react';
import TodoCrd from './TodoCrd';
import AddTodo from './AddTodo';

const Container = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [showCompletedTodos, setShowCompletedTodos] = useState(true);


    useEffect(() => {
        const defaultTodos = [

            { text: 'HTML', isCompleted: true },
            { text: 'CSS', isCompleted: true },
            { text: 'JavaScript', isCompleted: true },
            { text: 'React', isCompleted: true },
            { text: 'Node.js', isCompleted: true },
            { text: 'Express.js', isCompleted: true },
            { text: 'MongoDB', isCompleted: true },
            { text: 'GraphQL', isCompleted: true },
            { text: 'TypeScript', isCompleted: true },
            { text: 'Redux', isCompleted: true },
            { text: 'Next.js', isCompleted: true },
            { text: 'Docker', isCompleted: false },
            { text: 'Kubernetes', isCompleted: false },
            { text: 'AWS', isCompleted: false },
        ];


        const fetchedLocalTodos = localStorage.getItem('todos-list');
        
        if (fetchedLocalTodos) {
            setTodos(JSON.parse(fetchedLocalTodos));
        } else {
            setTodos(defaultTodos);
            SavetoLocalStorage(defaultTodos);
        }
    }, []);

    const SavetoLocalStorage = (todosList) => {
        localStorage.setItem('todos-list', JSON.stringify(todosList));
    };

    const handleInput = (e) => setTodo(e.target.value);

    const handleAddTodo = () => {
        if (!todo.trim()) {
            alert('Todo cannot be empty.');
            return;
        }
        if (todos.some((t) => t.text.toLowerCase() === todo.trim().toLowerCase())) {
            alert('Todo already exists!');
            return;
        }
        const updatedTodos = [...todos, { text: todo.trim(), isCompleted: false }];
        setTodos(updatedTodos);
        SavetoLocalStorage(updatedTodos);
        setTodo('');
    };

    const handleEdit = (index) => {
        const newTodo = window.prompt('Enter the new todo text:', todos[index].text);
        if (newTodo && newTodo.trim()) {
            const updatedTodos = todos.map((item, i) =>
                i === index ? { ...item, text: newTodo.trim() } : item
            );
            setTodos(updatedTodos);
            SavetoLocalStorage(updatedTodos);
        }
    };

    const handleDelete = (index) => {
        if (window.confirm('Are you sure you want to delete this todo?')) {
            const updatedTodos = todos.filter((_, i) => i !== index);
            setTodos(updatedTodos);
            SavetoLocalStorage(updatedTodos);
        }
    };

    const handleCheck = (index) => {
        const updatedTodos = todos.map((item, i) => 
            i === index ? { ...item, isCompleted: !item.isCompleted } : item
        );
        setTodos(updatedTodos);
        SavetoLocalStorage(updatedTodos);
    };

    const toggleShowCompleted = () => setShowCompletedTodos(!showCompletedTodos);

    return (
        <div className='bg-gradient-to-r from-violet-600 to-indigo-200 m-3 p-4 rounded-lg shadow-2xl'>

            <AddTodo handleInput={handleInput} todo={todo}  handleAddTodo={handleAddTodo} toggleShowCompleted={toggleShowCompleted} showCompletedTodos={setShowCompletedTodos} />

            <div className='todos p-2'>
                {todos.length === 0 && <div className='text-white'>No Todos to display</div>}
                {todos.map((item, index) => 
                    (showCompletedTodos || !item.isCompleted) && (
                        <TodoCrd
                            key={index}
                            item={item}
                            index={index}
                            handleCheck={handleCheck}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    )
                )}
            </div>

        </div>
    );
};

export default Container;
