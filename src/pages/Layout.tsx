import { NextPrevBtn, Age, ChoiceShot, DiseaseOrTreatments } from "../components"
import { useState } from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const Layout = () => {
    const steps = ['Age', 'Shot'];
    const [age, setAge] = useState<string | null>(null);
    const [activeStep, setActiveStep] = useState<number>(0)
    const [shot, setShot] = useState<number>(0)
    const [diseaseOrTreatments, setDiseaseOrTreatments] = useState<boolean>(false)
    return (
        <div className=" flex justify-center items-center">
            <div className="  drop-shadow-2xl h-100 md:w-2/3 lg:w-1/2 w-full bg-sky-100  flex flex-col justify-center items-center rounded">
                <Box className="mt-3" sx={{ width: '100%' }}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
                <div className="h-4/5 w-4/5 flex flex-col w-full h-full items-center  justify-center">
                    {activeStep == 0 && <Age setAge={setAge} />}
                    {activeStep == 1 && <ChoiceShot setShot={setShot} shot={shot} />}
                    {activeStep == 1 && shot == 1 ? <DiseaseOrTreatments setDiseaseOrTreatments={setDiseaseOrTreatments} diseaseOrTreatments={diseaseOrTreatments} /> : null}
                </div>
                <div className="flex w-3/5 justify-between mb-5">
                    <div onClick={() => setActiveStep(activeStep - 1)}>
                        <NextPrevBtn name="Previous" />
                    </div>
                    <div onClick={() => setActiveStep(activeStep + 1)}>
                        <NextPrevBtn name="Next" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Layout }