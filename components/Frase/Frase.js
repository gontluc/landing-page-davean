import styles from '../../styles/Frase.module.css'

import Image from 'next/image'

import abre from '../../public/images/abreComillas.png'
import cierra from '../../public/images/cierraComillas.png'

import { motion, useAnimationControls } from "framer-motion"

import { useState } from 'react'

export default function Frase() {

    const [animated, setAnimated] = useState(false)

    const controls = useAnimationControls()

    function animateLine() {
        setTimeout(() => {
            controls.start({
                width: [
                    '0%', '20%', '40%', '60%', '100%'
                ],
                transition: {
                    times: [0, 1, 2, 3, 5],
                    duration: 5
                },
            })
        }, 500)

        setAnimated(true)
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.frase}>
                La primera comunión es un bonito <br /> recuerdo que guardar
                <Image alt='abre comilla' src={abre} className={styles.abreComilla} />
                <Image alt='cierra comilla' src={cierra} className={styles.cierraComilla} />
            </h2>
            <motion.div 
                className={styles.linea} 
                animate={controls}
                onViewportEnter={() => !animated && animateLine()}
            />
            <h3 className={styles.davean}>Davean</h3>
        </div>
    )
}