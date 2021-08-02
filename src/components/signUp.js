import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import Input from "./input";
import '../index.css';
function SignUp() {
    const [email, setEmail] = useState('');
    useEffect(()=>{
        if(email === ''){
            setTextInLabel('No Text in Input')
            const mylabel = document.getElementById('lab');
            ReactDOM.findDOMNode(mylabel).classList.add('notext');
        }
    },[email])
    const setTextInLabel = (email) =>{
        setEmail(email);
    }
    return (
        <div className="mydiv">
            <Input setTextInLabel={setTextInLabel}/>
            <label id="lab" className="mylabel">{email}</label>
        </div>
    );
}

export default SignUp;