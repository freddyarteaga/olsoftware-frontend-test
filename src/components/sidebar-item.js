

export const SidebarItem = ({ icon, text, isHeader }) => {
  function buildText() {
    if (isHeader) {
      return (
        <h2 className="SidebarItem_Text">
          <strong>{text}</strong>
        </h2>
      )
    } else {
      return (
        <h4 className="SidebarItem_Text">
          {text}
        </h4>
      )
    }
  }

  return (
    <div className="SidebarItem">
      <div>
        {icon}
      </div>
      {buildText()}
    </div>
  )
}
