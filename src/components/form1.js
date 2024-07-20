import React, { useContext, useState } from 'react';
import './form.css';
import { multiStepContext } from '../StepContext';

function Form() {

    const { setStep, userData, setUserData } = useContext(multiStepContext);

    const handleSubmit = (e) => {

        e.preventDefault();
        setStep(2);
    };

    return (
    
        <form className='form' onSubmit = {handleSubmit}>

            <input name='Name' value={userData['Name']} onChange={(e) => setUserData({...userData, "Name": e.target.value})} placeholder='Name' type='text' required/>
            <input name='Phone' value={userData['phone']} onChange={(e) => setUserData({...userData, "Phone": e.target.value})} placeholder='Phone' type='number' required/>
            <input name='Email' value={userData['Email']} onChange={(e) => setUserData({...userData, "Email": e.target.value})} placeholder='Email' type='email' required/>
            <input className='button' type='Submit' value='Next'/>
        </form>
    );
}

export default Form;