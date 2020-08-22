import styles from './footer.module.css';

export default function Footer () {
    return (
        <div className={styles.footer}>
            <div className={styles.links}>
                <a href='https://github.com/' className={styles.links}>
                    <i className="fa fa-github"> </i>
                </a>
            </div>
            <div className={styles.author}>
                Developed by: Daryl Aranha
            </div>
            <div>
                <a href='https://www.linkedin.com/in/darylaranha/' className={styles.links}>
                    <i className="fa fa-linkedin-square"> </i>
                </a>
            </div>
        </div>
    );
}