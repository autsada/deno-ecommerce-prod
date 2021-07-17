import { BrowserRouter } from 'react-router-dom'

import PublicApp from './apps/public-app/PuplicApp'
import ClientApp from './apps/client-app/ClientApp'
import AdminApp from './apps/admin-app/AdminApp'
import { useAppSelector } from './store/store'
import { isClient, isAdmin } from './utils/helpers'

import './App.css'
import './fontawesome'

function App() {
  const { user } = useAppSelector(state => state.auth)

  return (
    <BrowserRouter>
      {user ? <>
        {
          isClient(user.role) ? <ClientApp /> : isAdmin(user.role) ? <AdminApp /> : <PublicApp />
        }
      </> : <PublicApp />}
    </BrowserRouter>
  )
}

export default App
