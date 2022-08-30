import styles from './genericTutorial.module.css';

function GenericTutorial(props) {
    
    return (
        <div className={styles.container}>
            <span className={styles.label}>{props.text}</span>
        </div>
    );
}

export default GenericTutorial;
