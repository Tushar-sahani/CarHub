'use client';
import { CustomButtonPorps } from '@types';
import React from 'react'

const CustomButton = ({title,containerStyles,handleClick,btnType}:CustomButtonPorps) => {

  return (
    <div>
        <button
        disabled={false}
        type={btnType || 'button'}
        className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
        onClick={handleClick}>
            <span className={`flex-1`}>{title}</span>
        </button>
    </div>
  )
}

export default CustomButton 