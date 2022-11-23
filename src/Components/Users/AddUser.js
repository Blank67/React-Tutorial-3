import React, { Fragment, useRef, useState } from 'react';
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import css from "./AddUser.module.css";

const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collegeInputRef = useRef();
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredUserName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        const enteredUserCollege = collegeInputRef.current.value;
        if (enteredUserAge.trim().length === 0 || enteredUserName.trim().length === 0 || enteredUserCollege.trim() === 0) {
            setError({
                title: "Invalid Input",
                message: "Name or Age or College cannot be empty."
            });
            return;
        }
        if (+enteredUserAge < 1) { //+ is used to forcefully convert string to int so we can compare. (Without + will also work but it's just good practice)
            setError({
                title: "Invalid Age",
                message: "Age should be greater than 0."
            });
            return;
        }
        props.onAdd(enteredUserName, enteredUserAge, enteredUserCollege);
        nameInputRef.current.value = ''; //We can do this as we don't need previous state OR we are not changing DOM OR we are just reading otherwise we would have use states.
        ageInputRef.current.value = '';
        collegeInputRef.current.value = '';
    };
    const errorHandler = () => {
        setError(null);
    };

    return (
        //We can use Wrapper Component(User created component that return props.children), <> </>, React.Fragment instead of <div> </div> as they don't actually load on our DOM.
        <Fragment> 
            {error && <ErrorModal title={error.title} message={error.message} onClick={errorHandler} />}
            <Card className={css.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Name:</label>
                    <input id="username" type="text" ref={nameInputRef} />
                    <label htmlFor="userage">Age (in Years):</label>
                    <input id="userage" type="number" ref={ageInputRef} />
                    <label htmlFor="usercollege">College:</label>
                    <input id="usercollege" type="text" ref={collegeInputRef} />
                    <Button type="submit" >Add</Button>
                </form>
            </Card>
        </Fragment>
    );
};

export default AddUser;