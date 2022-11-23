import React, { Fragment } from 'react';
import  ReactDOM  from 'react-dom';
import Button from './Button';
import Card from './Card';
import css from './ErrorModal.module.css';

const BackDrop = (props) => {
    return (
        <div className={css.backdrop} onClick={props.onClick} />
    );
};

const ModalOverlay = (props) => {
    return (
        <Card className={css.modal}>
            <header className={css.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={css.content}>
                <p>{props.message}</p>
            </div>
            <footer className={css.actions}>
                <Button onClick={props.onClick}>Close</Button>
            </footer>
        </Card>
    );
};

const ErrorModal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop onClick={props.onClick}/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onClick={props.onClick}/>, document.getElementById('overlay-root'))}
        </Fragment>
    );
};

export default ErrorModal;