// App.js

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [editTodoId, setEditTodoId] = useState(null);
    const [editTodoText, setEditTodoText] = useState('');

    useEffect(() => {
        fetchTodos();
    }, []);

    async function fetchTodos() {
        try {
            const response = await fetch('http://localhost:5000/todos');
            const data = await response.json();
            setTodos(data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    }

    async function addTodo() {
        try {
            const response = await fetch('http://localhost:5000/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ description: newTodo })
            });
            const newTodoData = await response.json();
            console.log('New todo added:', newTodoData);
            setNewTodo('');
            fetchTodos();
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    }

    async function deleteTodo(todoId) {
        try {
            await fetch(`http://localhost:5000/todos/${todoId}`, {
                method: 'DELETE'
            });
            console.log('Todo deleted:', todoId);
            fetchTodos();
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    }

    async function editTodo(todoId) {
        try {
            await fetch(`http://localhost:5000/todos/${todoId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ description: editTodoText })
            });
            console.log('Todo updated:', todoId);
            setEditTodoId(null);
            setEditTodoText('');
            fetchTodos();
        } catch (error) {
            console.error('Error editing todo:', error);
        }
    }

    function handleEditClick(todoId, description) {
        setEditTodoId(todoId);
        setEditTodoText(description);
    }

    return ( <
        div className = "container" >
        <
        h1 className = "heading" > Todo App < /h1> <
        div className = "input-container" >
        <
        input type = "text"
        value = { newTodo }
        onChange = {
            (e) => setNewTodo(e.target.value) }
        placeholder = "Enter todo" /
        >
        <
        button onClick = { addTodo } > Add Todo < /button> <
        /div> <
        table className = "todo-list" >
        <
        thead >
        <
        tr >
        <
        th > ID < /th> <
        th > Description < /th> <
        th > Actions < /th> <
        /tr> <
        /thead> <
        tbody > {
            todos.map(todo => ( <
                tr key = { todo.todo_id } >
                <
                td > { todo.todo_id } < /td> <
                td > { todo.description } < /td> <
                td >
                <
                button className = 'editBtn'
                onClick = {
                    () => handleEditClick(todo.todo_id, todo.description) } > Edit < /button> <
                button className = 'deleteBtn'
                onClick = {
                    () => deleteTodo(todo.todo_id) } > Delete < /button> <
                /td> <
                /tr>
            ))
        } <
        /tbody> <
        /table> <
        /div>
    );
}

export default App;