import { Fragment } from 'react';
import reactDom from 'react-dom';
import classes from './Modal.module.css';
const Backdrop =props=>{
    return <div className={classes.backdrop}></div>
};
const ModalOverlay =props=>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};
// the modal and backdrop will be portalled to the div with id of 'overlays' in public/index.html
const portalElement =document.getElementById('overlays');
const Modal =props=>{
    return <Fragment>
        {reactDom.createPortal(<Backdrop />, portalElement)}
        {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </Fragment>
};

export default Modal;