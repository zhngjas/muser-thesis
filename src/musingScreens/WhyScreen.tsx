import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

export default function WhyScreen() {
    return (
        <div>
            {/* progress bar */}
            <h3>Why are you considering new skincare?</h3>
            <p>Select all that apply.</p>
            <Chip label="Chip Outlined" variant="outlined" />
            {/* <ActionButtons /> */}
        </div>
    )
}