import { Component } from "react";
import InputForm from "./InputForm";
import ListItem from "./ListItem";

class TodoAppHome extends Component {

    state = {
        currentItem: "",
    }

    handleChange = (event) => {
        console.log("input field event: ", event);
        this.setState({currentItem: event.target.value});
    }

    render() {
        return (
        <>
            <h1>ToDo List App</h1>
            {/* Input form for the todo list App */}
            <InputForm currentItem={this.state.currentItem} handleChange={this.handleChange}/>

            {/* List view of the todo list items */}
            <ListItem/>
        </>
        )
    }
}

export default TodoAppHome;