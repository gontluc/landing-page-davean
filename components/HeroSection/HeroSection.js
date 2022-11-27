import styles from '../../styles/HeroSection.module.css'

import Image from 'next/image'

import primera from '../../public/images/primera.png'

export default function HeroSection() {
    return (
        <div className={styles.container}>
            <div className={styles.heroImg}></div>
            <h1 className={styles.mi}>mi</h1>
            <Image src={primera} alt="primera" priority className={styles.primera}/>
            <h1 className={styles.comunion}>COMUNIÓN</h1>
        </div>
    )
}