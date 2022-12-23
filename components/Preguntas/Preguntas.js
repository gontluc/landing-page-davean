import styles from '../../styles/Preguntas.module.css'

import Image from 'next/image'

import arrow from '../../public/images/arrowDown.png'

import { useState } from 'react'

import { motion, AnimatePresence } from "framer-motion"

export default function Preguntas({ isMobile, preguntas }) {

    const [answer1, setAnswer1] = useState(false)
    const [answer2, setAnswer2] = useState(false)
    const [answer3, setAnswer3] = useState(false)
    const [answer4, setAnswer4] = useState(false)
    const [answer5, setAnswer5] = useState(false)
    const [answer6, setAnswer6] = useState(false)

    function toggleAnswer(answer, setAnswer) {
        if(!answer) {
            setAnswer1(false)
            setAnswer2(false)
            setAnswer3(false)
            setAnswer4(false)
            setAnswer5(false)
            setAnswer6(false)
            setAnswer(!answer)
        } else {
            setAnswer(!answer)
        }
    }

    return (
        <div className={styles.container} ref={preguntas}>
            
            <h1 className={styles.title}>Preguntas Frecuentes</h1>

            <div className={styles.preguntasContainer}>
                <div className={styles.pregunta} onClick={() => toggleAnswer(answer1, setAnswer1)}>
                    <div>
                        <div className={styles.question}>?</div>
                        Cómo puedo reservar?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} priority quality={100} style={{ transform: answer1 ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
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
                            height: isMobile ? 200 : 140,
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
                
                <div className={styles.pregunta} onClick={() => toggleAnswer(answer2, setAnswer2)}>
                    <div>
                        <div className={styles.question}>?</div>
                        Qué tengo que llevar el día de la sesión?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} priority quality={100} style={{ transform: answer2 ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
                </div>
                
                <AnimatePresence mode="wait">
                    {answer2 && (<motion.div
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
                            height: isMobile ? 200 : 140,
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

                <div className={styles.pregunta} onClick={() => toggleAnswer(answer3, setAnswer3)}>
                    <div>
                        <div className={styles.question}>?</div>
                        Cómo seleccionar las fotos?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} priority quality={100} style={{ transform: answer3 ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
                </div>
                
                <AnimatePresence mode="wait">
                    {answer3 && (<motion.div
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
                            height: isMobile ? 200 : 140,
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

                <div className={styles.pregunta} onClick={() => toggleAnswer(answer4, setAnswer4)}>
                    <div>
                        <div className={styles.question}>?</div>
                        Cómo van las fotos con hermanos?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} priority quality={100} style={{ transform: answer4 ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
                </div>
                
                <AnimatePresence mode="wait">
                    {answer4 && (<motion.div
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
                            height: isMobile ? 200 : 140,
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

                <div className={styles.pregunta} onClick={() => toggleAnswer(answer5, setAnswer5)}>
                    <div>
                        <div className={styles.question}>?</div>
                        Cómo van las fotos con hermanos?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} priority quality={100} style={{ transform: answer5 ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
                </div>
                
                <AnimatePresence mode="wait">
                    {answer5 && (<motion.div
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
                            height: isMobile ? 200 : 140,
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

                <div className={styles.pregunta} onClick={() => toggleAnswer(answer6, setAnswer6)}>
                    <div>
                        <div className={styles.question}>?</div>
                        Cómo van las fotos con hermanos?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} priority quality={100} style={{ transform: answer6 ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
                </div>
                
                <AnimatePresence mode="wait">
                    {answer6 && (<motion.div
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
                            height: isMobile ? 200 : 140,
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
            </div>

        </div>
    )
}