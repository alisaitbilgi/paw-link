import { Component } from "react";
import Header from "../../components/Header/Header";
import getCampaigns from "../../core/api/getCampaigns";
import Loading from "../../components/Loading/Loading";
import generateItemData from "../../core/utils/generateItemData";
import classname from "../../core/utils/classNames";
import formatPrice from "../../core/utils/formatPrice";
import calculateStar from "../../core/utils/calculateStar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Footer from "../../components/Footer/Footer";

import styles from "./Dashboard.module.css";

export enum OPTIONS {
    Organization = "Organization",
    Category = "Category",
}

interface State {
    defaultCampaigns: any[];
    campaigns: any[];
    loading: boolean;
    selectedOption: OPTIONS;
    campaignStates: any;
    categoryStates: any;
    campaignActive: any;
    searchText: string;
}

class Dashboard extends Component<unknown, State> {
    state = {
        loading: false,
        selectedOption: OPTIONS.Organization,
        defaultCampaigns: [],
        campaigns: [],
        campaignStates: {},
        categoryStates: {},
        campaignActive: null,
        searchText: "",
    };

    async componentDidMount() {
        await this.loadCampaigns();
    }

    async componentDidUpdate(_props: any, prevState: State) {
        const { selectedOption: prevOption } = prevState;
        const { selectedOption } = this.state;

        if (selectedOption !== prevOption) {
            await this.loadCampaigns();
        }
    }

    loadCampaigns = async () => {
        this.setState({ loading: true });

        const { selectedOption } = this.state;
        const campaigns = await getCampaigns(selectedOption);

        this.setState({ campaigns, loading: false, defaultCampaigns: campaigns }, () => {
            const campaignStates: any = {};
            const categoryStates: any = {};

            campaigns.forEach((campaign: any) => {
                campaignStates[campaign.id] = true;

                campaign.categories.forEach((category: any) => {
                    categoryStates[category.id] = true;
                });
            });

            this.setState({ campaignStates, categoryStates });
        });
    }

    handleHover = (id: number | null) => {
        return () => {
            this.setState({ campaignActive: id });
        };
    }

    changeSectionState = (id: string, stateName: string) => {
        return () => {
            const currentStates: any = (this.state as any)[stateName];

            // @ts-ignore
            this.setState({ [stateName]: { ...currentStates, [id]: !currentStates[id] } });
        };
    }

