export default function Button ({className, children, onClick}) {
    let result = (<button onClick={() => onClick(children)} className={className + ' shadow-2xl'}>{children}</button>)
    return result;
}