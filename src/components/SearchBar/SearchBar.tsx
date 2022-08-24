import { Component } from "react";
import styles from "./SearchBar.module.css";
import debounce from "lodash.debounce";

interface Props {
    onSearch: (value: string) => void;
}

class SearchBar extends Component<Props, any> {
    constructor(props: Props) {
        super(props);
        this.handleSearch = debounce(this.handleSearch, 350);
    }

    handleSearch = (event: any) => {
        this.props.onSearch(event.target.value);
    }

    render() {
        return(
            <div className={styles.searchBarContainer}>
                <input
                    placeholder="🔎  What are you looking for?"
                    className={styles.searchBar}
                    // @ts-ignore
                    onChange={this.handleSearch}
                />
            </div>
        );
    }
}

export default SearchBar;
