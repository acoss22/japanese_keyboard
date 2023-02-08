import React from 'react';
import styles from './header.module.scss';

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                Japanese Keyboard
            </div>
        </div>
    );
}

export default Header;
