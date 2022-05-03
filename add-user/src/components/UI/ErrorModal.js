import styles from './ErrorModal.module.css';

import Card from "./Card";
import Button from "./Button";

import ReactDom from 'react-dom';

const Backdrop = props => {
    return (<div key="modal-backdrop" className={styles.backdrop}></div>);
};

const ModalOverlay = props => {
    return (
        <Card key="modal-card-content" className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <section className={styles.content}>
                <p>{props.message}</p>
            </section>
            <footer className={styles.actions}>
                <Button onClick={props.onConfirmClick}>Okay</Button>
            </footer>
        </Card>
    );
};

//Portaling were this item will be rendered.
const ErrorModal = (props) => {
    return (
        <>
            { ReactDom.createPortal(<Backdrop />, document.getElementById('backdrop-root')) }
            { ReactDom.createPortal(
                    <ModalOverlay title={props.title} message={props.message} onConfirmClick={props.onConfirmClick} />
                    ,document.getElementById('overlay-root')) }
        </>
    );

};

export default ErrorModal;