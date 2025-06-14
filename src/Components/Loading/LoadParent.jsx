import React from 'react'
import LoadChild from './LoadChild'

const LoadParent = () => {
       return (
              <div className='h-0.5 w-full z-10  fixed'>
                     <LoadChild />
              </div>
       )
}

export default LoadParent
