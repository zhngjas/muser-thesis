import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Stack from '@mui/material/Stack';
import { Height } from '@mui/icons-material';
import { height } from '@mui/system';
import logo from './icons/logo.png';

export default function StartScreen({ activeState }: { activeState: React.Dispatch<React.SetStateAction<number>> }) {
    return (
        <div>
            <Stack spacing={2} direction="column" justifyContent={"center"} sx={{height: '399px'}}>
                <Typography variant="h1" width={"480px"}>Thinking about new skincare?</Typography>
                <Stack spacing={2} direction="row" alignItems={"center"}>
                    <Typography variant='body1'>Let's talk about it.</Typography>
                    <IconButton aria-label="next" onClick={() => { activeState(1) }} sx={{backgroundColor: '#27A7B1', color: '#FAF9F5', "& button:hover": {
                  backgroundColor: '#27A7B1'
                }}}>
                        <ArrowForwardIcon />
                    </IconButton>
                </Stack>
                </Stack>
                <img src={logo} alt="Logo" />
        </div>
    );
}