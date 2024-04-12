import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export default function CheckScreen({buyState}: {buyState: React.Dispatch<React.SetStateAction<Boolean>>}) {
    return (
        <div>
            <h3>Are you still thinking about getting new skincare?</h3>
            <Button variant="outlined" onClick={() => {buyState(false)}}>No</Button>
            <Button variant="contained" onClick={() => {buyState(true)}}>Yes</Button>
            <IconButton aria-label="back">
                <KeyboardArrowLeftIcon />
            </IconButton>
        </div>
    )
}