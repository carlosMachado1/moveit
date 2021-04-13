import { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext"
import styles from "../styles/components/Profile.module.css"


function Profile () {
    const { level } = useContext(ChallengesContext)

    return(
        <div className={styles.profileConteiner}>
            <img src="https://github.com/carlosMachado1.png" alt="Carlos gabriel Machado"/>

            <div>
                <strong>Carlos Machado</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level { level }
                </p>
            </div>
        </div>
        
    )
}

export default Profile