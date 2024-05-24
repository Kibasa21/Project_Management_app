import AddProject from "./AddProject";
import Tabs from "./Tabs";

export default function SideTable({newContent, onCreate, onManage}) {
    return (
        <section className="flex flex-col space-y-10 mt-14 shadow-2xl h-screen w-96 rounded bg-cozy-color">
            <section className="flex flex-col space-y-10">
                <h1 className="mt-16 ml-10 h-fit text-5xl font-dancing font-bold text-cozy-color-text">Your Projects</h1>
                <AddProject onAdd={onCreate} />
            </section>
            <section className="flex flex-col space-y-10">
                <Tabs onManage={onManage} projects={newContent} />
            </section>
        </section>
    );
}