import './App.css';
import React, { useRef, useContext, useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import { multiStepContext } from './StepContext';
import Navbar from './components/navbar';
import Select from 'react-select';
import place from './data/place.json';
import Plan from './data/Plan_to_study.json';
import Major from './data/major.json';

const customStyles = {

    control: (provided, state) => ({
        ...provided,
        backgroundColor: 'rgb(235, 234, 234)',
        borderRadius: '10px',
        width: '350px',
        height: '50px',
        boxSizing: 'border-box',
        border: '2.5px solid black',
        fontWeight: '550',
        display: 'flex',
        alignItems: 'center',
    }),
    placeholder: (provided, state) => ({
        ...provided,
        display: 'flex',
        alignItems: 'center',
        fontWeight: '550',
    }),
    menu: (provided, state) => ({
        ...provided,
        width: '100%',
        maxWidth: '350px',
        boxSizing: 'border-box',
    }),
    menuList: (provided, state) => ({
        ...provided,
        maxHeight: '200px',
    }),
    option: (provided, state) => ({
        ...provided,
        fontWeight: '550',
        borderBottom: '1px solid #ccc',
        color: state.isSelected ? 'blue' : 'black',
        backgroundColor: state.isFocused ? 'rgba(0, 123, 255, 0.1)' : 'white',
    }),
};

function App() {

    const [Country, setCountry] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [selectedMajor, setselectedMajor] = useState(null);
    const [College, setCollege] = useState("");
    const [Grade, setGrade] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { ans, setAns } = useContext(multiStepContext);
    const buttonRef = useRef(null);
        
    useEffect(() => {
        if (isModalOpen) {
            buttonRef.current.click();
        }
    }, [isModalOpen]);

    const getResponse = async (event) => {

        // Open modal after successful response
        setIsModalOpen(true);

        event.preventDefault();
        let msg = `Give me a list of college in ${Country.label} which offer ${selectedPlan.label} course. I graduated from ${College} recently. Note that I only want NAME and LOCATION of 8 - 12 colleges and NO OTHER TEXT.`;

        console.log(msg);

        if (!Country || !selectedPlan) {
            console.log("Please set value");
        } else {
            try {
                const options = {
                    method: 'POST',
                    body: JSON.stringify({
                        message: msg
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }

                let response = await fetch('http://localhost:8000/gemini', options);

                let data = await response.json();
                setAns(data.text); 
                console.log("Aryan", data.text);

            } catch (error) {
                console.log(error);
                alert(error);
            }
        }
    };

    return (
        <div className="App">
            <Navbar />

            <br />
            <form className='college-predictor-form' onSubmit={getResponse}>

                <div class="container">
                    <div class="row">
                            <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                <label>Where do you want to study?</label>
                                <Select
                                    options={place} name='Program'
                                    value={Country} onChange={(option) => setCountry(option)}
                                    placeholder="Enter here" styles={customStyles}
                                    isClearable isSearchable
                                    required
                                />
                            </div>

                            
                            <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                <label>What are you planning to study?</label>
                                <Select
                                    options={Plan} name='Plan'
                                    value={selectedPlan} onChange={(option) => setSelectedPlan(option)}
                                    placeholder="Enter here" styles={customStyles}
                                    isClearable isSearchable
                                    required
                                />
                            </div>

                            
                            <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                <label>What was your undergraduate college name?</label>
                                <input name='College_name' placeholder='Enter here'
                                    value={College} onChange={(event) => setCollege(event.target.value)}
                                    type='text' 
                                    required/>
                            </div>

                            <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                <label>
                                    {/* What is your CGPA/expected CGPA? */}
                                    What is your current or the expected CGPA at the end of your degree?
                                </label>
                                <input name='Score' placeholder='Enter here'
                                    value={Grade} onChange={(event) => setGrade(parseFloat(event.target.value))}
                                    type='number' step="1"
                                    required
                                />
                            </div>

                            
                            <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                <label>Which course did you major in/ currently pursuing?</label>
                                <Select
                                    options={Major} name='Major'
                                    value={selectedMajor} onChange={(option) => setselectedMajor(option)}
                                    placeholder="Enter here" styles={customStyles}
                                    isClearable isSearchable
                                    required
                                />
                            </div>


                            <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                <label>How many relevant research papers have you published?</label>
                                <input name='Paper' placeholder='Enter here' type='number'
                                    required
                                />
                            </div>
                            
                            <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                <label>Do you have any backlogs?<div>(if you do not have any backlogs please put 0)</div></label>
                                <input name='Backlogs' placeholder='Enter here' type='number'
                                    required
                                />
                            </div>

                            <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                <label>What was your score in the English test?<div>(if you have not taken any test please put 0)</div></label>
                                <input name='English_test' placeholder='Enter here' type='text'
                                    required
                                />
                            </div>

                            
                            <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                <label>How much relevant work experience do you have in years?</label>
                                <input name='Experience' placeholder='Enter here' type='number'
                                    required
                                />
                            </div>
                    </div>  
                </div>

                <br />

                <div class="row justify-content-center" value="submit" type="submit">
                    <button className="btn" ref={buttonRef} 
                        data-bs-toggle = {isModalOpen && "modal"} 
                        data-bs-target="#staticBackdrop"
                    >
                        SUBMIT
                    </button>
                </div>

            </form>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" 
                aria-labelledby="staticBackdropLabel" aria-hidden="true" 
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel"><b> Tell us more about yourself </b></h5>
                        </div>
                        <div className="modal-body">
                            <ContactForm />
                        </div>
                        <div className="modal-footer"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
