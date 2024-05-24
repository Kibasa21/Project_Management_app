import Button from "./Button";

export default function Tabs({projects, onManage}) {

    function addProjectTab() {
        return (
            projects.map((content) => <Button onClick={onManage} key={content.title} className='-ml-2 ml- w-40 h-10 rounded font-lilita font-light text-neutral-700 bg-cute-green hover:bg-cute-green-l'>{content.title}</Button>)
        );
    }

    return (
        <div className="flex flex-col space-y-4 mt-10">
            {addProjectTab()}
        </div>
    );
}