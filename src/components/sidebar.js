import { Context } from '../context'
import { useContext } from 'react'
import { SidebarItem } from './sidebar-item'
import { MdMap } from 'react-icons/md'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { VscSettings } from 'react-icons/vsc'
import { GiPoliceBadge } from 'react-icons/gi'
import { ImUsers } from 'react-icons/im'
import { IoIosPaper } from 'react-icons/io'
import { BsCircleFill } from 'react-icons/bs'


export const Sidebar = () => {
  const { isCollapse } = useContext(Context)

  return (
    <nav className={`Sidebar ${isCollapse && 'Sidebar--collapse'}`}>
      <div className="Sidebar_Header">
        <SidebarItem
          icon={<BsCircleFill size={32} color="white" style={{ marginRight: 28 }} />}
          text="OLSoftware"
          isHeader
        />
      </div>
      <div className="Sidebar_Body">
        <SidebarItem
          icon={<MdMap size={32} color="white" style={{ marginRight: 28 }} />}
          text="Programación"
        />
        <SidebarItem
          icon={<AiOutlineUnorderedList size={32} color="white" style={{ marginRight: 28 }} />}
          text="Gestión de operaciones"
        />
        <SidebarItem
          icon={<VscSettings size={32} color="white" style={{ marginRight: 28 }} />}
          text="Perfiles"
        />
        <SidebarItem
          icon={<GiPoliceBadge size={32} color="white" style={{ marginRight: 28 }} />}
          text="Roles"
        />
        <SidebarItem
          icon={<ImUsers size={32} color="white" style={{ marginRight: 28 }} />}
          text="Usuario"
        />
        <SidebarItem
          icon={<IoIosPaper size={32} color="white" style={{ marginRight: 28 }} />}
          text="Reportes"
        />
      </div>
    </nav>
  )
}
