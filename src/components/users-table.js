import { useState } from 'react'
import { ImUsers } from 'react-icons/im'
import { IoTrash } from 'react-icons/io5'
import { MdModeEdit } from 'react-icons/md'

export const UsersTable = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])

  function hdlClickCreate() {
    console.log('hdlClickCreate')
  }

  return (
    <div className="UsersTable Card Card--small">
      <div className="UsersTable_Header">
        <div className="UsersTable_Side--left">
          <ImUsers size={24} color="#2644A7" style={{ marginRight: 15 }} />
          <h4 className="UsersTable_Title">
            Usuarios existentes
          </h4>
        </div>
        <div className="UsersTable_Side--right">
          <button className="BtnPrimary BtnPrimary--small" onClick={hdlClickCreate}>
            Crear
          </button>
        </div>
      </div>
      <div className="UsersTable_Content">
        <table className="Table" border="0" cellpadding="0" cellspacing="0">
          <thead className="Table_Heading">
            <tr>
              <td>
                Nombres
              </td>
              <td>
                Apellidos
              </td>
              <td>
                Identificación (C.C)
              </td>
              <td>
                Rol asociado
              </td>
              <td>
                Estado
              </td>
              <td>
                Teléfono
              </td>
              <td>
                Correo electrónico
              </td>
              <td>
                Acción
              </td>
            </tr>
          </thead>
          <tbody className="Table_Body">
            {
              data.map((value) => (
                <tr key={value}>
                  <td>
                    Andrés Felipe
                  </td>
                  <td>
                    Garcia Castro
                  </td>
                  <td>
                    114485404
                  </td>
                  <td>
                    Administrador
                  </td>
                  <td>
                    Activo
                  </td>
                  <td>
                    3165303978
                  </td>
                  <td>
                    afgarcia@refinal.com
                  </td>
                  <td>
                    <MdModeEdit color="#2644A7" style={{ cursor: 'pointer', marginRight: 10 }} />
                    <IoTrash style={{ cursor: 'pointer' }} />
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}
