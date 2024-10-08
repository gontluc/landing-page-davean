import styles from '../../../styles/Catalogo/Section5.module.css'

import img1 from '../../../public/images/catalogo6.jpg'
import img1Mobile from '../../../public/images/catalogo6-mobile.jpg'

import img2 from '../../../public/images/catalogo7.jpg'
import img2Mobile from '../../../public/images/catalogo7-mobile.jpg'

import Image from 'next/image'

import { motion, useAnimationControls } from "framer-motion"

import { useState } from 'react'

export default function Section5({ isMobile, animateImg, animateImg4 }) {

    const [animatedImg1, setAnimatedImg1] = useState(false)
    const [animatedImg2, setAnimatedImg2] = useState(false)

    const controlsImg1 = useAnimationControls()
    const controlsImg2 = useAnimationControls()

    return (
        <section className={styles.section}>

            <div className={styles.fraseContainer}>
                <div className={styles.frase}>
                    para nunca olvidar esa <br /> sonrisa, esa mirada...
                </div>
            </div>

            <div className={styles.imgs}>
                <motion.div 
                    /* animate={controlsImg1}
                    onViewportEnter={() => !animatedImg1 && animateImg(controlsImg1, setAnimatedImg1)} */
                    className={styles.imgContainer1}
                >
                    <Image 
                        alt='niña fotografía primera comunión' 
                        src={isMobile ? img1Mobile : img1} 
                        className={styles.img1} 
                        quality={100} 
                    />
                </motion.div>

                <motion.div 
                    /* animate={controlsImg2}
                    onViewportEnter={() => !animatedImg2 && animateImg4(controlsImg2, setAnimatedImg2)} */
                    className={styles.imgContainer2}
                >
                    <Image 
                        alt='niño fotografía primera comunión' 
                        src={isMobile ? img2Mobile : img2} 
                        className={styles.img2} 
                        quality={100} 
                    />
                </motion.div>
            </div>
            
        </section>
    )
}