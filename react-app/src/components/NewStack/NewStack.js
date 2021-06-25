import React, {useState} from "react";
import "./NewStack.css"

const NewStack = props => {
    const [enteredText, setEnteredText] = useState("");

    const onSubmitHandler = event =>{
        event.preventDefault();

        const newDataAdd = {
            id : Math.random().toString(),
            text : enteredText
        }

        setEnteredText("");
        
        props.onDataAdd(newDataAdd);
    }

    const textChangeHandler = event =>{
        setEnteredText(event.target.value);
    }
    return (
            <form className="form-class" onSubmit={onSubmitHandler}>
            <input type="text" value={enteredText}onChange={textChangeHandler}/>
            <button type="submit"> Add Item</button>
            </form>
    )
}

export default NewStack;
