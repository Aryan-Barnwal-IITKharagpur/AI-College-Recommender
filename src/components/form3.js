import React, { useContext, useState } from 'react';
import './form.css';
import { multiStepContext, StepContext } from '../StepContext'

function Form3() {

    const { setStep, userData, setUserData, Submit } = useContext(multiStepContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData)
        Submit(userData)
    };


    return (
    
        <form className='form' onSubmit = {handleSubmit} >
            
            <input name='Exam_Date' value={userData["Exam_date"]} onChange={(e) => setUserData({...userData, "Exam_date": e.target.value})}  placeholder='When do you plan to give GMAT exam?' type='month' required/>
            <input name='Target_Score' value={userData["Target_score"]} onChange={(e) => setUserData({...userData, "Target_score": e.target.value})} placeholder='What is your target GMAT Score?' type='number' required/>
            
            <select name='Program' value={userData["Program"]} onChange={(e) => setUserData({...userData, "Program": e.target.value})} required >

                <option value="" selected="selected" disabled>What type of program are you planning to apply to?</option>
                <option value="Full-Time MBA">Full-Time MBA</option>
                <option value="Part-Time MBA">Part-Time MBA</option>
                <option value="Executive MBA">Executive MBA</option>
                <option value="Deferred Full-Time MBA">Deferred Full-Time MBA</option>

            </select>

            <div className="buttonContainer">
                <input className='button1' onClick={() => setStep(2)} type='button' value='Back'/>
                <input className='button2' type='Submit' value='Submit' 
                // data-bs-dismiss="modal"
                />
            </div>
        </form>
    );
}

export default Form3;
