import React from 'react'

//If you have form components they usually have state so they are normally classes
class TodoForm extends React.Component {
    state = {textInput: ''}

    //change the state when the user types
    setText = (e) => this.setState({textInput: e.target.value});

    render() {

        const {textInput} = this.state;
        const {onAddTask, onClearCompleted} = this.props;
        
        //set text takes an event and sets state from event since the cb has that signature i can just assign it
        //for the button on click I need to pass state to the callback that is not a part of the click event so i have to create an anonmous function there and assign it
        return (<div>
            <input 
            type="text"
            onChange={this.setText} 
            value={textInput} />
            <button onClick={() => onAddTask(textInput)} >
                Add Task
            </button> 
            <button onClick={onClearCompleted}>Remove completed tasks</button>
        </div>);
    }

}

export default TodoForm;