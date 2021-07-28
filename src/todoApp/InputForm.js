import { Component } from "react";

class InputForm extends Component{

    render() {

        return (
        <>
            <form onSubmit = {this.props.handleNewItemOnSubmit}>
                <label>New Task </label>
                <input type ="text" placeholder="Add your next task here" value={this.props.currentItem} onChange= {this.props.handleChange}/>
                <br/>
                <button onClick={this.props.handleNewItemOnSubmit}>Add Item number: {this.props.todoItems.length +1}</button>
            </form>
        </>
        )
    }
}

export default InputForm;