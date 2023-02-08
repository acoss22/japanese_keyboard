import React from 'react';
import styles from './header.module.scss';
import { useTranslation } from 'react-i18next';

const Header = () => {
const { t } = useTranslation();

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                Japanese Keyboard
            </div>
        </div>
    );
}

export default Header;
