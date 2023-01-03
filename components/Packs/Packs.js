import styles from '../../styles/Packs.module.css'

import Image from 'next/image'
import Link from 'next/link'

import packs1black from '../../public/images/packs1black.png'
import packs2black from '../../public/images/packs2black.png'
import packs3black from '../../public/images/packs3black.png'
import packs4black from '../../public/images/packs4black.png'

import packs1blue from '../../public/images/packs1blue.png'
import packs2blue from '../../public/images/packs2blue.png'
import packs3blue from '../../public/images/packs3blue.png'

import goldLines from '../../public/images/goldLines.png'

import arrow from '../../public/images/arrowPacks.png'

import { motion, useAnimationControls } from "framer-motion"

import { useState } from 'react'

export default function Packs({ isMobile, packs }) {

    const [animatedPack1, setAnimatedPack1] = useState(false)
    const [animatedPack2, setAnimatedPack2] = useState(false)
    const [animatedPack3, setAnimatedPack3] = useState(false)

    const controlsPack1 = useAnimationControls()
    const controlsPack2 = useAnimationControls()
    const controlsPack3 = useAnimationControls()

    function animatePack1(controlsPack, setAnimatedPack) {
        setTimeout(() => {
            controlsPack.start({
                transform: [
                    'translateX(-200%)',
                    'translateX(0px)'
                ],
                opacity: [0, 1],
                transition: {                
                    times: [0, 1],
                    duration: 2,
                    ease: 'easeInOut',
                }
            })

            setAnimatedPack(true)
        }, 500)
    }

    function animatePack2(controlsPack, setAnimatedPack) {
        setTimeout(() => {
            controlsPack.start({
                transform: [
                    'translateY(200%)',
                    'translateY(0px)'
                ],
                opacity: [0, 1],
                transition: {                
                    times: [0, 1],
                    duration: 2,
                    ease: 'easeInOut',
                    delay: isMobile ? 0 : 1
                }
            })

            setAnimatedPack(true)
        }, 500)
    }

    function animatePack3(controlsPack, setAnimatedPack) {
        setTimeout(() => {
            controlsPack.start({
                transform: [
                    'translateX(200%)',
                    'translateX(0px)'
                ],
                opacity: [0, 1],
                transition: {                
                    times: [0, 1],
                    duration: 2,
                    ease: 'easeInOut',
                    delay: isMobile ? 0 : 2
                }
            })

            setAnimatedPack(true)
        }, 500)
    }

    return (
        <div className={styles.container} ref={packs}>
            <h1 className={styles.title}>Reserva hoy tu sesión</h1>

            <div className={styles.packs}>
                <motion.div className={`${styles.pack} ${styles.packBasico}`} animate={controlsPack1} onViewportEnter={() => !animatedPack1 && animatePack1(controlsPack1, setAnimatedPack1)}>
                    <div className={styles.packTitle}>Pack Básico</div>

                    <div className={styles.packPrice}>120€</div>

                    <div className={styles.packObjects}>
                        <div className={styles.object}>
                            <Image src={packs1blue} className={styles.objectLogo} alt='logo sesiones' quality={100}/>
                            Sesión en estudio - 2 decorados
                        </div>

                        <div className={styles.lineBlue}></div>

                        <div className={styles.object}>
                            <Image src={packs2blue} className={styles.objectLogo} alt='logo fotos' quality={100}/>
                            10 fotos digitales e impresas en 15x20 cm a elegir
                        </div>
                    </div>

                    <div className={styles.packBtn}>
                        <Link href="https://wa.me/34691041289/?text=Hola!%20Estoy%20interesado/a%20en%20el%20Pack%20Básico%20del%20reportaje%20de%20primera%20Comunión" legacyBehavior>
                            <a target="_blank">
                                RESERVAR SESIÓN
                            </a>
                        </Link>
                    </div>
                </motion.div>

                <motion.div className={`${styles.pack} ${styles.packPro}`} animate={controlsPack2} onViewportEnter={() => !animatedPack2 && animatePack2(controlsPack2, setAnimatedPack2)}>
                    <div className={styles.packTitle}>Pack Pro</div>

                    <div className={styles.packPrice}>290€</div>

                    <div className={styles.packObjects}>
                        <div className={styles.object}>
                            <Image src={packs1blue} className={styles.objectLogo} alt='logo sesiones' quality={100}/>
                            Sesión en estudio - 3 decorados
                        </div>
                        <div className={styles.lineBlue}></div>

                        <div className={styles.object}>
                            <Image src={packs2blue} className={styles.objectLogo} alt='logo fotos' quality={100}/>
                            40 fotos digitales a elegir en un pendrive
                        </div>

                        <div className={styles.lineBlue}></div>

                        <div className={styles.object}>
                            <Image src={packs3blue} className={styles.objectLogo} alt='logo álbum' quality={100}/>
                            Álbum 30x30 cm con 8 láminas
                        </div>
                    </div>

                    <div className={styles.packBtn}>
                        <Link href="https://wa.me/34691041289/?text=Hola!%20Estoy%20interesado/a%20en%20el%20Pack%20Pro%20del%20reportaje%20de%20primera%20Comunión" legacyBehavior>
                            <a target="_blank">
                                RESERVAR SESIÓN
                            </a>
                        </Link>
                    </div>
                </motion.div>

                <motion.div className={`${styles.pack} ${styles.packDeluxe}`} animate={controlsPack3} onViewportEnter={() => !animatedPack3 && animatePack3(controlsPack3, setAnimatedPack3)}>
                    <Image src={goldLines} className={styles.goldLines} alt='lineas doradas' quality={100}/>

                    <div className={styles.packTitle}>Pack Deluxe</div>

                    <div className={styles.packPrice}>420€</div>

                    <div className={styles.packObjects}>
                        <div className={styles.object}>
                            <Image src={packs1black} className={styles.objectLogo} alt='logo sesiones' quality={100}/>
                            Sesión en estudio y exteriores
                        </div>

                        <div className={styles.lineBlue}></div>

                        <div className={styles.object}>
                            <Image src={packs2black} className={styles.objectLogo} alt='logo fotos' quality={100}/>
                            60 fotos digitales a elegir en un pendrive
                        </div>

                        <div className={styles.lineBlue}></div>

                        <div className={styles.object}>
                            <Image src={packs3black} className={styles.objectLogo} alt='logo álbum' quality={100}/>
                            Álbum 30x30 cm con 10 láminas entregado con caja de madera con foto
                        </div>

                        <div className={styles.lineBlue}></div>

                        <div className={styles.object}>
                            <Image src={packs4black} className={styles.objectLogo} alt='logo recordatorias' quality={100}/>
                            10 recordatorias en 10x15 cm de regalo
                        </div>
                    </div>

                    <div className={styles.packBtn}>
                        <Link href="https://wa.me/34691041289/?text=Hola!%20Estoy%20interesado/a%20en%20el%20Pack%20Deluxe%20del%20reportaje%20de%20primera%20Comunión" legacyBehavior>
                            <a target="_blank">
                                RESERVAR SESIÓN
                            </a>
                        </Link>
                    </div>
                </motion.div>
            </div>

            <div className={styles.infoContainer}>
                <Image className={styles.arrow} src={arrow} alt='flecha' quality={100}/>
                <p className={styles.info}>En todos los packs puedes adquirir fotos digitales e impresas adicionales a un precio especial. Las sesiones en exteriores fuera de Sevilla llevan un recargo adicional.</p>
            </div>
        </div>
    )
}