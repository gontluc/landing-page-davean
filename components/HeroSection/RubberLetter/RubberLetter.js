import styles from '../../../styles/RubberLetter.module.css'

import { motion, useAnimationControls } from "framer-motion"

import { useEffect/* , useState */ } from 'react'


export default function RubberLetter({ letter, index, classLetter }) {

    /* const [isPlaying, setIsPlaying] = useState(false) */

    const controls = useAnimationControls()

    function getLetterClass() {
        switch (classLetter) {
            case 'mi':
                return styles.miLetter
            case 'primera':
                return styles.primeraLetter
            case 'comunion':
                return styles.comunionLetter
            case 'frase':
                return styles.frase
            default:
                return new Error()
       }
    }

    function delayWord() {
        switch (classLetter) {
            case 'primera':
                return 0.4
            case 'comunion':
                return 1.8
            default:
                return 0
       }
    }

    useEffect(() => {
        controls.start({
            opacity: [0, .4, .6, .7, .8, 1],
            /* transform: [
                'scale3d(1, 1, 1)',
                'scale3d(1.4, .55, 1)',
                'scale3d(.75, 1.25, 1)',
                'scale3d(1.25, .85, 1)',
                'scale3d(.9, 1.05, 1)',
                'scale3d(1, 1, 1)'
            ], */
            transition: {
                delay: index * 0.2 + delayWord(),
                times: [0, .4, .6, .7, .8, .9]
            }
        })
    }, [])

    /* const rubberBand = () => {
        controls.start({
            transform: [
                'scale3d(1, 1, 1)',
                'scale3d(1.4, .55, 1)',
                'scale3d(.75, 1.25, 1)',
                'scale3d(1.25, .85, 1)',
                'scale3d(.9, 1.05, 1)',
                'scale3d(1, 1, 1)'
            ],
            transition: {
                times: [0, .4, .6, .7, .8, .9]
            }
        })

        setIsPlaying(true)
    } */

    return (
        <motion.h1 
            className={getLetterClass()}
            animate={controls}
            style={{ fontWeight: index > 10 ? 'bold' : '100' }}
            /* onMouseEnter={() => !isPlaying && rubberBand()} */
            /* onAnimationComplete={() => setIsPlaying(false)} */
        >
            {letter === " " ? "\u00A0" : letter }
        </motion.h1>
    )
}