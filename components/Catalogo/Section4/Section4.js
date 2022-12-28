import styles from '../../../styles/Catalogo/Section4.module.css'
import stylesr from '../../../styles/Catalogo/Section4responsive.module.css'

import img1 from '../../../public/images/catalogo4.jpg'
import img2 from '../../../public/images/catalogo5.jpg'
import leaves from '../../../public/images/leaves.png'

import { useEffect, useState } from 'react'

import Image from 'next/image'

import { motion, useAnimationControls } from "framer-motion"

export default function Section4({ isMobile, animateImg3, animateImg4 }) {

    const [animatedImg1, setAnimatedImg1] = useState(false)
    const [animatedImg2, setAnimatedImg2] = useState(false)

    const controlsImg1 = useAnimationControls()
    const controlsImg2 = useAnimationControls()

    useEffect(() => {
        setAnimatedImg1(false)
        setAnimatedImg2(false)
    }, [isMobile])

    if (!isMobile) { return (
        <section className={styles.section}>

            <motion.div 
                animate={controlsImg2}
                onViewportEnter={() => !animatedImg2 && animateImg3(controlsImg2, setAnimatedImg2)}
                className={styles.imgContainer}
            >
                <Image 
                    alt='niña fotografía primera comunión' 
                    src={img2} 
                    className={styles.img2} 
                    quality={100} 
                />
            </motion.div>

            <div className={styles.imgAndFrase}>
                <Image 
                    alt='hojas' 
                    src={leaves} 
                    className={styles.leaves} 
                    quality={100} 
                />

                <div className={styles.fraseContainer}>
                    <p className={styles.frase}>...unas fotos atemporales y llenas de magia</p>
                    <div className={styles.borderFrase}></div>
                </div>
            </div>

            <motion.div 
                animate={controlsImg1}
                onViewportEnter={() => !animatedImg1 && animateImg4(controlsImg1, setAnimatedImg1)}
                className={styles.imgContainer}
            >
                <Image 
                    alt='niño fotografía primera comunión' 
                    src={img1} 
                    className={styles.img1} 
                    quality={100} 
                />
            </motion.div>
            
        </section>
    )} else {
        return (
            <section className={stylesr.section}>

                <div className={stylesr.imgAndFrase}>
                    <Image 
                        alt='hojas' 
                        src={leaves} 
                        className={stylesr.leaves1} 
                        quality={100} 
                    />

                    <div className={stylesr.fraseContainer}>
                        <p className={stylesr.frase}>...unas fotos atemporales y llenas de magia</p>
                    </div>

                    <Image 
                        alt='hojas' 
                        src={leaves} 
                        className={stylesr.leaves2} 
                        quality={100} 
                    />
                </div>

                <div className={stylesr.imgs}>
                    <motion.div 
                        animate={controlsImg2}
                        onViewportEnter={() => !animatedImg2 && animateImg3(controlsImg2, setAnimatedImg2)}
                        className={stylesr.imgContainer}
                    >
                        <Image 
                            alt='niña fotografía primera comunión' 
                            src={img2} 
                            className={stylesr.img2} 
                            quality={100} 
                        />
                    </motion.div>

                    <motion.div 
                        animate={controlsImg1}
                        onViewportEnter={() => !animatedImg1 && animateImg4(controlsImg1, setAnimatedImg1)}
                        className={stylesr.imgContainer}
                    >
                        <Image 
                            alt='niño fotografía primera comunión' 
                            src={img1} 
                            className={stylesr.img1} 
                            quality={100} 
                        />
                    </motion.div>
                </div>

            </section>
        )
    }
}