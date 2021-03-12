import { LoginPage } from './pages/login'
import { DashboardPage } from './pages/dashboard'
import { useContext } from 'react'
import { Context } from './context'

export const App = () => {
  const { isAuth } = useContext(Context)

  if (isAuth) {
    return (
      <DashboardPage />
    )
  }

  return (
    <LoginPage />
  )
}
