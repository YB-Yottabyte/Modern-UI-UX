import React from 'react';
import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row items-start`}>
        <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500'>Get 
          </span>
        </p>
        <img src={arrowUp} alt='arrow-up' className='w-[23px] h-[23px] object-contain' />

      </div>
      <p className='font-poppins font-medium text-[18px] leading-[23px]'>
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500'>Started 
        </span>
      </p>
    </div>
  </div>
)


export default GetStarted