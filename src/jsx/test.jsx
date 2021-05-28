import React from 'react';
import ReactDOM from 'react-dom';

/*
IMP: Only one export statement per module. So comment out other exports and use only one.
*/

// default variables
const display = "Hello, to Guru99 Tutorials";
const h1tag =<h1>{display}</h1>;
// export default h1tag;

// functions as components without props
function Hello() {
    return <h1>Hello, to Guru99 Tutorials</h1>;
}
const hello_func = <Hello />
// export default hello_func;

// functions as components with props
function HelloWithProps(props) {
    return <h1>{props.msg}</h1>;
}
const hello_func_props = <HelloWithProps msg="Hello, to Guru 99 Tutorials"/>
// export default hello_func_props;

// class as components without props
class HelloClass extends React.Component{
    render() {
        return <h1>Hello, to Guru99 Tutorials</h1>;
    }
}
const comp_hello = <HelloClass />;
// export default hello_func;

// class as components with props
class HelloClassWithProps extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            "msg": "Hello, from Guru 99 Tutorials!"
        }
    }
    render() {
        return <h1>{this.props.msg + " " + this.state.msg}</h1>;
    }
}
const comp_hello_props= <HelloClassWithProps msg="Hellow World!" />;
export default comp_hello_props;