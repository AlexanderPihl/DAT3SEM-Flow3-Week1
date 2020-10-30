import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./day3-4LiftStateToDoList"
import NewTodo from "./day3-4LiftStateNewToDoList"
import { v1 as uuid } from 'uuid';

export function LiftState() {
    const initialData = [
        { id: uuid(), todoText: "Peter Madsen" },
        { id: uuid(), todoText: "Britta Nielsen" },
        { id: uuid(), todoText: "Peter Lundin" }
    ]
    const [todos, setTodos] = useState(initialData);
    const [newTodo, setNewTodo] = useState({ id: "", todoText: "" });

    console.log(todos)

    const addTodo = todo => {
        if (todo.id === "") { //Indicates a new object
            todo.id = uuid();
            todos.push(todo);
        } else {//if id != "", it must be an existing todo. Find it and add changes
            let todoToEdit = todos.find(t => t.id === todo.id);
            todoToEdit.todoText = todo.todoText;
        }
        setTodos([...todos]);
        setNewTodo({ id: "", todoText: "" })
    };

    const deleteTodo = (id) => {
        if (newTodo.id !== "") {  //Cannot delete while we are editing
            return;
        }

        const newTodoList = todos.filter(todo => todo.id !== id);
        setTodos([...newTodoList]);
    }

    const editTodo = (id) => {
        const todoToEdit = todos.find(todo => todo.id === id);
        setNewTodo({ ...todoToEdit })
    }


    return (
        <div className="container outer">
            <h2 style={{ textAlign: "center", marginBottom: 25 }}>
                Props and Lifting State Demo
                </h2>

            <div className="row">
                <div className="col-6 allTodos">
                    <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
                </div>
                <div className="col-5 new-todo">
                    <NewTodo
                        addTodo={addTodo}
                        nextTodo={newTodo}
                        setNewTodo={setNewTodo}
                    />
                </div>
            </div>

        </div>
    );
}
