import React from "react";
import "./NewStack.css"

const NewStack = props => {
    const onSubmitHandler = event =>{
        event.preventDefault();

        const newDataAdd = {
            id : Math.random().toString(),
            text : "Inside newDataAdd"
        }

        props.onDataAdd(newDataAdd);
    }
    return (
            <form className="form-class" onSubmit={onSubmitHandler}>
            <input type="text" />
            <button type="submit"> Add Item</button>
            </form>
    )
}

export default NewStack;
