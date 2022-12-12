import styles from '../../styles/Catalogo.module.css'

import Image from 'next/image'

import catalogo1 from '../../public/images/catalogo1.jpg'
import cruz from '../../public/images/cruz.png'
import rectangle from '../../public/images/rectangle.png'

import { motion, useAnimationControls } from "framer-motion"

import { useState } from 'react'

export default function Catalogo({ catalogo }) {

    const [animatedImg, setAnimatedImg] = useState(false)

    const controlsImg = useAnimationControls()

    function animateImg() {
        setTimeout(() => {
            controlsImg.start({
                transform: [
                    'translateY(400px)',
                    'translateY(0px)'
                ],
                filter: [
                    'blur(8px)',
                    'blur(0px)'
                ],
                opacity: [0, 1],
                transition: {                
                    times: [0, 1],
                    duration: 2,
                    ease: 'easeInOut'
                }
            })

            setAnimatedImg(true)
        }, 500)
    }

    return (
        <div className={styles.container} ref={catalogo}>
            <section className={styles.section1}>

                <motion.div 
                    animate={controlsImg}
                    onViewportEnter={() => !animatedImg && animateImg()}
                    className={styles.imgContainer}
                >
                    <Image 
                        alt='niña fotografía primera comunión' 
                        src={catalogo1} 
                        className={styles.catalogo1} 
                        quality={100} 
                        priority
                    />
                </motion.div>

                <div className={styles.rightSection1}>
                    <h4 className={styles.frase}>Fotos de Comunión <br /> clásicas y naturales</h4>

                    <Image alt='white cruz' src={cruz} className={styles.cruz} quality={100} priority/>

                    <Image alt='white rectangle' src={rectangle} className={styles.rectangle} quality={100} priority/>
                </div>
            </section>
        </div>
    )
}