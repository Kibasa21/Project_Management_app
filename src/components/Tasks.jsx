import Button from "./Button";

export default function Tasks({tasks, onClear}) {

    function orgTasks() {
        return(
            tasks.map((todo) => <Button key={todo} onClick={onClear} className='w-40 h-10 rounded font-lilita font-light text-neutral-500 bg-cozy-color hover:bg-rose-800 hover:text-white'>{todo}</Button>)
        );
    }

    return(
        <div className="grid grid-rows-3 grid-flow-col gap-4 ml-8 mt-10">
            {orgTasks()}
        </div>
    );
}