# testing environment

- Deployed to my vercel account and available at ...

- Once pushed to github, changes should be updated automatically

<br>

# dependencies
 
npm i framer-motion

npm install @vercel/analytics

# Migration from Vercel to Cloudflare (back to vercel now)

https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/

- Delete API route `hello.js` (incompatible with Cloudflare)

- Configure `next.config.js`

- On Cloudflare deployment settings: add an evironmental variable: NODE_VERSION with value of 14

preguntas:

/* <div className={styles.container} ref={preguntas}>
            
            <h1 className={styles.title}>Preguntas Frecuentes</h1>

            <div className={styles.preguntasContainer}>
                <div className={styles.pregunta} onClick={() => toggleAnswer(answer1, setAnswer1)}>
                    <div>
                        <div className={styles.question}>?</div>
                        Dónde se realiza las sesión de fotos?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} quality={100} style={{ transform: answer1 ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
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
                            height: isMobile ? 200 : 120,
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
                        <p>La sesión fotográfica se realizará en <strong>exteriores</strong> en un lugar acordado junto con los padres o en nuestro <strong>estudio fotográfico</strong>, según el pack elegido.</p>
                    </motion.div>)}
                </AnimatePresence>
                
                <div className={styles.pregunta} onClick={() => toggleAnswer(answer2, setAnswer2)}>
                    <div>
                        <div className={styles.question}>?</div>
                        Con cuánta antelación hay que hacer las fotos?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} quality={100} style={{ transform: answer2 ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
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
                            height: isMobile ? 200 : 300,
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
                        <p>Lo ideal es hacerla 4-5 semanas antes del día de la Comunión, para que no haya problemas en los plazos de entrega de las impresiones. Se podrían hacer con menos tiempo aunque estaremos más justos para imprimir y puede que productos como el álbum no lleguen a tiempo.
                        <br /><br />
                        Si optas por solo realizar el reportaje únicamente con entrega digital el plazo se reduce ya que no habría que imprimir nada.
                        </p>
                    </motion.div>)}
                </AnimatePresence>

                <div className={styles.pregunta} onClick={() => toggleAnswer(answer3, setAnswer3)}>
                    <div>
                        <div className={styles.question}>?</div>
                        Solo se hacen fotos al niño/niña?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} quality={100} style={{ transform: answer3 ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
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
                        <p>Eso depende de vosotros. Nos gusta que la familia participe en la sesión también. Así que Padres, hermanos, abuelos que quiera hacerse fotos con el o la protagonista podrá hacérselas.</p>
                    </motion.div>)}
                </AnimatePresence>

                <div className={styles.pregunta} onClick={() => toggleAnswer(answer4, setAnswer4)}>
                    <div>
                        <div className={styles.question}>?</div>
                        Qué tipo de álbum realizáis?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} quality={100} style={{ transform: answer4 ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
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
                            height: isMobile ? 200 : 330,
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
                        <p>
                            Nuestros álbumes son personalizados, disponemos de una amplia variedad de motivos (liso, topos, rayas, triángulos, flores, hojas o cuadros)  y colores (verde mint, coral, gris y crudo) para las tapas. Pudiendo combinar varios motivos para lograr un álbum único. Portada lisa, linea de texto grabada, diseño grabado, ventana con foto, ventana foto + texto
                            <br /><br />
                            Todo con una cuidada fabricación artesanal y materiales de calidad para conservar esos recuerdos de la mejor manera.
                        </p>
                    </motion.div>)}
                </AnimatePresence>

                <div className={styles.pregunta} onClick={() => toggleAnswer(answer5, setAnswer5)}>
                    <div>
                        <div className={styles.question}>?</div>
                        Cómo se entregan las fotografías?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} quality={100} style={{ transform: answer5 ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
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
                            height: isMobile ? 200 : 260,
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
                        <p>
                        El formato de las fotografías del reportaje de comunión se entregan en formato digital (jpeg) en alta resolución y sin ningún tipo de marca de agua.
                        <br /><br />
                        La entrega se realiza mediante nuestro servidor privado, desde el que podréis ver, descargar y compartir las fotografías con quien queráis. Según el pack elegido puede incluir uno de nuestros pendrive para guardar vuestras fotografías.
                        </p>
                    </motion.div>)}
                </AnimatePresence>

                <div className={styles.pregunta} onClick={() => toggleAnswer(answer6, setAnswer6)}>
                    <div>
                        <div className={styles.question}>?</div>
                        Cuándo tendré las fotografías?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} quality={100} style={{ transform: answer6 ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
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
                            height: isMobile ? 200 : 220,
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
                        <p>
                        Recibiréis las fotografías del <strong>reportaje de comunión</strong> en un plazo aproximado de 15 días, dependiendo del volumen de trabajo de esa época. 
                        <br /><br />
                        Sabemos que estáis deseando ver las fotos, pero es necesario dedicarles el tiempo y el mimo que se merecen para entregaros unas fotografías que os encanten.
                        </p>
                    </motion.div>)}
                </AnimatePresence>

                <div className={styles.pregunta} onClick={() => toggleAnswer(answer7, setAnswer7)}>
                    <div>
                        <div className={styles.question}>?</div>
                        Con cuánta antelación hay que reservar?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} quality={100} style={{ transform: answer7 ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
                </div>
                
                <AnimatePresence mode="wait">
                    {answer7 && (<motion.div
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
                            height: isMobile ? 200 : 290,
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
                        <p>
                            Lo que recomendamos es reservar en cuanto lo tengáis claro para evitar quedaros sin fecha. Especialmente en el caso del <strong>reportaje fotográfico</strong> el día de la Comunión ya que suelen concentrarse todas en unos días muy concretos.
                            <br /><br />
                            Del mismo modo solo realizamos un número limitado de <strong>sesiones de pre-comunion</strong> al año, empezando este tipo de sesiones con la llegada del buen tiempo lo que nos permite hacer sesiones también en exteriores.
                        </p>
                    </motion.div>)}
                </AnimatePresence>

                <div className={styles.pregunta} onClick={() => toggleAnswer(answer8, setAnswer8)}>
                    <div>
                        <div className={styles.question}>?</div>
                        Cómo realizo el pago?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} quality={100} style={{ transform: answer8 ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
                </div>
                
                <AnimatePresence mode="wait">
                    {answer8 && (<motion.div
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
                            height: isMobile ? 200 : 110,
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
                        <p>
                            Al realizar la reserva se realizará un pago inicial según el pack elegido  y el resto se abonara el día de la sesión.
                        </p>
                    </motion.div>)}
                </AnimatePresence>

                <div className={styles.pregunta} onClick={() => toggleAnswer(answer9, setAnswer9)}>
                    <div>
                        <div className={styles.question}>?</div>
                        Cómo reservar fecha?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} quality={100} style={{ transform: answer9 ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
                </div>
                
                <AnimatePresence mode="wait">
                    {answer9 && (<motion.div
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
                            height: isMobile ? 200 : 150,
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
                        <p>
                            Muy sencillo, clickas en el botón &#34;Reservar Sesión&#34; en el pack que hayas elegido y te llevará a abrir la conversación conmigo por <strong>WhatsApp</strong> donde fijaremos los detalles. También puedes llamarme directamente al teléfono: <strong>691 041 289</strong>
                        </p>
                    </motion.div>)}
                </AnimatePresence>

                <div className={styles.pregunta} onClick={() => toggleAnswer(answer10, setAnswer10)}>
                    <div>
                        <div className={styles.question}>?</div>
                        Publicas nuestras fotos en tu web?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} quality={100} style={{ transform: answer10 ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
                </div>
                
                <AnimatePresence mode="wait">
                    {answer10 && (<motion.div
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
                            height: isMobile ? 200 : 210,
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
                        <p>
                            <p>
                                Nos encantaría, ya que además es la única forma de poder mostrar nuestro trabajo.
                                <br /><br />
                                Pero esta decisión será vuestra. Las condiciones de la sesión se recogen en el acuerdo que firmamos ambas partes, en el cual hay una casilla que podéis marcar para autorizarnos o no a usar las fotografías en nuestra web y porfolio profesional.
                            </p>
                        </p>
                    </motion.div>)}
                </AnimatePresence>
            </div>

        </div> */