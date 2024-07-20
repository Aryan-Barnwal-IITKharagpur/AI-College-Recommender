import React, { useContext, useState } from 'react';
import './form.css';
import { multiStepContext } from '../StepContext'

function Form2() {

    const { setStep, userData, setUserData } = useContext(multiStepContext);

    const handleSubmit = (e) => {

        console.log(userData);
        e.preventDefault();
        setStep(3);
    };

    return (
    
        <form className='form' onSubmit = {handleSubmit}>

            <input name='College_company' value={userData['College_company']} onChange={(e) => setUserData({...userData, "College_company": e.target.value})} placeholder='COLLEGE/COMPANY' type='text' required/>
            <input name='Country' value={userData['Country']} onChange={(e) => setUserData({...userData, "Country": e.target.value})} placeholder='Country' type='text' required/>
            <input name='CV' value={userData['CV']} onChange={(e) => setUserData({...userData, "CV": e.target.value})}  placeholder='CV drive link' type='URL' required/>

            <div className="buttonContainer">
                <input className='button1' onClick={() => setStep(1)} type='button' value='Back'/>
                <input className='button2' type='Submit' value='Next'/>
            </div>

        </form>
    );
}

export default Form2;
