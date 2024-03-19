"use client";

import { motion } from "framer-motion";
import { SlSettings } from "react-icons/sl";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      className='w-full h-full bg-gray-50 top-0 z-[100] left-0 fixed flex items-center justify-center'
    >
      <div className='w-[298px] h-[100px] bg-gray-50 relative flex items-center'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className='absolute font-bold  -top-20 w-full flex items-center justify-start'
        >
          <SlSettings
            size={40}
            className='mr-5 animate-spin flex-shrink-0'
          ></SlSettings>
          <p className='text-lg flex-shrink-0 mr-3'>Launching soon</p>
          <div className='flex items-baseline justify-around w-full'>
            <motion.div
              className='w-2 h-2 bg-black rounded-full  '
            ></motion.div>
            <motion.div className='w-2 h-2 bg-black rounded-full  '></motion.div>
            <motion.div className='w-2 h-2 bg-black rounded-full  -mr-5'></motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 100 }}
          transition={{ duration: 0.11, delay: 0 }}
          className='absolute bg-black h-[100px] w-[6px] left-0 top-0'
        ></motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 50 }}
          transition={{ duration: 0.11, delay: 0.11 }}
          className='absolute bottom-0 bg-black h-[6px] w-[50px]  left-[6px]'
        ></motion.div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 100 }}
          transition={{ duration: 0.11, delay: 0.22 }}
          className='absolute left-[56px] bg-black h-[100px] w-[6px] rotate-180'
        ></motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 35 }}
          transition={{ duration: 0.11, delay: 0.33 }}
          className='absolute top-0 bg-black h-[6px] w-[30px]  left-[62px]'
        ></motion.div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 50 }}
          transition={{ duration: 0.11, delay: 0.44 }}
          className='absolute left-[92px] top-0 bg-black h-[50px] w-[6px]'
        ></motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 35 }}
          transition={{ duration: 0.11, delay: 0.55 }}
          className='absolute top-[44px] bg-black h-[6px] w-[30px]  left-[98px]'
        ></motion.div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 50 }}
          transition={{ duration: 0.11, delay: 0.66 }}
          className='absolute left-[128px] top-0 bg-black h-[50px] w-[6px] rotate-180'
        ></motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 35 }}
          transition={{ duration: 0.11, delay: 0.77 }}
          className='absolute top-0 bg-black h-[6px] w-[30px]  left-[134px]'
        ></motion.div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 100 }}
          transition={{ duration: 0.11, delay: 0.88 }}
          className='absolute bg-black h-[100px] w-[6px] left-[164px] top-0'
        ></motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 25 }}
          transition={{ duration: 0.11, delay: 0.99 }}
          className='absolute bottom-0 bg-black h-[6px] w-[20px]  left-[170px]'
        ></motion.div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 100 }}
          transition={{ duration: 0.11, delay: 1.1 }}
          className='absolute bg-black h-[100px] w-[6px] left-[190px] top-0 rotate-180'
        ></motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 35 }}
          transition={{ duration: 0.11, delay: 1.21 }}
          className='absolute top-0 bg-black h-[6px] w-[30px]  left-[196px]'
        ></motion.div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 50 }}
          transition={{ duration: 0.11, delay: 1.32 }}
          className='absolute left-[226px] top-0 bg-black h-[50px] w-[6px]'
        ></motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 35 }}
          transition={{ duration: 0.11, delay: 1.43 }}
          className='absolute top-[44px] bg-black h-[6px] w-[30px]  left-[232px]'
        ></motion.div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 56 }}
          transition={{ duration: 0.11, delay: 1.54 }}
          className='absolute left-[262px] top-[44px] bg-black h-[56px] w-[6px]'
        ></motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 35 }}
          transition={{ duration: 0.11, delay: 1.65 }}
          className='absolute bottom-0 bg-black h-[6px] w-[30px]  left-[268px]'
        ></motion.div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 100 }}
          transition={{ duration: 0.11, delay: 1.76 }}
          className='absolute bg-black h-[100px] w-[6px] left-[298px] top-0 rotate-180'
        ></motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 3 }}
          className='absolute font-bold opacity-60 -bottom-16 w-full flex items-center justify-center'
        >
          Nikola Marović
        </motion.div>
      </div>
    </motion.div>
  );
}
