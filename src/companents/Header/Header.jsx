import React from 'react'
import './Header.scss'
import fruitsLogo from '../../asets/img/fruits.png'
function Header() {
  return (
    <div className='Header'>
        <nav className='nav'>
            <ul className='list'>
                <li className='list__item'>
                    <img className='fruitlogo' src={fruitsLogo} alt="" />
                </li>
                <li className='list__item1'>BANANA</li>
                <li className='list__item2'>COCONUT</li>
                <li className='list__item3'>TASTE DRIVE</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header