import React from 'react';
import ReactDOM from 'react-dom';

let classforh1 = 'h1tag';
  
function ExternalCssComponent(props) {
    return <h1 className={classforh1}>{props.msg}</h1>;
}  
const ExternalCss = <ExternalCssComponent msg="My Stylist is External CSS" />;
export default ExternalCss;