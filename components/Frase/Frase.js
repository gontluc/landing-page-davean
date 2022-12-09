import styles from '../../styles/Frase.module.css'

import Image from 'next/image'

import abre from '../../public/images/abreComillas.png'
import cierra from '../../public/images/cierraComillas.png'

export default function Frase() {
    return (
        <div className={styles.container}>
            <h2 className={styles.frase}>
                La primera comunión es un bonito <br /> recuerdo que guardar
                <Image alt='abre comilla' src={abre} className={styles.abreComilla} />
                <Image alt='cierra comilla' src={cierra} className={styles.cierraComilla} />
            </h2>
            <div className={styles.linea}></div>
            <h3 className={styles.davean}>Davean</h3>
        </div>
    )
}