/* eslint react/prop-types: 0 */
import React from 'react';
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import style from './modal.module.css'

function Modal (props) {
    const useStyles = makeStyles(theme => ({
        dialogWrapper: {
            position: 'absolute',
            width: 800,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        }
    }))
    
    const {title, children, openModal, setOpenModal} = props;
    const classes = useStyles ();

    return (
        <Dialog open = {openModal} maxWidth="md" classes={{paper: classes.dialogWrapper}}>
            <DialogTitle>
                <div style={{display:"flex"}}>
                    <Typography variant ='h6' component ="div" style={{flexGrow:1}}>
                        {title}
                    </Typography>
                    <button onClick={() => {setOpenModal(false)}} className={style.btnModal}>X</button>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default Modal