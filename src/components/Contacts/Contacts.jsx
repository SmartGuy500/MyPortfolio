import logo from "../../assets/Capstone.png"
import styles from "./Contacts.module.scss"

const Contacts = ()=>{
    return(
        <>
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <img src={logo}></img>
            </div>
            <h1 className={styles.header}>The Contacts Page</h1>
        </nav>
        </>
    )
}

export default Contacts