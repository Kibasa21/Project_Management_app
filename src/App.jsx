import { useRef, useState } from "react";

import SideTable from "./components/SideTable";
import NewProject from "./components/NewProject";
import ProjectManagement from "./components/ProjectManagement";

function App() {

  const data = useRef();

  const [content, setContent] = useState([])
  const [create, setCreate] = useState(false)
  const [manage, setManage] = useState()

  function handleSave () {
    let auxContent = {...data.current.addContent()};
    if(auxContent.title){
      if(content.length==0) {
        setContent([{...auxContent}]);
      } else {
        let prevContent = content;
        setContent([...prevContent, {...auxContent}]);
      }
      setCreate(false)
    }
  }

  function handleCancel () {
    data.current.addContent(); //trash
    setCreate(false);
  }

  function handleAdd () {
    setCreate(true);
    setManage(undefined);
  }

  function handleDelete () {
    const auxContent = [...content.map((obj) => ({...obj}))];
    auxContent.splice(manage, 1);
    setContent(auxContent);
    setManage(undefined);
  }

  function handleManage (children) {
    setManage(content.findIndex(project => project.title === children));
    setCreate(false);
  }

  return (
    <div className="flex space-x-10">
      <SideTable newContent={content} onCreate={handleAdd} onManage={handleManage}/>
      {create && <NewProject onCancel={handleCancel} onSave={handleSave} ref={data} className="mt-40 h-128 w-200 rounded bg-cozy-color-text" />}
      {!(manage===undefined) && <ProjectManagement onDelete={handleDelete} project={manage} content={content} className="mt-40 h-128 w-200 rounded bg-cozy-color-text" />}
    </div>
  );
}

export default App;
