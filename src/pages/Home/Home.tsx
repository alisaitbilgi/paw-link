import { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import styles from "./Home.module.css";
import {Link} from "react-router-dom";

const expText = "PawLink is the intersection place for those who wants to create a better life for our friends with paws and who wants to shop online. If you shop whatever you want to buy online, you’ll be supporting millions of friends with paws by simply choosing to shop with care.";
const talkLeft = "Would you like your grocery shops, clothes you buy or anything you pay for means worlds to another life?";
const talkRight = "You have the right audience to help you, but you can’t figure out a way to put your links in one place to show what they need?";
const pawText = "Show people how you are helping out by creating your profile\n" +
    "\n" +
    "Create your link to gather all your links in one place and get the needed support from your audience!";
const infText = "Show people how you are helping out by creating your profile\n" +
    "\n" +
    "Create your link to gather all your links in one place and get the needed support from your audience!";

class Home extends Component<any, any> {
    render() {
        return(
            <div className="pageContainer">
                <Header/>
                <div className={styles.homeContainer}>
                    <div className={styles.titleContainer}>
                        <div className={styles.titlePart}>
                            <div className={styles.title}>{"WOOF! MEOW!*"}</div>
                            <div className={styles.exp}>{expText}</div>
                        </div>
                        <div className={styles.titleImg}/>
                    </div>
                    <div className={styles.descPart}>
                        <div className={styles.leftDesc}>
                            <span className={styles.talk}>{talkLeft}</span>
                            <Link to={"/dashboard?Organization"}>
                                <button className="resetBtn">Start Now</button>
                            </Link>
                        </div>
                        <div className={styles.rightDesc}>
                            <span className={styles.talk}>{talkRight}</span>
                            <Link to={"/dashboard?Category"}>
                                <button className="resetBtn">Start Now</button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.orgPart}>
                        <div className={styles.orgOne}>
                            <div className={styles.titlePart}>
                                <div className={styles.orgTitle}>{"If you are a paw hero: "}</div>
                                <div className={styles.orgExp}>{pawText}</div>
                            </div>
                            <div className={styles.pawImg}/>
                        </div>
                        <div className={styles.orgTwo}>
                            <div className={styles.titlePart}>
                                <div className={styles.orgTitle}>{"If you are an influencer: "}</div>
                                <div className={styles.orgExp}>{infText}</div>
                            </div>
                            <div className={styles.infImg}/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;
