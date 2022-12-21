import styles from '../../styles/Preguntas.module.css'

import Image from 'next/image'

import arrow from '../../public/images/arrowDown.png'

import { useState } from 'react'

import { motion, AnimatePresence } from "framer-motion"

export default function Preguntas({ preguntas }) {

    const [answer1, setAnswer1] = useState(false)

    return (
        <div className={styles.container} ref={preguntas}>
            
            <h1 className={styles.title}>Preguntas Frecuentes</h1>

            <div className={styles.preguntasContainer}>
                <div className={styles.pregunta} onClick={() => setAnswer1(!answer1)}>
                    <div>
                        <div className={styles.question}>?</div>
                        Cómo puedo reservar?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} priority quality={100}/>
                </div>

                <AnimatePresence mode="wait">
                    {answer1 && (<motion.div
                        className={styles.respuesta}
                        initial={{
                            height: 0,
                            transition: {
                                height: {
                                    duration: .5,
                                },
                            }
                        }}
                        animate={{
                            height: 140,
                            transition: {
                                duration: .5,
                                ease: 'easeInOut'
                            }
                        }}
                        exit={{
                            height: 0,
                            transition: {
                                height: {
                                    duration: .5,
                                },
                            }
                        }}
                    >
                        Sin ningún problema, no hay suplemento por hacer fotos con hermanos. Lo único que necesitamos es, que nos lo comuniquéis con antelación para así poder programar mejor los tiempos de la sesión.
                    </motion.div>)}
                </AnimatePresence>
                
                <div className={styles.pregunta}>
                    <div>
                        <div className={styles.question}>?</div>
                        Qué tengo que llevar el día de la sesión?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} priority quality={100}/>
                </div>
                <div className={styles.respuesta}>respuesta</div>

                <div className={styles.pregunta}>
                    <div>
                        <div className={styles.question}>?</div>
                        Cómo seleccionar las fotos?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} priority quality={100}/>
                </div>
                <div className={styles.respuesta}>respuesta</div>

                <div className={styles.pregunta}>
                    <div>
                        <div className={styles.question}>?</div>
                        Cómo van las fotos con hermanos?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} priority quality={100}/>
                </div>
                <div className={styles.respuesta}>respuesta</div>

                <div className={styles.pregunta}>
                    <div>
                        <div className={styles.question}>?</div>
                        Cómo van las fotos con hermanos?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} priority quality={100}/>
                </div>
                <div className={styles.respuesta}>respuesta</div>

                <div className={styles.pregunta}>
                    <div>
                        <div className={styles.question}>?</div>
                        Cómo van las fotos con hermanos?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} priority quality={100}/>
                </div>
                <div className={styles.respuesta}>respuesta</div>
            </div>

        </div>
    )
}