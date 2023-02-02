import React from 'react';
import styles from './footer.module.scss';

const FooterComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footer_container}>
                <div className={styles.footer}>
                    © 2023 Ana Sequeira
                    <span className={styles.copyright}> All rights reserved.</span>
                </div>
            </div>
        </div>
    );
}

export default FooterComponent;
