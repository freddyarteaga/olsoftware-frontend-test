import { LoginForm } from '../components/login-form'

export const LoginPage = () => {
  return (
    <div className="LoginPage FullPage">
      <div className="LoginPage-Hero">
        <h2 className="LoginPage-Title">
          Aplicación
          <br />
          OLSoftware
        </h2>
        <p>
          Prueba práctica Front-end super senior
        </p>
      </div>
      <LoginForm />
      <p className="LoginPage-Caption">
        OLSoftware - 2018
      </p>
    </div>
  )
}
