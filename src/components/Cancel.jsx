import Button from "./Button";

export default function Cancel ({onCancel}) {
    return (
        <Button onClick={onCancel} className='mt-8 w-20 h-10 rounded font-lilita font-light text-neutral-500 bg-white hover:bg-slate-200'>
            Cancel
        </Button>
    );
}