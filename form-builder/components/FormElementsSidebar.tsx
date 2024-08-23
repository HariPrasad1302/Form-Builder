import React from 'react'
import SidebarBtnElement from './SidebarBtnelement'
import { FormElements } from './FormElements'

function FormElementsSidebar() {
  return (
    <div>
        Elements
        <SidebarBtnElement formElement={FormElements.TextField} />
    </div>
  )
}

export default FormElementsSidebar