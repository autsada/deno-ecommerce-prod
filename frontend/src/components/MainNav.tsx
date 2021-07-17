import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from './Button'

interface Props { }

const MainNav: React.FC<Props> = ({ children }) => {
  return (
    <header className='head'>
      <div className='head__section'>
        <div className='head__logo'>
          <NavLink to='/'>
            <h1 className='header header--logo'>azisso</h1>
          </NavLink>
        </div>

        <div className='head__search'>
          <div className='search-input'>
            <input type='text' className='search' placeholder='Search' />

            <FontAwesomeIcon
              icon={['fas', 'times']}
              size='lg'
              color='grey'
              className='clear-search'
            />
          </div>
          <Button className='btn--search' height='4rem'>SEARCH</Button>
        </div>

        <nav className='head__navbar'>{children}</nav>
      </div>
    </header>
  )
}

export default MainNav
