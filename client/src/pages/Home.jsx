import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { CustomButton } from '../components';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';

const Home = () => {
    const snap = useSnapshot(state);
    return (
        <AnimatePresence>
            {snap.intro && (<motion.section className='home' {...slideAnimation('left')} >
                {/* animation on the home page will slide from left */}
                <motion.header {...slideAnimation("down")}>
                    <img src='./threejs.png'
                        alt='logo'
                        className='w-8 h-8 object-contain'
                    />
                </motion.header>
                <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                       <h1 className='head-text'>
                       Design<br className='xl:block hidden' />Pro .
                       </h1>
                    </motion.div>
                    <motion.div {...headContentAnimation} className='flex flex-col gap-5' >
                        <p className='max-w-md font-normal text-gray-600 text-base'>Create your unique and exclusive shirt with our brand-new 3D customisation tool.
                        <strong>Unleash Your inner Imagination</strong>{" "}
                        and define and showcase your style </p>
                        <CustomButton 
                           type="filled"
                           title="Customize It"
                           handleClick={() => state.intro = false}
                           customStyles = "w-fit px-4 py-2.5 font-bold text-sm"
                        />
                    </motion.div>
                </motion.div>
            </motion.section>)}
        </AnimatePresence>
    )
}

export default Home