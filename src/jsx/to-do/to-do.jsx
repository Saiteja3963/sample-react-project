import React from 'react';

class ToDoList extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.items.map(item => (
                        <li key={item.id}>{item.text}</li>
                    ))
                }
            </ul>
        );
    }
}

class ToDoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items:[], text:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h3>TODO App</h3>
                <ToDoList items={this.state.items}/>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="to-do-input">Enter an item:</label>
                    <br/>
                    <input type="text" id="to-do-input" onChange={this.handleChange}
                        value={this.state.text}/>
                        <br />
                    <button>Add ToDo</button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.text.length == 0)
            return;
        const newToDo = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newToDo),
            text: ''
        }));
    }
}

export default ToDoApp;