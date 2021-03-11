import { IoIosPersonAdd } from 'react-icons/io'

export const FilterForm = () => {
  function hdlClickFilter(event) {
    event.preventDefault()
    console.log('hdlClickFilter')
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
          Filtrar búsqueda
        </span>
      </h4>
      <div className="Input">
        <label className="Input-Label">
          Nombres
        </label>
        <input className="Input-Control" />
      </div>
      <div className="Input">
        <label className="Input-Label">
          Apellidos
        </label>
        <input className="Input-Control" />
      </div>
      <div className="Input">
        <label className="Input-Label">
          Rol asociado
        </label>
        <select className="Input-Control">
          <option>Admin</option>
          <option>Agente</option>
        </select>
      </div>
      <div className="Input">
        <label className="Input-Label">
          Estado
        </label>
        <select className="Input-Control">
          <option>Activo</option>
          <option>Inactivo</option>
        </select>
      </div>
      <div className="Input">
        <label className="Input-Label">
          Identificación (C.C)
        </label>
        <input className="Input-Control" />
      </div>
      <div className="Input">
        <label className="Input-Label">
          Contraseña
        </label>
        <input className="Input-Control" />
      </div>
      <div className="Input">
        <label className="Input-Label">
          Teléfono
        </label>
        <input className="Input-Control" />
      </div>
      <div className="Input">
        <label className="Input-Label">
          Correo electrónico
        </label>
        <input className="Input-Control" />
      </div>
      <div className="Form-BtnsContainer Form-BtnsContainer--full">
        <button className="BtnSecundary BtnSecundary--fill" onClick={hdlClickFilter}>
          Filtrar
        </button>
        <button className="BtnSecundary BtnSecundary--outline" onClick={hdlClickClean}>
          Limpiar
        </button>
      </div>
    </form>
  )
}
