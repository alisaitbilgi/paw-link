import { Component } from "react";
import styles from "./Header.module.css";

class Header extends Component<any, any> {
    render() {
        return(
            <header className={styles.header}>
                This is header
            </header>
        );
    }
}

export default Header;
