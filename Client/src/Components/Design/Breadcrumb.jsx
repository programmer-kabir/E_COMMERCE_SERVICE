import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Breadcrumb = ({name}) => {
  return (
        <div className="flex items-center pt-2   justify-center">
         <Link to='/' className="flex font-medium gap-1 pr-1">
         <AiOutlineHome size={18}/>
          <p>Home</p>
         </Link>
          <IoIosArrowForward size={20} />
          <p>{name}</p>
        </div>
  )
}

export default Breadcrumb