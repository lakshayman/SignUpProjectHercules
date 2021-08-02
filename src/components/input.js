import '../index.css';
import ReactDOM from 'react-dom';
function Input(props){
    const onChangeHandler = (e) => {
        props.setTextInLabel(e.target.value);
        const mylabel = document.getElementById('lab');
        ReactDOM.findDOMNode(mylabel).classList.remove('notext');
    }
    return (
        <input className="myinput" onChange={onChangeHandler}></input>
    );
}

export default Input;