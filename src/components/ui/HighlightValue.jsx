import React from 'react'
import { cn } from '../../utils/className';

const HighlightValue = ({ count, growth, loss, Classname}) => {
  return (
    <div className='flex space-x-2 md:space-x-5'>
        <strong className={cn(`text-2xl lg:text-4xl text-primary ${Classname}`)}>{count}</strong>
        <div className="flex flex-col justify-center text-sm text-gray-400">
            <span className='text-xs font-bold text-green'>{growth}</span>
            <span className='text-xs font-bold text-secondary'>{loss}</span>
        </div>
    </div>
  )
}

export default HighlightValue
