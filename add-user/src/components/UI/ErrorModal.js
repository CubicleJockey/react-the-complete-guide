import styles from './ErrorModal.module.css';

import Card from "./Card";
import Button from "./Button";
const ErrorModal = (props) => {
    return ( //NOTE: Fragment is using an array instead of a wrapper. Requires key property. Help prevent Div Soup
        // <section id="error-modal">
        [
            <div key="modal-backdrop" className={styles.backdrop}></div>
            
            ,<Card key="modal-card-content" className={styles.modal}>
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
        // </section>
        ]
    );

};

export default ErrorModal;