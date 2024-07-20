import Form1 from './form1';
import Form2 from './form2';
import Form3 from './form3';
import { useContext, useState } from 'react';
import { Stepper, StepLabel, Step, Stack } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { multiStepContext } from '../StepContext';

function ContactForm() {

    const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
        '& .MuiStepLabel-label': {
          fontSize: '18px', 
          fontWeight: '700', 
        },
    }));

    const {currentStep, finalData} = useContext(multiStepContext);
    function showStep(step){
        switch(step){
            case 1: return <Form1/>
            case 2: return <Form2/>
            case 3: return <Form3/>
        }
    }
  
    return (
        <div className="App">
        
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>

                <Stepper activeStep={currentStep - 1} alternativeLabel>
                    <Step> <CustomStepLabel>Personnel Details</CustomStepLabel> </Step>
                    <Step> <CustomStepLabel>Professional Details</CustomStepLabel> </Step>
                    <Step> <CustomStepLabel>GMAT Details</CustomStepLabel> </Step>
                </Stepper>

            </div>
            {/* {showStep(3)} */}

            {showStep(currentStep)}

        </div>
    );
}

export default ContactForm;