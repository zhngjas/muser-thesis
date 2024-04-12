import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import StartScreen from './musingScreens/StartScreen';
import LastBoughtScreen from './musingScreens/LastBoughtScreen';
import WhyScreen from './musingScreens/WhyScreen';
import HowScreen from './musingScreens/HowScreen';
import CompareQuestionScreen from './musingScreens/CompareQuestionScreen';
import CompareScreen from './musingScreens/CompareScreen';
import CheckScreen from './musingScreens/CheckScreen';
import EndScreen from './musingScreens/EndScreen';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#EE9D4C',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#EE9D4C',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#D6CDC6',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));


const steps = ['StartScreen', 'LastBoughtScreen', 'WhyScreen', 'HowScreen', 'CompareQuestionScreen', 'CheckScreen', 'EndScreen'];

export default function Musing() {
    const [activeScreen, setActiveScreen] = useState<number>(0);

    const handleNext = () => {
        setActiveScreen((prevActiveScreen) => prevActiveScreen + 1);
    };

    const handleBack = () => {
        setActiveScreen((prevActiveScreen) => prevActiveScreen - 1);
    };

    const [willBuy, setWillBuy] = useState<Boolean>(false);
    return (
        <div>
            {activeScreen != 0 ? (<Stepper alternativeLabel activeStep={activeScreen} connector={<QontoConnector />}>
                {steps.map((label) => (
                    <Step key={label}></Step>
                ))}
            </Stepper>) : null}
            {activeScreen == 0 ? <StartScreen activeState={setActiveScreen}/> : null}
            {activeScreen == 1 ? <LastBoughtScreen /> : null}
            {activeScreen == 2 ? <WhyScreen /> : null}
            {activeScreen == 3 ? <HowScreen /> : null}
            {activeScreen == 4 ? <CompareQuestionScreen /> : null}
            {activeScreen == 5 ? <CompareScreen /> : null}
            {activeScreen == 6 ? <CheckScreen buyState={setWillBuy} /> : null}
            {activeScreen == 7 ? <EndScreen buy={willBuy} /> : null}
            {activeScreen != 0 ? (
                <div>
                    <IconButton aria-label="back" onClick={handleBack}>
                        <KeyboardArrowLeftIcon />
                    </IconButton>
                    <Button variant="contained" onClick={handleNext}>Continue</Button>
                </div>) : null}
                {/* split buttons to two so it can .. do that lol */}
        </div>
    )
}
