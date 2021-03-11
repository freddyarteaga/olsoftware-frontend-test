import { AiOutlineUser } from "react-icons/ai";
import { BsLock } from "react-icons/bs";


export const LoginForm = () => {
  function hdlSubmit(event) {
    event.preventDefault()
    console.log('hdlSubmit')
  }

  return (
    <form className="FormLogin Card Card--large">
      <h1 className="FormLogin_Title">
        Inicio de sesión
      </h1>
      <div className="FormLogin-InputContainer">
        <div className="FormLogin_Input FormLogin_Input--user">
          <input type="text" placeholder="Usuario" />
          <AiOutlineUser color="gray" size={20} />
        </div>
        <div className="FormLogin_Input FormLogin_Input--password">
          <input type="password" placeholder="Contraseña" />
          <BsLock color="gray" size={20} />
        </div>
      </div>
      <button className="FormLogin_Btn BtnPrimary BtnPrimary--large" onClick={hdlSubmit}>
        Iniciar sesión
      </button>
    </form>
  )
}
