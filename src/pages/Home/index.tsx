import Action from "../../components/Home/Action";
import Connections from "../../components/Home/Connections";
import Dashboard from "../../components/Home/Dashboard";
import Header from "../../components/Home/Header";
import Navigation from "../../components/Home/Nagigation";
import Repositories from "../../components/Home/Repositories";
import styles from "./styles.module.css";

export default function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.content}>
                <div className={styles.aside}>
                    <Navigation />
                </div>

                <div className={styles.main}>
                    <Dashboard />
                    <Action />
                    <Repositories />
                </div>
                
                <div className={styles.connections}>
                    <Connections title={"Seguindo"} number={"(216)"} />
                    <Connections title={"Seguidores"} number={"(1.1k)"} />
                </div>
            </div>
        </div>
    )
}