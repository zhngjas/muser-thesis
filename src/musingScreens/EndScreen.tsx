import Typography from '@mui/material/Typography';


export default function EndScreen({buy}: {buy:Boolean}) {
    return (
        <div>
            {buy ?
                <Typography variant='h2'>Lets see where this new skincare product takes us!</Typography> :
                <Typography variant='h2'>Yippee! Lets finish up current skincare first ^-^</Typography>
            }
            <Typography variant='body1'>Visit Past Musings to review this entry.</Typography>
            {/* action buttons */}
        </div>
    )
}