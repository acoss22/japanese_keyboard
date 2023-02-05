import styles from './genericTutorial.module.scss';

function GenericTutorial(props) {
    
    return (
        <div className={styles.container}>
            <span className={styles.label}>{props.text}</span>
        </div>
    );
}

export default GenericTutorial;
