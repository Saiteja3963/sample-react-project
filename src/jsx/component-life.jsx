import React from 'react';
import ReactDOM from 'react-dom';

class ComponentLifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
    
        this.updateName = this.updateName.bind(this);
        this.testClick = this.testClick.bind(this);
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }
    
    testClick(event) {
        alert("The name entered is: "+ this.state.name);
    }
    
    componentDidMount() {  
        console.log('Mounting State : calling method componentDidMount');
    }
    
    shouldComponentUpdate() {  
        console.log('Update  State : calling method shouldComponentUpdate');
        return true;
    } 

    componentDidUpdate() {  
        console.log('Update  State : calling method componentDidUpdate')  
    }

    componentWillUnmount() {  
        console.log('UnMounting State : calling method componentWillUnmount');
    }

    render() {
        return (
          <div>        
            Enter Your Name:<input type="text" value={this.state.name} onChange={this.updateName} />
            <br/>        
            <h2>{this.state.name}</h2>
            <input type="button" value="Click Here!" onClick={this.testClick} />
          </div>
        );
    }
}
export default ComponentLifeCycle;