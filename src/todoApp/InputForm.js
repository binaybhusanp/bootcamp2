import { Component } from "react";

class InputForm extends Component{

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
            <form>
                <label>New Task </label>
                <input type ="text" placeholder="Add your next task here" onChange= {this.handleChange}/>
                <br/>
                <button>Add Item</button>
            </form>
        </>
        )
    }
}

export default InputForm;