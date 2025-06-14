import React from 'react'
import Herotxt from './Herotxt'
import Headingtxt from './Headingtxt'

const CentreTxt = () => {
       return (
              <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center'>
                     <Herotxt />
                     <Headingtxt />
              </div>
       )
}

export default CentreTxt
