import { CustomBtn , Age, ChoiceShot, DiseaseOrTreatments, SideEffects, UserFormCIN, UserInfoValidation, CustomizedSnackbar, CircularIndeterminate } from "../components"
import { useState } from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import axios from 'axios';
import { UserData, UserInfo } from "../interfaces";
import { AlertColor } from "@mui/material";
import { useNavigate } from "react-router-dom";

type custom = AlertColor | 'danger'

const VaccineForm:React.FC = () => {
    let navigate = useNavigate();

    const [spinnerState, setSpinnerState] = useState(false);
    const steps = ['Age', 'Vaccine', "CIN", "Validation"];
    const [age, setAge] = useState<number>(0);
    const [activeStep, setActiveStep] = useState<number>(1)
    const [shot, setShot] = useState<number>(0)
    const [diseaseOrTreatments, setDiseaseOrTreatments] = useState<boolean>(false)
    const [sideEffects, setSideEffects] = useState<boolean>(false)
    const [cin, setCin] = useState<string | null>(null)
    const [userInfo, setUserInfo] = useState<UserInfo>({
        email: "",
        address: "",
        fName: "",
        lName: "",
        city: "",
        nbrPhone: 0,
    })

    // FOR CUSTOM SNACKAR
    const [text, setText] = useState("there's no text right now !!!!");
    const [color, setColor] = useState<custom>("success");
    const [state, setState] = useState(false);

    const handleNextStep = () => {

        switch (activeStep) {
            case 1:
                setSpinnerState(true)
                if (age >= 12) {
                    setActiveStep(activeStep + 1)
                    setSpinnerState(false)
                } else {
                    setSpinnerState(false)
                    setText("you're not eligible to do this operation !")
                    setColor("warning");
                    setState(true);
                }
                break;
            case 2:
                setSpinnerState(true)
                if (shot != 0) {
                    setSpinnerState(false)
                    setActiveStep(activeStep + 1)
                } else {
                    setSpinnerState(false)
                    setText("choose a shot please !")
                    setColor("warning");
                    setState(true);
                }
                break;
            case 3:
                setSpinnerState(true)
                if (cin != null) {
                    // CHECKING CIN EXISTENCE AND ALSO THE VALIDITY OF SELECTED SHOT
                    axios.get(`${process.env.REACT_APP_BASE_URL}api/user/check/${cin}/${shot}`)
                        .then((res) => {
                            setSpinnerState(false)
                            if (res.data.next) {
                                setUserInfo(res.data.message)
                                setActiveStep(activeStep + 1)
                            } else {
                                setText("something is wrong, check your shot again please !")
                                setColor("error");
                                setState(true);
                            }
                        }).catch((e) => {
                            setSpinnerState(false)
                            setText("something wrong , get back later !")
                            setColor("error");
                            setState(true);
                        })
                } else {
                    setSpinnerState(false)
                    setText("something is wrong , please insert a valid CIN !")
                    setColor("error");
                    setState(true);
                }

        }
    }
    const handleSubmit = () => {
        setSpinnerState(true)
        const data: UserData = {
            ...userInfo,
            age: age,
            shotTaken: shot,
            cin: cin,
            diseaseOrTreatments: diseaseOrTreatments,
        }
        if (shot === 2 && sideEffects !== false) {
            data.sideEffects1stVaccine = sideEffects
        } else if (shot === 3 && sideEffects !== false) {
            data.sideEffects2stVaccine = sideEffects

        }
        // SENDING ALL USER INFOS TO DATABASE
        axios.post(`${process.env.REACT_APP_BASE_URL}api/user/registerUser`, data)
            .then((res) => {
                setText("Your appointments has been programing, check your email")
                setColor("success");
                setState(true);
                setTimeout(() =>{navigate(`/`);},4000)
                setSpinnerState(false)
            })
            .catch((err) => {
                setText("something is wrong, try it again please !")
                setColor("error");
                setState(true);
                setSpinnerState(false)
            })

    }
    return (<>
        <div className=" flex justify-center items-center">
            <div className="  drop-shadow-2xl h-100 md:w-2/3 lg:w-1/2 w-full bg-sky-100  flex flex-col justify-center items-center rounded">
                <Box className="mt-3" sx={{ width: '100%' }}>
                    <Stepper activeStep={activeStep - 1} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
                <div className="flex flex-col w-full h-full items-center  justify-center">
                    {activeStep == 1 && <Age setAge={setAge} />}
                    {activeStep == 2 && <ChoiceShot setShot={setShot} shot={shot} />}
                    {activeStep == 2 && shot == 1 ? <DiseaseOrTreatments setDiseaseOrTreatments={setDiseaseOrTreatments} diseaseOrTreatments={diseaseOrTreatments} /> : null}
                    {activeStep == 2 && (shot == 2 || shot == 3) ? <SideEffects setSideEffects={setSideEffects} sideEffects={sideEffects} /> : null}
                    {activeStep == 3 && <UserFormCIN cin={cin} setCin={setCin} />}
                    {activeStep == 4 && <UserInfoValidation setUserInfo={setUserInfo} userInfo={userInfo} />}
                </div>
                <div className="flex w-3/5 justify-between mb-5">
                    {
                    !spinnerState ?
                    <>
                        <div onClick={() => setActiveStep(activeStep - 1)}>
                            {activeStep > 1 && < CustomBtn name="Previous" />}
                        </div>
                        <div onClick={() => handleNextStep()}>
                            {activeStep < steps.length && <CustomBtn name="Next" />}
                        </div>
                        <div onClick={() => handleSubmit()}>
                            {activeStep === 4 && <CustomBtn name="Submit" />}
                        </div>
                    </>
                    :
                    <div className="flex justify-center items-center w-full">
                        <CircularIndeterminate/>
                    </div>
                    }
                </div>
            </div>
        </div>
        <CustomizedSnackbar text={text} color={color} state={state} setState={setState}></CustomizedSnackbar>
    </>
    )
}

export { VaccineForm }