import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

export default function HowScreen() {
    return (
        <div>
            {/* progress bar */}
            <h3>How has your skin been feeling lately?</h3>
            <p>Select all that apply.</p>
            <Chip label="Chip Outlined" variant="outlined" />
            <textarea placeholder='Write any thoughts...' name="postContent" />
            {/* <ActionButtons /> */}
        </div>
    )
}