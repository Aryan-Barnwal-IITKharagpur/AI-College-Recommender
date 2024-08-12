import React, { useRef, useState } from 'react';
import App from './App';
import emailjs from '@emailjs/browser'
import { useNavigate } from "react-router-dom";
export const multiStepContext = React.createContext();

const StepContext = () => {
    
    
    const [currentStep, setStep] = useState(1);
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);
    const [ans, setAns] = useState("");

    const form = useRef();

    function Submit() {

        //e.preventDefault();
        console.log("im userdata",userData);
        const formData = new FormData();
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString();

        formData.append("Date", formattedDate);
        formData.append("Name", userData["Name"]);
        formData.append("Phone", userData["Phone"]);
        formData.append("Email", userData["Email"]);
        formData.append("College_Company", userData["College_company"]);
        formData.append("Country", userData["Country"]);
        formData.append("CV", userData["CV"]);
        formData.append("Exam_Date", userData["Exam_date"]);
        formData.append("Target_Score", userData["Target_score"]);
        formData.append("Program", userData["Program"]);
        console.log("check",userData)

        const serviceId = 'service_em2ycy5';
        const templateId = 'template_g8247u4';
        const publicKey = '--NA9dSrW4t1Zhbus';

        const templateParams = {

            from_name:  userData['Name'],
            from_email: userData['Email'],
            to_name: 'Web Wizard',
            message: ans
        }
        console.log("tempplate params",templateParams)
        //alert("hello")
        emailjs.send(serviceId, templateId, templateParams, {publicKey: publicKey})
            .then(
                () => {
                    console.log("Success");
                    //alert('SUCCESS!');
                },
                (error) => {
                    console.log("Failed");
                    //alert('FAILED...', error.text);
                },
            );

        console.log("we are done")
        // google doc se related hai    
        fetch("https://script.google.com/macros/s/AKfycbydy9aMGvbXp7TzHIcDcbV6K0aIsyfUSxhaUGeFeV3IVKpBP6KJrDeKX-Lgi6a9qSfA/exec", {
            method: "POST",
            body: formData,
        })
        .then(response => {

            if (response.ok) {

                setFinalData(finalData => [...finalData, userData]);
                setUserData([]);
                console.log(finalData);
                //alert("Form submitted successfully!");
            } else {

                //alert("Form unsuccessful!");
                throw new Error('Network response was not ok');
            }
        })
        .catch(error => {
            alert('We were not able to save your Data');
        });
    }

    return(

        <multiStepContext.Provider value={{ currentStep, setStep, userData, setUserData, finalData, setFinalData, ans, setAns, Submit}}>
            {/* passed as props */}
            <App/>

            <form ref={form} onSubmit={() => {}}>
                <input type="hidden" name="user_name" value={form["Name"]} />
                <input type="hidden" name="user_email" value={form["Email"]} />
                <input type="hidden" name="message" value={form["CV"]} />
            </form>
            
        </multiStepContext.Provider>
    )
}

export default StepContext;
