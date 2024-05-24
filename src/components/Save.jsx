import Button from "./Button";

export default function Save ({onSave}) {
    return (
        <Button onClick={onSave} className='mt-8 w-20 h-10 rounded font-lilita font-light text-gray-50 bg-amber-600 hover:bg-amber-500'>
            Save
        </Button>
    );
}