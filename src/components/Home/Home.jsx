import logo from "../../assets/Capstone.png"
import styles from "./Home.module.scss"

const Home = ()=>{
    return(
        <>
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <img src={logo}></img>
            </div>
            <h1 className={styles.header}>The Home Page</h1>
        </nav>
        </>
    )
}

export default Home