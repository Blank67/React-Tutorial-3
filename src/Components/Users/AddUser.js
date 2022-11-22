import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import css from "./AddUser.module.css";

const AddUser = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('');

    const enteredUserNameChnageHandler = (e) => {
        setEnteredUserName(e.target.value);
    };
    const enteredUserAgeChnageHandler = (e) => {
        setEnteredUserAge(e.target.value);
    };
    const addUserHandler = (event) => {
        event.preventDefault();
        // console.log(enteredUserAge,enteredUserName);
        if(enteredUserAge.trim().length === 0 || enteredUserName.trim().length === 0){
            console.log("INVALID"); 
            return;   
        }
        if(enteredUserAge < 1){
            console.log("INVALID 2");    
            return;   
        }
        props.onAdd(enteredUserName,enteredUserAge);
        setEnteredUserName('');
        setEnteredUserAge('');
    };

    return (
        <Card className={css.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Name:</label>
                <input id="username" type="text" value={enteredUserName} onChange={enteredUserNameChnageHandler} />
                <label htmlFor="userage">Age (in Years):</label>
                <input id="userage" type="number" value={enteredUserAge} onChange={enteredUserAgeChnageHandler} />
                <Button type="submit" name={enteredUserName} age={enteredUserAge}/>
            </form>
        </Card>
    );
};

export default AddUser;