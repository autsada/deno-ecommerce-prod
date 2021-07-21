import React from 'react'

import Button from '../../../components/Button'
import Spinner from '../../../components/Spinner'
import { useAppDispatch } from '../../../store/store'
import { setModal } from '../../../store/slices/modalSlice'
import { useAuth } from '../../../hooks/useAuth'

interface Props { }

const PublicNav: React.FC<Props> = () => {
  const dispatch = useAppDispatch()
  const { isLoading } = useAuth()

  return (
    <ul className='navbar'>
      <div className='navbar__profile' style={{ width: '100%' }}>
        {isLoading ? (
          <Spinner color='grey' />
        ) : (
          <>
            <Button
              className='btn--sign'
              onClick={() => dispatch(setModal('signin'))}
            >
              SIGN IN
            </Button>
            <Button
              className='btn--sign btn--hide'
              onClick={() => dispatch(setModal('signup'))}
            >
              SIGN UP
            </Button>
          </>
        )}
      </div>
    </ul>
  )
}

export default PublicNav
