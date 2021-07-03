import React, { useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import MainNav from '../../components/MainNav'
import ClientNav from './nav/ClientNav'
import NavDropdown from '../../components/NavDropdown'
import ClientDropdown from './nav/ClientDropdown'
import Routes from './Routes'

interface Props { }

const stripePromise = loadStripe('pk_test_51HwlOcE928BzfJPTKw7O7gCpZuG1tDiF6PFhhv70vBHICQF0tmXUjvbbXdRZBpdb45t6prBpgXzfq6jpYSnIRIHG00uIJkQqJT')

const ClientApp: React.FC<Props> = () => {
  const [openDropdown, setOpenDropdown] = useState(false)

  return (
    <Elements stripe={stripePromise}>
      <MainNav>
        <ClientNav setOpenDropdown={setOpenDropdown} />
      </MainNav>

      {openDropdown && (
        <NavDropdown setOpenDropdown={setOpenDropdown}>
          <ClientDropdown setOpenDropdown={setOpenDropdown} />
        </NavDropdown>
      )}

      <div className='page'>
        <Routes />
      </div>
    </Elements>
  )
}

export default ClientApp
