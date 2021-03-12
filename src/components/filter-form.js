import { useInputValue } from '../hooks/use-input-value'
import { IoIosPersonAdd } from 'react-icons/io'
import { useContext } from 'react'
import { Context } from '../context'

export const FilterForm = () => {
  const { users, setUsers } = useContext(Context)

  const firstName = useInputValue('')
  const lastName = useInputValue('')
  const rol = useInputValue('Admin')
  const state = useInputValue('Active')
  const id = useInputValue('')
  const password = useInputValue('')
  const phone = useInputValue('')
  const email = useInputValue('')

  function hdlClickFilter(event) {
    event.preventDefault()
    if (!firstName.value || !lastName.value || !phone.value) {
      return
    }

    const newUser = {
      firstName: firstName.value,
      lastName: lastName.value,
      rol: rol.value,
      state: state.value,
      id: id.value,
      password: password.value,
      phone: phone.value,
      email: email.value
    }
    const newUsers = [...users]
    newUsers.push(newUser)
    setUsers(newUsers)
    
  }

  function hdlClickClean(event) {
    event.preventDefault()
    console.log('hdlClickClean')
  }

  return (
    <form className="Form Form--filter Card Card--small">
      <h4 className="Form-Title Form-Title--filter">
        <IoIosPersonAdd size={24} color="#2644A7" style={{ marginRight: 15 }} />
        <span className="Form-TitleText">
          Crear
        </span>
      </h4>
      <div className="Input">
        <label className="Input-Label">
          Nombres
        </label>
        <input className="Input-Control" placeholder="Requerido*" {...firstName} />
      </div>
      <div className="Input">
        <label className="Input-Label">
          Apellidos
        </label>
        <input className="Input-Control" placeholder="Requerido*" {...lastName} />
      </div>
      <div className="Input">
        <label className="Input-Label">
          Rol asociado
        </label>
        <select className="Input-Control" placeholder="Requerido*" {...rol}>
          <option value="Admin">Admin</option>
          <option value="Developer">Developer</option>
          <option value="Tester">Tester</option>
        </select>
      </div>
      <div className="Input">
        <label className="Input-Label">
          Estado
        </label>
        <select className="Input-Control" placeholder="Requerido*" {...state}>
          <option value="Active">Activo</option>
          <option value="Inactive">Inactivo</option>
        </select>
      </div>
      <div className="Input">
        <label className="Input-Label">
          Identificación (C.C)
        </label>
        <input className="Input-Control" placeholder="Requerido*" {...id} />
      </div>
      <div className="Input">
        <label className="Input-Label">
          Contraseña
        </label>
        <input type="password" className="Input-Control" placeholder="Requerido*" {...password} />
      </div>
      <div className="Input">
        <label className="Input-Label">
          Teléfono
        </label>
        <input type="number" className="Input-Control" placeholder="Requerido*" {...phone} />
      </div>
      <div className="Input">
        <label className="Input-Label">
          Correo electrónico
        </label>
        <input type="email" className="Input-Control" placeholder="Requerido*" {...email} />
      </div>
      <div className="Form-BtnsContainer Form-BtnsContainer--full">
        <button className="BtnSecundary BtnSecundary--fill" onClick={hdlClickFilter} style={{ margin: 0 }}>
          Agregar
        </button>
        {/* <button className="BtnSecundary BtnSecundary--outline" onClick={hdlClickClean}>
          Limpiar
        </button> */}
      </div>
    </form>
  )
}
