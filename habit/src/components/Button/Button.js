import "./Button.css"
import React from 'react';
import NewObject from "../NewObject/NewObject";

function Button(){
    const [count, setCount] = React.useState(0);
    function buttonClick(){
        setCount(count + 1);
        alert(count);
    }
    return(<div>
        The {count}
        <button onClick={buttonClick}>Button</button>
    </div>)
}
export default Button;