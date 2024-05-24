import { useImperativeHandle, forwardRef, useRef } from "react";

const Input = forwardRef(function Input ({classNameLabel, classNameInput,label, type}, ref) {
    
    const data = useRef();
    
    useImperativeHandle(ref, () => {
        return {
            addData() {
                let value = data.current.value;
                data.current.value = '';
                return value;
            }
        };
    })
    
    function decideType (type) {
        let result;
        if (type==='simple'){
            result = <input ref={data} type="text" className={classNameInput + 'font-saira'}></input>;
        } else if (type==='longText') {
            result = <textarea ref={data} type="text" className={classNameInput + 'font-saira'}></textarea>;
        } else if (type==='date') {
            result = <input ref={data} type="date" className={classNameInput + 'font-saira'}></input>;
        }

        return result;
    }

    return (
        <div className="flex flex-col space-y-0">
            {label && <label className={classNameLabel}>{label}</label>}
            {decideType(type)}
        </div>
    );
})

export default Input;