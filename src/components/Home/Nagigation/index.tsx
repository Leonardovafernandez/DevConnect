import build from "../../../assets/Home/Navigation/building.svg"
import cubos from "../../../assets/Home/Navigation/cubos.svg"
import email from "../../../assets/Home/Navigation/email.svg"
import omni from "../../../assets/Home/Navigation/omni.svg"
import pin from "../../../assets/Home/Navigation/pin.svg"
import twitter from "../../../assets/Home/Navigation/twitter.svg"
import url from "../../../assets/Home/Navigation/url.svg"
import perfil from "../../../assets/Home/Navigation/Perfil.jpg"
import styles from "./styles.module.css"

export default function Navigation() {
    return (
        <div className={styles.navigation}>
            <img src={perfil} alt=""/>
            <hr />
            <div className={styles.name}>
                <span>Leonardo Fernandez</span>
                <span>Front-end Developer</span>
            </div>
            <hr />
            <div className={styles.links}>
                <div className={styles.link}>
                    <img src={build} alt="" />
                    <span >@cubos  academy</span>
                </div>
                <div className={styles.link}>
                    <img src={pin} alt="" />
                    <span >Fortaleza-Ce</span>
                </div>
                <div className={styles.link}>
                    <img src={email} alt="" />
                    <span >vnd.vander@gmail.com</span>
                </div>
                <div className={styles.link}>
                    <img src={url} alt="" />
                    <span >https://cubos.academy</span>
                </div>
                <div className={styles.link}>
                    <img src={twitter} alt="" />
                    <span >@vander_1</span>
                </div>
            </div>
            <hr />
            <div className={styles.organization}>
                <span>Organizações</span>
                <div className={styles.link}>
                    <img src={cubos} alt="" />
                    <span >Cubos Academy</span>
                </div>
                <div className={styles.link}>
                    <img src={omni} alt="" />
                    <span >Aracati Digital</span>
                </div>
            </div>
        </div>
    )
}