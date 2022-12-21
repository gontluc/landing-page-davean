import styles from '../../styles/Catalogo.module.css'
import styles1 from '../../styles/Catalogo1.module.css'
import styles2 from '../../styles/Catalogo2.module.css'
import styles3 from '../../styles/Catalogo3.module.css'

import Image from 'next/image'

import catalogo1 from '../../public/images/catalogo1.jpg'
import cruz from '../../public/images/cruz.png'
import rectangle from '../../public/images/rectangle.png'

import catalogo2 from '../../public/images/catalogo2.jpg'

import catalogo3 from '../../public/images/catalogo3.jpg'

import Section4 from './Section4/Section4'
import Section5 from './Section5/Section5'
import Section6 from './Section6/Section6'
import Section7 from './Section7/Section7'

import { motion, useAnimationControls } from "framer-motion"

import { useState } from 'react'

export default function Catalogo({ isMobile, catalogo }) {

    const [animatedImg1, setAnimatedImg1] = useState(false)
    const [animatedImg2, setAnimatedImg2] = useState(false)
    const [animatedImg3, setAnimatedImg3] = useState(false)

    const [animatedSquare1, setAnimatedSquare1] = useState(false)
    const [animatedSquare2, setAnimatedSquare2] = useState(false)
    const [animatedSquare3, setAnimatedSquare3] = useState(false)
    const [animatedSquare4, setAnimatedSquare4] = useState(false)
    const [animatedSquare5, setAnimatedSquare5] = useState(false)
    const [animatedSquare6, setAnimatedSquare6] = useState(false)

    const controlsImg1 = useAnimationControls()
    const controlsImg2 = useAnimationControls()
    const controlsImg3 = useAnimationControls()

    const controlsSquare1 = useAnimationControls()
    const controlsSquare2 = useAnimationControls()
    const controlsSquare3 = useAnimationControls()
    const controlsSquare4 = useAnimationControls()
    const controlsSquare5 = useAnimationControls()
    const controlsSquare6 = useAnimationControls()

    function animateImg(controlsImg, setAnimatedImg) {
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

    function animateImg2(controlsImg, setAnimatedImg) {
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
                transition: {                
                    times: [0, 1],
                    duration: 2,
                    ease: 'easeInOut'
                }
            })

            setAnimatedImg(true)
        }, 500)
    }

    function animateImg3(controlsImg, setAnimatedImg) {
        setTimeout(() => {
            controlsImg.start({
                transform: [
                    'translateY(0px)',
                    'translateY(0px)'
                ],
                opacity: [0, 1],
                transition: {                
                    times: [0, 1],
                    duration: 2,
                    ease: 'easeInOut',
                }
            })

            setAnimatedImg(true)
        }, 500)
    }

    function animateImg4(controlsImg, setAnimatedImg) {
        setTimeout(() => {
            controlsImg.start({
                transform: [
                    'translateY(0px)',
                    'translateY(0px)'
                ],
                opacity: [0, 1],
                transition: {                
                    times: [0, 1],
                    duration: 2,
                    ease: 'easeInOut',
                    delay: 2
                }
            })

            setAnimatedImg(true)
        }, 500)
    }

    function animateSquare(controlsSquare, setAnimatedSquare, index) {
        setTimeout(() => {
            controlsSquare.start({
                transform: [
                    'translateY(0px)',
                    'translateY(0px)'
                ],
                opacity: [0, 1],
                transition: {                
                    times: [0, 1],
                    duration: 1,
                    delay: index * 0.5,
                    ease: 'easeInOut'
                }
            })

            setAnimatedSquare(true)
        }, 1000)
    }

    return (
        <div className={styles.container} ref={catalogo}>
            <section className={styles1.section1}>

                <motion.div 
                    animate={controlsImg1}
                    onViewportEnter={() => !animatedImg1 && animateImg(controlsImg1, setAnimatedImg1)}
                    className={styles1.imgContainer}
                >
                    <Image 
                        alt='niña fotografía primera comunión' 
                        src={catalogo1} 
                        className={styles1.catalogo1} 
                        quality={100} 
                        priority
                    />
                </motion.div>

                <div className={styles1.rightSection1}>
                    <h4 className={styles1.frase}>Fotos de Comunión <br /> clásicas y naturales</h4>

                    <Image alt='white cruz' src={cruz} className={styles1.cruz} quality={100} priority/>

                    <Image alt='white rectangle' src={rectangle} className={styles1.rectangle} quality={100} priority/>
                </div>
            </section>

            <section className={styles2.section2}>

                <div className={styles2.frase}>
                    <p>...la fotografía <br className={styles2.break} /> de Comunión <br /> tradicional con <br className={styles2.break} /> un estilo r</p>
                    <p className={styles2.renovado}>enovado</p>
                </div>

                <motion.div 
                    animate={controlsImg2}
                    onViewportEnter={() => !animatedImg2 && animateImg(controlsImg2, setAnimatedImg2)}
                    className={styles2.imgContainer}
                >
                    <Image 
                        alt='niña saltando fotografía primera comunión' 
                        src={catalogo2} 
                        className={styles2.catalogo2} 
                        quality={100} 
                        priority
                    />
                </motion.div>

                <div className={styles2.squares}>
                    <motion.div 
                        className={`${styles2.square} ${styles2.square1}`}
                        animate={controlsSquare1}
                        onViewportEnter={() => !animatedSquare1 && animateSquare(controlsSquare1, setAnimatedSquare1, 0)}
                    ></motion.div>
                    
                    <motion.div 
                        className={`${styles2.square} ${styles2.square2}`}
                        animate={controlsSquare2}
                        onViewportEnter={() => !animatedSquare2 && animateSquare(controlsSquare2, setAnimatedSquare2, 1)}
                    ></motion.div>

                    <motion.div 
                        className={`${styles2.square} ${styles2.square3}`}
                        animate={controlsSquare3}
                        onViewportEnter={() => !animatedSquare3 && animateSquare(controlsSquare3, setAnimatedSquare3, 2)}
                    ></motion.div>

                    <motion.div 
                        className={`${styles2.square} ${styles2.square4}`}
                        animate={controlsSquare4}
                        onViewportEnter={() => !animatedSquare4 && animateSquare(controlsSquare4, setAnimatedSquare4, 3)}
                    ></motion.div>

                    <motion.div 
                        className={`${styles2.square} ${styles2.square5}`}
                        animate={controlsSquare5}
                        onViewportEnter={() => !animatedSquare5 && animateSquare(controlsSquare5, setAnimatedSquare5, 4)}
                    ></motion.div>

                    <motion.div 
                        className={`${styles2.square} ${styles2.square6}`}
                        animate={controlsSquare6}
                        onViewportEnter={() => !animatedSquare6 && animateSquare(controlsSquare6, setAnimatedSquare6, 5)}
                    ></motion.div>
                </div>

            </section>

            <section className={styles3.section3}>

                <motion.div 
                    animate={controlsImg3}
                    onViewportEnter={() => !animatedImg3 && animateImg2(controlsImg3, setAnimatedImg3)}
                    className={styles3.imgContainer}
                >
                    <Image 
                        alt='niño pescando fotografía primera comunión' 
                        src={catalogo3} 
                        className={styles3.catalogo3} 
                        quality={100} 
                        priority
                    />
                </motion.div>

            </section>

            <Section4 isMobile={isMobile} animateImg3={animateImg3} animateImg4={animateImg4}/>

            <Section5 isMobile={isMobile} animateImg={animateImg} animateImg4={animateImg4}/>

            <Section6 isMobile={isMobile} />

            <Section7 isMobile={isMobile} />
        </div>
    )
}