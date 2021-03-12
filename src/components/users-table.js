import { useContext, useState } from 'react'
import { ImUsers } from 'react-icons/im'
import { IoTrash } from 'react-icons/io5'
import { MdModeEdit } from 'react-icons/md'
import { Context } from '../context'

export const UsersTable = () => {
  const { users, setUsers } = useContext(Context)

  function hdlClickCreate() {
    console.log('hdlClickCreate')
  }

  function hdlClickDelete(index) {
    const newUsers = [...users]
    newUsers.splice(index, 1)
    setUsers(newUsers)
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
            Filtrar
          </button>
        </div>
      </div>
      <div className="UsersTable_Content">
        <table className="Table" border="0" cellPadding="0" cellSpacing="0">
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
              users.map((user, index) => (
                <tr key={user.id}>
                  <td>
                    {user.firstName}
                  </td>
                  <td>
                    {user.lastName}
                  </td>
                  <td>
                    {user.id}
                  </td>
                  <td>
                    {user.rol}
                  </td>
                  <td>
                    {user.state}
                  </td>
                  <td>
                    {user.phone}
                  </td>
                  <td>
                    {user.email}
                  </td>
                  <td>
                    <MdModeEdit color="#2644A7" style={{ cursor: 'pointer', marginRight: 10 }} />
                    <IoTrash onClick={() => hdlClickDelete(index)} style={{ cursor: 'pointer' }} />
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
