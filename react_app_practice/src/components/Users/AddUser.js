import React from  'react';
import Card from '../UI/Card';
import classes from './AddUsers.module.css';
import Button from '../UI/Button';
const AddUser = props =>{

    const addUserHandler=(event) =>{
        event.preventDefault();
    };

    return(
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <labe htmlFor="username">Username</labe>
        <input id="username" type="text"></input>

        <labe htmlFor="age">Age</labe>
        <input id="age" type="number"></input>
        <Button type='submit'>Add User</Button>
    </form>
    </Card>);
};

export default AddUser;