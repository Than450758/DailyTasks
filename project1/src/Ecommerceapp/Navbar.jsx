import { faSearch,faChair, faHeart,faList,faShoppingCart,faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>

          <div className='navbar-top flex items-center justify-center bg-[#272343] h-[45px] w-full'>
          
            <div className='lg:container flex justify-between items-center'>
              <p className='flex items-center gap-2 text-sm font-normal text-white capitalize '>Free on all orders over $80</p>
              <div className='navbar-top-right flex items-center gap-6'>
                <select defaultValue="Server location" className='bg-none h-[30px] w-[70px] text-sm font-normal capitalize text-white'>
                  <option>eng</option>
                  <option>bangla</option>
                </select>
                <button><Link className="text-sm text-white font-normal capitalize">Faqs</Link></button>
                <button><Link className="flex items-centertext-sm text-white font-normal capitalize">need help</Link></button>

              </div>


            </div>
          
          
          
          
          
        </div>


    
<div className='navbar-middle flex items-center justify-center bg-[#f0f2f3] w-full h-[84px'>

          <div className='lg:container grid grid-cols-3 items-center'>


            <div className='logo-wrapper'>
              <Link to='/' className='text-2xl text-black font-medium capitalize flex items-center gap-2'><FontAwesomeIcon icon={faChair} size='2rem' color='#029fac'/>Comforty
              </Link>
            </div>
            <div className='search-box'>
              <form action="#" className='max-w-[400px] h-[44px] relative'>
                <input type="text" placeholder='Search hear...' className='max-w-[443px] w-full h-full bg-white rounded-lg pl-4'/>

                <button className='absolute to-50% right-4 translate-y-1/2'><FontAwesomeIcon icon={faSearch} size='22px' color='#272324'></FontAwesomeIcon></button>
              </form>
            </div>


            {/*nav middle right*/}
            <div className='navbar-middle-right flex items-center gap-6'>
              <button className='btn capitalize'>
                <FontAwesomeIcon icon={faShoppingCart}/>Cart 2
              </button>

              <button className='btn capitalize'>
                <FontAwesomeIcon icon={faHeart}/></button>
              <div className='dropdown'>
                <div tabIndex={0} role='button' className='btn m-1'><FontAwesomeIcon icon={faUser}/></div>
                <ul tabIndex={0} className='dropdown-content menu bg-amber-100 rounded-box z-1 w-52 p-2 shadow-sm'>
                  <li><a><Link>Account</Link></a></li>
                  <li><a><Link>Logout</Link></a></li>

                </ul>
              </div>
            
            </div>

          </div>



        </div>

      <div className='navbar-bottom flex items-center justify-center w-full h-[75px] bg-white border-b-[1px] border-[#ele3e5'>

          <div className='lg:container flex items-center justify-between'>
            <div className='navbar-button-right flex items-center gap-8'>
              <div className='dropdown dropdown-start'>
                <div tabIndex={0} role='button' className='btn m-1 flex items-center gap-5 capitalize'>
                  <FontAwesomeIcon icon={faList}/>all categories</div>
                  
                </div>
                <nav className='flex items-center gap-8'>
                  <NavLink className='text-sm text-[#1b0ed6] font-medium capitalize'>Shop</NavLink>
                  <NavLink className='text-sm text-[#636270] font-medium capitalize'>Products</NavLink>
                  <NavLink className='text-sm text-[#636270] font-medium capitalize'>Pages</NavLink>
                  <NavLink className='text-sm text-[#636270] font-medium capitalize'>About</NavLink>


              </nav>

              </div>

              



          </div>
            <p className='text-sm text-[#636270] font-normal capitalize'>contact<span className='text-[#272343]'>435-43-43534</span></p>
          </div>

      </div>
                
    
  )
}
