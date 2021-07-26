import { Component } from "react";

class InputForm extends Component{

    render() {

        return (
        <>
            <form>
                <label>New Task </label>
                <input type ="text" placeholder="Add your next task here" onChange= {this.props.handleChange}/>
                <br/>
                <h2>Prop: {this.props.currentItem}</h2>
                <button>Add Item</button>
            </form>
        </>
        )
    }
}

export default InputForm;