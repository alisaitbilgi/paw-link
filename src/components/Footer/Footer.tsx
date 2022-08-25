import { Component } from "react";

import styles from "./Footer.module.css";

class Footer extends Component<any, any> {
    render() {
        return(
            <div className={styles.footer}>
                <div className={styles.upper}>
                    <div className={styles.left}>
                        <div className={styles.logo}/>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.visa}/>
                        <div className={styles.master}/>
                        <div className={styles.usa}/>
                    </div>
                </div>
                <div className={styles.lower}>
                    <div className={styles.left}>
                        <div className={styles.inc}>© 2022 For Good Inc.</div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.fb}/>
                        <div className={styles.insta}/>
                        <div className={styles.tw}/>
                        <div className={styles.you}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
