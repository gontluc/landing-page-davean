import styles from '../../styles/Preguntas.module.css'

import Image from 'next/image'

import arrow from '../../public/images/arrowDown.png'

import { useState } from 'react'

/* import { motion, AnimatePresence } from "framer-motion" */

export default function Preguntas({ isMobile, preguntas }) {

    const [answer1, setAnswer1] = useState(false)
    const [answer2, setAnswer2] = useState(false)
    const [answer3, setAnswer3] = useState(false)
    const [answer4, setAnswer4] = useState(false)
    const [answer5, setAnswer5] = useState(false)
    const [answer6, setAnswer6] = useState(false)
    const [answer7, setAnswer7] = useState(false)
    const [answer8, setAnswer8] = useState(false)
    const [answer9, setAnswer9] = useState(false)
    const [answer10, setAnswer10] = useState(false)

    function toggleAnswer(answer, setAnswer) {
        if(!answer) {
            setAnswer1(false)
            setAnswer2(false)
            setAnswer3(false)
            setAnswer4(false)
            setAnswer5(false)
            setAnswer6(false)
            setAnswer7(false)
            setAnswer8(false)
            setAnswer9(false)
            setAnswer10(false)
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
                        Dónde se realiza las sesión de fotos?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} quality={100} style={{ transform: answer1 ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
                </div>

                {answer1 && <div className={styles.respuesta}>
                    <p>La sesión fotográfica se realizará en <strong>exteriores</strong> en un lugar acordado junto con los padres o en nuestro <strong>estudio fotográfico</strong>, según el pack elegido.</p>
                </div> }

                <div className={styles.pregunta} onClick={() => toggleAnswer(answer2, setAnswer2)}>
                    <div>
                        Con cuánta antelación hay que hacer las fotos?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} quality={100} style={{ transform: answer2 ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
                </div>

                {answer2 && <div className={styles.respuesta}>
                    <p>Lo ideal es hacerla 4-5 semanas antes del día de la Comunión, para que no haya problemas en los plazos de entrega de las impresiones. Se podrían hacer con menos tiempo aunque estaremos más justos para imprimir y puede que productos como el álbum no lleguen a tiempo.
                    <br /><br />
                    Si optas por solo realizar el reportaje únicamente con entrega digital el plazo se reduce ya que no habría que imprimir nada.
                    </p>
                </div> }

                <div className={styles.pregunta} onClick={() => toggleAnswer(answer3, setAnswer3)}>
                    <div>
                        Solo se hacen fotos al niño/niña?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} quality={100} style={{ transform: answer3 ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
                </div>

                {answer3 && <div className={styles.respuesta}>
                    <p>Eso depende de vosotros. Nos gusta que la familia participe en la sesión también. Así que Padres, hermanos, abuelos que quiera hacerse fotos con el o la protagonista podrá hacérselas.</p>
                </div> }
                
                <div className={styles.pregunta} onClick={() => toggleAnswer(answer4, setAnswer4)}>
                    <div>
                        Qué tipo de álbum realizáis?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} quality={100} style={{ transform: answer4 ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
                </div>

                {answer4 && <div className={styles.respuesta}>
                    <p>
                        Nuestros álbumes son personalizados, disponemos de una amplia variedad de motivos (liso, topos, rayas, triángulos, flores, hojas o cuadros)  y colores (verde mint, coral, gris y crudo) para las tapas. Pudiendo combinar varios motivos para lograr un álbum único. Portada lisa, linea de texto grabada, diseño grabado, ventana con foto, ventana foto + texto
                        <br /><br />
                        Todo con una cuidada fabricación artesanal y materiales de calidad para conservar esos recuerdos de la mejor manera.
                    </p>
                </div> }

                <div className={styles.pregunta} onClick={() => toggleAnswer(answer5, setAnswer5)}>
                    <div>
                        Cómo se entregan las fotografías?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} quality={100} style={{ transform: answer5 ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
                </div>

                {answer5 && <div className={styles.respuesta}>
                    <p>
                    El formato de las fotografías del reportaje de comunión se entregan en formato digital (jpeg) en alta resolución y sin ningún tipo de marca de agua.
                    <br /><br />
                    La entrega se realiza mediante nuestro servidor privado, desde el que podréis ver, descargar y compartir las fotografías con quien queráis. Según el pack elegido puede incluir uno de nuestros pendrive para guardar vuestras fotografías.
                    </p>
                </div> }

                <div className={styles.pregunta} onClick={() => toggleAnswer(answer6, setAnswer6)}>
                    <div>
                        Cuándo tendré las fotografías?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} quality={100} style={{ transform: answer6 ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
                </div>

                {answer6 && <div className={styles.respuesta}>
                    <p>
                    Recibiréis las fotografías del <strong>reportaje de comunión</strong> en un plazo aproximado de 15 días, dependiendo del volumen de trabajo de esa época. 
                    <br /><br />
                    Sabemos que estáis deseando ver las fotos, pero es necesario dedicarles el tiempo y el mimo que se merecen para entregaros unas fotografías que os encanten.
                    </p>
                </div> }

                <div className={styles.pregunta} onClick={() => toggleAnswer(answer7, setAnswer7)}>
                    <div>
                        Con cuánta antelación hay que reservar?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} quality={100} style={{ transform: answer7 ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
                </div>

                {answer7 && <div className={styles.respuesta}>
                    <p>
                        Lo que recomendamos es reservar en cuanto lo tengáis claro para evitar quedaros sin fecha. Especialmente en el caso del <strong>reportaje fotográfico</strong> el día de la Comunión ya que suelen concentrarse todas en unos días muy concretos.
                        <br /><br />
                        Del mismo modo solo realizamos un número limitado de <strong>sesiones de pre-comunion</strong> al año, empezando este tipo de sesiones con la llegada del buen tiempo lo que nos permite hacer sesiones también en exteriores.
                    </p>
                </div> }

                <div className={styles.pregunta} onClick={() => toggleAnswer(answer8, setAnswer8)}>
                    <div>
                        Cómo realizo el pago?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} quality={100} style={{ transform: answer8 ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
                </div>

                {answer8 && <div className={styles.respuesta}>
                    <p>
                        Al realizar la reserva se realizará un pago inicial según el pack elegido  y el resto se abonara el día de la sesión.
                    </p>
                </div> }

                <div className={styles.pregunta} onClick={() => toggleAnswer(answer9, setAnswer9)}>
                    <div>
                        Cómo reservar fecha?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} quality={100} style={{ transform: answer9 ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
                </div>

                {answer9 && <div className={styles.respuesta}>
                     <p>
                        Muy sencillo, clickas en el botón &#34;Reservar Sesión&#34; en el pack que hayas elegido y te llevará a abrir la conversación conmigo por <strong>WhatsApp</strong> donde fijaremos los detalles. También puedes llamarme directamente al teléfono: {/* <strong>691 041 289</strong> */}
                    </p>
                </div> }

                <div className={styles.pregunta} onClick={() => toggleAnswer(answer10, setAnswer10)}>
                    <div>
                        Publicas nuestras fotos en tu web?
                    </div>

                    <Image src={arrow} alt='seleccionar pregunta' className={styles.arrow} quality={100} style={{ transform: answer10 ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
                </div>

                {answer10 && <div className={styles.respuesta}>
                    <p>
                        Nos encantaría, ya que además es la única forma de poder mostrar nuestro trabajo.
                        <br /><br />
                        Pero esta decisión será vuestra. Las condiciones de la sesión se recogen en el acuerdo que firmamos ambas partes, en el cual hay una casilla que podéis marcar para autorizarnos o no a usar las fotografías en nuestra web y porfolio profesional.
                    </p>
                </div> }

            </div>

        </div>
        )
}