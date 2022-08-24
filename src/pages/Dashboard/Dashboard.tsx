import { Component } from "react";
import Header from "../../components/Header/Header";
import Navigator from "../../components/Navigator/Navigator";
import getCampaigns from "../../core/api/getCampaigns";
import Loading from "../../components/Loading/Loading";
import generateItemData from "../../core/utils/generateItemData";
import styles from "./Dashboard.module.css";
import classname from "../../core/utils/classNames";
import formatPrice from "../../core/utils/formatPrice";
import calculateStar from "../../core/utils/calculateStar";

export enum OPTIONS {
    User = "User",
    Product = "Product",
}

interface State {
    campaigns: any[];
    loading: boolean;
    selectedOption: OPTIONS;
    campaignStates: any;
    categoryStates: any;
    campaignActive: any;
}

class Dashboard extends Component<unknown, State> {
    state = {
        loading: false,
        selectedOption: OPTIONS.User,
        campaigns: [],
        campaignStates: {},
        categoryStates: {},
        campaignActive: null,
    };

    async componentDidMount() {
        await this.loadCampaigns();
    }

    async componentDidUpdate(_props: any, prevState: State) {
        if (this.state.selectedOption !== prevState.selectedOption) {
            await this.loadCampaigns();
        }
    }

    loadCampaigns = async () => {
        this.setState({ loading: true });

        const { selectedOption } = this.state;
        const campaigns = await getCampaigns(selectedOption);

        this.setState({ campaigns, loading: false }, () => {
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
                        <span className={styles.chevron}>{">"}</span>
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
                                            <span className={styles.chevron}>{">"}</span>
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

    render() {
        const { loading } = this.state;

        return(
            <div className="pageContainer">
                <Header/>
                <Navigator
                    options={[OPTIONS.User, OPTIONS.Product]}
                    onSelect={this.setSelectedOption}
                />
                <div className={styles.dashboardContent}>
                    {
                        loading
                            ? this.getDashboardLoading()
                            : this.getDashboardContent()
                    }
                </div>
            </div>
        );
    }
}

export default Dashboard;
