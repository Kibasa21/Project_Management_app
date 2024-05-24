import { forwardRef, useImperativeHandle, useState, useRef } from "react";

import Save from "./Save";
import Cancel from "./Cancel";
import Input from "./Input";

const NewProject = forwardRef(function NewProject ({className, onSave, onCancel}, ref) {

    const getTitle = useRef();
    const getDescription = useRef();
    const getDate = useRef();
    
    const [save, setSave] = useState();

    useImperativeHandle(ref, () => {
        return {
            addContent() {
                return ({
                    title: getTitle.current.addData(),
                    description: getDescription.current.addData(),
                    date: getDate.current.addData()
                });
            }
        };
    })

    return (
        <section className={className}>
            <div className="flex flex-col space-y-14">
                <div className="flex flex-row-reverse mr-8 space-x-4 space-x-reverse">
                    <Save onSave={onSave} />
                    <Cancel onCancel={onCancel} />
                </div>
                <Input ref={getTitle} label='TITLE' type='simple' classNameInput='ml-10 mr-40 border rounded bg-cozy-color' classNameLabel='ml-10 font-lilita font-light text-neutral-500' />
                <Input ref={getDescription} label='DESCRIPTION' type='longText' classNameInput='ml-10 mr-40 border rounded bg-cozy-color' classNameLabel='ml-10 font-lilita font-light text-neutral-500' />
                <Input ref={getDate} label='DUE DATE' type='date' classNameInput='ml-10 mr-40 border rounded bg-cozy-color' classNameLabel='ml-10 font-lilita font-light text-neutral-500' />
            </div>
        </section>
    );
})

export default NewProject;