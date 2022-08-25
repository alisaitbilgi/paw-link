import { Component } from "react";
import { OPTIONS } from "../../pages/Dashboard/Dashboard";
import classname from "../../core/utils/classNames";

import styles from "./Navigator.module.css";

interface Props {
    options: OPTIONS[];
    onSelect: (selected: OPTIONS) => void;
}

class Navigator extends Component<Props, any> {

    state = {
        selected: OPTIONS.Organization,
    };

    handleClick = (selected: OPTIONS) => () => {
        this.setState({ selected }, () => {
            this.props.onSelect(selected);
        });
    }

    render() {
        const { options } = this.props;
        const { selected } = this.state;

        return (
            <div className={styles.navigationWrapper}>
                {
                    options.map((option: OPTIONS) => (
                        <button
                            key={option}
                            className={
                                classname(
                                    styles.optionsButton,
                                    { [styles.selected]: selected === option },
                                )
                            }
                            onClick={this.handleClick(option)}
                        >
                            {option}
                        </button>
                    ))
                }
            </div>
        );
    }
}

export default Navigator;
