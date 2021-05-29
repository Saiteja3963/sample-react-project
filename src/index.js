import React from 'react';
import ReactDOM from 'react-dom';
import comp_hello_props from './jsx/test.jsx';
import h1tag from './jsx/test.jsx';
import ComponentLifeCycle from './jsx/component-life.jsx';
import Form from './jsx/form.jsx';
import ExternalCss from './jsx/external-css.jsx'

ReactDOM.render(
    h1tag,
    // comp_hello_props,
    document.getElementById('root')
);

ReactDOM.render(
    <ComponentLifeCycle/>,
    document.getElementById('component-life')
);

ReactDOM.render(
    <Form />,
    document.getElementById('form')
);

ReactDOM.render(
    ExternalCss,
    document.getElementById('external-css')
);