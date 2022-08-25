import { Component } from "react";
import Navigator from "../Navigator/Navigator";
import { OPTIONS } from "../../pages/Dashboard/Dashboard";

import styles from "./Header.module.css";

class Header extends Component<any, any> {

    setSelectedOption = (selectedOption: OPTIONS) => {
        const { onSelect } = this.props;

        onSelect(selectedOption);
    }

    render() {
        const { onSelect } = this.props;

        return(
            <div className={styles.header}>
                <div className={styles.logo}/>
                <div className={styles.metaPart}>
                    {
                        onSelect
                            ? (
                                <>
                                    <div className={styles.listBy}>
                                        <span>{"List by   "}</span>
                                        <Navigator
                                            options={[OPTIONS.Organization, OPTIONS.Category]}
                                            onSelect={this.setSelectedOption}
                                        />
                                    </div>
                                    <div className={styles.profilePart}>
                                        <div className={styles.profileImg}/>
                                        <div className={styles.profileBadge}>
                                            <span>{"45 "}</span>
                                            <span className="fa fa-paw"/>
                                            <span>{"  Points  "}</span>
                                        </div>
                                    </div>
                                </>
                            )
                            : (
                                <button className="resetBtn">Join Us</button>
                            )
                    }
                </div>
            </div>
        );
    }
}

export default Header;
