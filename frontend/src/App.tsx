import { BrowserRouter } from 'react-router-dom'

import PublicApp from './apps/public-app/PuplicApp'
import ClientApp from './apps/client-app/ClientApp'
import AdminApp from './apps/admin-app/AdminApp'
import { useAuth } from './hooks/useAuth'
import { isClient, isAdmin } from './utils/helpers'

import './App.css'
import './fontawesome'

function App() {
  const { data } = useAuth()

  console.log('data: ', data)
  return (
    <BrowserRouter>
      {data ? <>
        {data.user ? <>
          {
            isClient(data.user.role) ? <ClientApp /> : isAdmin(data.user.role) ? <AdminApp /> : <PublicApp />
          }
        </> : <PublicApp />}
      </> : <PublicApp />}
    </BrowserRouter>
  )
}

export default App
