import styles from '../../styles/HeroSection.module.css'

import Image from 'next/image'

import primera from '../../public/images/primera.png'

import RubberLetter from './RubberLetter/RubberLetter'

export default function HeroSection() {

    /* 
        RubberBand animation and framer-motion npm:
        https://www.youtube.com/watch?v=ykR07FSEYcc&list=WL&index=10&t=546s
        https://www.framer.com/docs/use-animation-controls/
    */

    const sentence = 'COMUNIÓN'.split('')

    return (
        <div className={styles.container}>
            <div className={styles.heroImg1}></div>
            <div className={styles.heroImg2}></div>
            <div className={styles.heroImg3}></div>
            <div className={styles.heroImg4}></div>
            <div className={styles.heroImg5}></div>
            <div className={styles.heroImg6}></div>
            <div className={styles.heroImg7}></div>

            <h1 className={styles.mi}>mi</h1>
            <Image src={primera} alt="primera" priority className={styles.primera}/>

            <div className={styles.comunion}>
                {sentence.map((letter, index) => {
                    return (
                        <RubberLetter key={index} letter={letter} />
                    )
                })}
            </div>
        </div>
    )
}