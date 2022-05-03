import styles from './ErrorModal.module.css';

import Card from "./Card";
import Button
 from "./Button";
const ErrorModal = (props) => {
    return (
        <section id="error-modal">
            <div className={styles.backdrop}></div>
            <Card className={styles.modal}>
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
        </section>
    );

};

export default ErrorModal;