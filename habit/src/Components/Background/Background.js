import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Background = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return(

        <div>
            <div style={{height: 200, width: 200, background: 'powderblue'}} onClick={handleOpen}></div>
            <div style={{height: 200, width: 200, background: 'lightpink', left: 200, position: "absolute"}}></div>
            <div style={{height: 200, width: 200, background: 'Khaki', left: 400, top:400, position: "absolute"}}></div>
            <div style={{left: 850, top:400, position: "absolute", fontFamily: "Courier", fontSize: "2em"}}><h1 >21 days</h1></div>
           


            <div style={{height: 200, width: 200, right:0, top:0, background: 'powderblue', position: "absolute" }} onClick={handleOpen}></div>
            <div style={{height: 200, width: 200, background: 'lightpink', right: 200, top:200, position: "absolute"}}></div>
            <div style={{height: 200, width: 200, background: 'Khaki', right: 400, top:400, position: "absolute"}}></div>
        </div>


    )
};




export default Background;