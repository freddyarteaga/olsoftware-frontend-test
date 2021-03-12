import { useContext } from 'react'
import { Context } from '../context'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaUserCircle } from 'react-icons/fa'
import { IoExitOutline } from 'react-icons/io5'


export const Header = () => {
  const { isCollapse, setIsCollapse } = useContext(Context)

  function hdlClickBurger() {
    setIsCollapse(!isCollapse)
  }

  function hdlClickProfile() {
    console.log('hdlClickProfile')
  }

  function hdlClickLogout() {
    console.log('hdlClickLogout')
  }

  return (
    <header className="Header">
      <div className="Header-Side--left">
        <GiHamburgerMenu 
          color="#2644A7" 
          onClick={hdlClickBurger} 
          style={{ marginRight: 15, cursor: 'pointer' }} 
        />
        <h3 className="Header-Title">
          Prueba Front-end
        </h3>
      </div>
      <div className="Header-Side--right">
        <FaUserCircle 
          size={28} 
          color="#2644A7" 
          onClick={hdlClickProfile} 
          style={{ marginRight: 25 }} 
        />
        <span>
          Andrés Felipe Garcia Castro
        </span>
        <IoExitOutline 
          size={24} 
          color="#2644A7" 
          onClick={hdlClickLogout} 
          style={{ marginLeft: 25 }} 
        />
      </div>
    </header>
  )
}
