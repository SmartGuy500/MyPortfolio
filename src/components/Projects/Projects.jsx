import logo from "../../assets/Capstone.png"
import styles from "./Projects.module.scss"

const Projects = ()=>{
    return(
        <>
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <img src={logo}></img>
            </div>
            <h1 className={styles.header}>The Projects Page</h1>
        </nav>
        </>
    )
}

export default Projects