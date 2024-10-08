import React from 'react'
import useDesigner from './hooks/useDesigner'
import FormElementsSidebar from './FormElementsSidebar';
import PropertiesFormSidebar from './PropertiesFormSidebar';

function DesignerSidebar() {
  const {selectedElement} = useDesigner();

  return (
    <aside className='w-[400px] max-w-[400px] flex flex-col flex-grow
    gap-2 border-l-2  bg-background p-4 overflow-y-auto h-full'>
        {!selectedElement && <FormElementsSidebar />} 
        {selectedElement && <PropertiesFormSidebar />} 

    </aside>
  )
}

export default DesignerSidebar