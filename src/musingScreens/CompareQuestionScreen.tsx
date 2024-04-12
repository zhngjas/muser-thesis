import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export default function CompareQuestionScreen() {
    return (
        <div>
            {/* progress bar */}
            <h3>Would you like to compare this product with your routine?</h3>
            <Button variant="outlined">No</Button>
            <Button variant="contained">Yes</Button>
            <IconButton aria-label="back">
                <KeyboardArrowLeftIcon />
            </IconButton>
        </div>
    )
}