import React, { Fragment, useState } from 'react';
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import css from "./AddUser.module.css";

const AddUser = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('');
    const [error, setError] = useState();

    const enteredUserNameChnageHandler = (e) => {
        setEnteredUserName(e.target.value);
    };
    const enteredUserAgeChnageHandler = (e) => {
        setEnteredUserAge(e.target.value);
    };
    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserAge.trim().length === 0 || enteredUserName.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Name or Age cannot be empty."
            });
            return;
        }
        if (enteredUserAge < 1) {
            setError({
                title: "Invalid Age",
                message: "Age should be greater than 0."
            });
            return;
        }
        props.onAdd(enteredUserName, enteredUserAge);
        setEnteredUserName('');
        setEnteredUserAge('');
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
                    <input id="username" type="text" value={enteredUserName} onChange={enteredUserNameChnageHandler} />
                    <label htmlFor="userage">Age (in Years):</label>
                    <input id="userage" type="number" value={enteredUserAge} onChange={enteredUserAgeChnageHandler} />
                    <Button type="submit" name={enteredUserName} age={enteredUserAge}>Add</Button>
                </form>
            </Card>
        </Fragment>
    );
};

export default AddUser;