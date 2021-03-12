import { useInputValue } from '../hooks/use-input-value'
import { AiOutlineUser } from "react-icons/ai";
import { BsLock } from "react-icons/bs";
import Loader from 'react-loaders'
import { useContext } from 'react';
import { Context } from '../context';

let loader = <Loader type="ball-pulse-sync" />


export const LoginForm = () => {
  const { loading, setLoading, setIsAuth } = useContext(Context)
  const user = useInputValue('')
  const password = useInputValue('')

  function hdlSubmit(event) {
    event.preventDefault()
    if (user.value && password.value) {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setIsAuth(true)
      }, 3 * 1000)
    }
  }

  return (
    <form className="FormLogin Card Card--large">
      <h1 className="FormLogin_Title">
        Inicio de sesión
      </h1>
      <div className="FormLogin-InputContainer">
        <div className="FormLogin_Input FormLogin_Input--user">
          <input type="text" placeholder="Usuario" {...user} />
          <AiOutlineUser color="gray" size={20} />
        </div>
        <div className="FormLogin_Input FormLogin_Input--password">
          <input type="password" placeholder="Contraseña" {...password} />
          <BsLock color="gray" size={20} />
        </div>
      </div>
      <button className="FormLogin_Btn BtnPrimary BtnPrimary--large" onClick={hdlSubmit}>
        Iniciar sesión
      </button>
      {
        loading && (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        )
      }
    </form>
  )
}
