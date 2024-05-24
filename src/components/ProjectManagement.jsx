import { useState, useRef } from "react";

import Input from "./Input";
import Button from "./Button";
import Tasks from "./Tasks";

export default function ProjectManagement({className, project, content, onDelete}) {

    const getTask = useRef();

    const [allTasks, setAllTasks] = useState([]);

    function getData(type) {
        switch(type) {
            case 'title':
                return content[project].title;
            case 'description':
                return content[project].description;
            case 'date':
                return content[project].date;
        }
    }

    function handleAddTask () {
        let auxTasks = getTask.current.addData();
        if(auxTasks){
            if(allTasks.length==0) {
                setAllTasks([auxTasks]);
            } else {
                let prevTasks = allTasks;
                setAllTasks([...prevTasks, auxTasks]);
            }
        }
    }

    function handleClearTask (ToDo) {
        const auxTasks = [...allTasks];
        const index = auxTasks.findIndex(task => task === ToDo);
        auxTasks.splice(index, 1);
        setAllTasks(auxTasks);
    }

    return (
        <section className={className}>
            <div className="flex flex-row-reverse mr-8 space-x-80 space-x-reverse">
                <Button onClick={onDelete} className='mt-8 w-20 h-10 rounded font-lilita font-light text-gray-50 bg-gray-700 hover:bg-gray-500'>Delete</Button>
            </div>
            <div className="flex flex-col ml-8 space-y-2">
                <h1 className="text-4xl mr-60 font-dancing font-bold text-neutral-500">{getData('title')}</h1>
                <h2 className="text-sm font-saira font-normal text-neutral-400">{getData('date')}</h2>
                <h3 className="text-md mr-40 font-saira font-bold text-neutral-500">{getData('description')}</h3>
                <hr className="mr-8 border-neutral-400" />
                <h1 className="text-2xl font-dancing font-bold text-neutral-500">Tasks</h1>
                <div className="flex flex-row space-x-2">
                    <Input ref={getTask} type='simple' classNameInput='border rounded bg-cozy-color' classNameLabel='ml-10 font-lilita font-light text-neutral-500' />
                    <Button onClick={handleAddTask} className='rounded w-16 text-sm font-saira font-light text-gray-50 bg-amber-600 hover:bg-amber-500'>Add Task</Button>
                </div>
            </div>
            <Tasks onClear={handleClearTask} tasks={allTasks} />
        </section>
    );
}