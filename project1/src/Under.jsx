import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Under() {
  return (
    <div className='flex'>
        <div className='w-[800px] bg-amber-50 h-40 p-4'>
            <p className='p-9 text-cyan-50'> sfioe jfsf fkljoid fieof leofn jfso dfjsj jfpfj jpsjfejf</p>
        </div>
        <div className='w-[400px] bg-blue-50 pt-15 p-3'>
            <div className='box-border flex mt-2 items-center rounded-3xl border-2 justify-center border-amber-500'>
                <p>fkjeiggk</p>
            <FontAwesomeIcon icon={faSearch}  />
            </div>
        </div>
        
        <div className='w-[400px] bg-amber-50'>

        </div>
    </div>
  )
}
