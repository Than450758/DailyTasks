import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faVuejs,
  faAngular,
  faPython,
  faWordpress,
  faLess
} from "@fortawesome/free-brands-svg-icons";
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons/faCloudUpload';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
    export default function Docu1() {
  return (
    
      
      <div className='container flex flex-col w-[600px] justify-items-end bg-teal-50'>
       <div className='col flex flex-row justify-between'>
        <div className='col1 '>
            
            <div className='ti1 align flex flex-row '>
                <p className='mt-2 pl-2'>this is the standstsd</p>
                <FontAwesomeIcon icon={faRocket} className='text-2xl pl-6 mt-2.5' />
            </div>
            <input type="text" className='bg-blue-200 rounded-2xl p-3 h-9 w-3xs ' placeholder='dksifionvii'></input>
            <input type="checkbox"></input>
        </div>
        <div className='col2 flex flex-col'>
            
                <div className='ti1 align flex flex-row justify-center'>
                <p className='mt-2 pl-2'>this is the standstsd</p>
                <FontAwesomeIcon icon={faRocket} className='text-2xl pl-6 mt-2.5' />
            </div>
            <input type="text" className='bg-amber-200'></input>
           
            
        </div>

      </div>

      </div>
  )
}
