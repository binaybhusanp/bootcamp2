import { Component } from "react";
import InputForm from "./InputForm";

class TodoAppHome extends Component {
    render() {
        return (
        <>
            <h1>ToDo List App</h1>
            {/* Input form for the todo list App */}
            <InputForm/>
        </>
        )
    }
}

export default TodoAppHome;