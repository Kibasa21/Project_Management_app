import Button from "./Button";

export default function AddProject ({onAdd}) {
    return (
        <Button onClick={onAdd} className='mt-16 ml-10 w-40 h-10 rounded font-lilita font-light text-neutral-500 bg-white hover:bg-slate-200'>
            + Add Project
        </Button>
    );
}