    getDashboardContent() {
        const {
            campaigns,
            campaignStates,
            categoryStates,
            campaignActive,
        } = this.state;

        return campaigns.map((campaign: any) => {
            const {
                id: campaignId,
                name: campaignName,
                categories: campaignCategories,
            } = campaign;
            const campaignBoxVisible = (campaignStates as any)[campaignId];
            const campaignClassNames = classname(styles.campaignBox, { [styles.campaignBoxHidden]: !campaignBoxVisible });

            return (
                <div key={campaignId} className={campaignClassNames}>
                    <button
                        className={classname("resetBtn", styles.campaignName)}
                        onClick={this.changeSectionState(campaignId, "campaignStates")}
                    >
                        <span>{campaignName}</span>
                        <span className="fa fa-play"/>
                    </button>
                    <div className={styles.campaignItemsContainer}>
                        {
                            campaignCategories.map((category: any) => {
                                const {
                                    name: categoryName,
                                    id: categoryId,
                                    items: categoryItems,
                                } = category;
                                const categoryBoxVisible = (categoryStates as any)[categoryId];
                                const categoryClassNames = classname(
                                    styles.categoryBox,
                                    { [styles.categoryBoxHidden]: !categoryBoxVisible },
                                );

                                return (
                                    <div key={categoryId} className={categoryClassNames}>
                                        <button
                                            className={classname("resetBtn", styles.campaignName, styles.categoryName)}
                                            onClick={this.changeSectionState(categoryId, "categoryStates")}
                                        >
                                            <span>{categoryName}</span>
                                            <span className="fa fa-play"/>
                                        </button>
                                        <div className={styles.categoryItemsContainer}>
                                            {
                                                categoryItems.map((item: any) => {
                                                    const {
                                                        imgUrl,
                                                        id,
                                                        description,
                                                        price,
                                                        score,
                                                        reviewCount,
                                                        link,
                                                    } = generateItemData(item);
                                                    const onHover = campaignActive === id;
                                                    const hoverClassNames = classname(
                                                        styles.hoover,
                                                        { [styles.hooverVisible]: onHover },
                                                    );
                                                    const itemClassNames = classname(
                                                        styles.campaignItem,
                                                        { [styles.campaignItemHovered]: onHover },
                                                    );
                                                    const earningClassNames = classname(
                                                        styles.campaignEarning,
                                                        { [styles.campaignEarningHovered]: onHover },
                                                    );

                                                    return (
                                                        <a
                                                            key={id}
                                                            style={{ position: "relative" }}
                                                            onMouseOver={this.handleHover(id)}
                                                            onMouseLeave={this.handleHover(null)}
                                                            href={link}
                                                            target="_blank"
                                                        >
                                                            <div className={earningClassNames}>
                                                                <span>{calculateStar(price)} </span>
                                                                <span className="fa fa-paw"/>
                                                                <span>{"  Points"}</span>
                                                            </div>
                                                            <div className={itemClassNames}>
                                                                <img
                                                                    alt=""
                                                                    className={styles.campaignImg}
                                                                    src={imgUrl}
                                                                    width={200}
                                                                    height={150}
                                                                />
                                                                <div className={styles.campaignMeta}>
                                                                    <h3 className={styles.campaignDesc}>{description}</h3>
                                                                    <div className={styles.campaignPrice}>{formatPrice(price)}</div>
                                                                    <div className={styles.campaignRateSection}>
                                                                        <div className={styles.campaignScore}>
                                                                            <span className="fa fa-star checked"/>
                                                                            <span className={styles.score}>{score.toFixed(1)}</span>
                                                                        </div>
                                                                        <div className={styles.campaignReviewContainer}>
                                                                            <span className={styles.dot}/>
                                                                            <span className={styles.campaignReviews}>{reviewCount}</span>
                                                                            <span className={styles.reviewText}>{" Reviews"}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={hoverClassNames}>
                                                                <button className="resetBtn">
                                                                    {"Shop Now"}
                                                                </button>
                                                            </div>
                                                        </a>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            );
        });
    }

    getDashboardLoading() {
        return (
            <Loading />
        );
    }

    setSelectedOption = (selectedOption: OPTIONS) => {
        this.setState({ selectedOption });
    }

    handleSearch = (searchText: string) => {
        const { defaultCampaigns, campaigns } = this.state;

        this.setState({ searchText }, () => {
            if (searchText === "") {
                this.setState({ campaigns: defaultCampaigns });

                return;
            }

            this.setState({ campaigns: defaultCampaigns });

            const newCampaigns: any = [];

            defaultCampaigns.forEach((campaign: any) => {
                const { categories } = campaign;
                const newCategories: any = [];

                categories.forEach((category: any) => {
                    const { items } = category;
                    const newItems = items.filter((item: any) => {
                        const productName = (item.name ?? item.title ?? "").toLocaleLowerCase();

                        return productName.includes(searchText.toLocaleLowerCase());
                    }) ?? [];

                    if (newItems.length > 0) {
                        newCategories.push({ ...category, items: newItems });
                    }
                });

                if (newCategories.length > 0) {
                    newCampaigns.push({ ...campaign, categories: newCategories });
                }
            });

            this.setState({ campaigns: newCampaigns });
        });
    }

    render() {
        const { loading, selectedOption } = this.state;

        return(
            <div className="pageContainer">
                <Header onSelect={this.setSelectedOption}/>
                {
                    selectedOption === OPTIONS.Category &&
                    <SearchBar onSearch={this.handleSearch}/>
                }
                <div className={styles.dashboardContent}>
                    {
                        loading
                            ? this.getDashboardLoading()
                            : this.getDashboardContent()
                    }
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Dashboard;
