import styles from '../../styles/Frase.module.css'

import Image from 'next/image'

import abre from '../../public/images/abreComillas.png'
import cierra from '../../public/images/cierraComillas.png'
import davean from '../../public/images/daveanFrase.png'

import { motion, useAnimationControls } from "framer-motion"

import { useState } from 'react'

export default function Frase() {

    const [animated, setAnimated] = useState(false)

    const controls = useAnimationControls()

    function animateLine() {
        setTimeout(() => {
            controls.start({
                width: '100%',
                transition: {
                    duration: 3,
                    ease: 'easeInOut'
                },
            })
        }, 300)

        setAnimated(true)
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.frase}>
                La primera comunión es un bonito <br /> recuerdo que guardar
                <Image alt='abre comilla' src={abre} className={styles.abreComilla} quality={100}/>
                <Image alt='cierra comilla' src={cierra} className={styles.cierraComilla} quality={100}/>
            </h2>

            <div className={styles.lineaContainer}>
                <motion.div 
                    className={styles.linea} 
                    animate={controls}
                    onViewportEnter={() => !animated && animateLine()}
                />
            </div>

            <Image alt='davean' src={davean} className={styles.davean} quality={100}/>
        </div>
    )
}