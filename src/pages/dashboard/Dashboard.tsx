import { useEffect, useState } from "react";
import { Button, Input, Label } from "../../UI/atoms";
import { ChevronRightIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { classNames } from "../../helper/styles.helper";
import { Side } from "../../UI/organisms";
import { getAllTasks } from "../../features/task/taskActions";
import { useAppDispatch } from "../../store/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const Dashboard = () => {
    const [open, setOpen] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    const { tasks, loading } = useSelector((state: RootState) => state.tasks);

    useEffect(() => {
        if (loading) return;
        if (tasks.length) return;
        dispatch(getAllTasks());
        console.log("sucede");
    }, []);
    console.log(tasks);
    return (
        <div className="grid grid-cols-12 w-full h-full gap-4">
            <div className={classNames(open ? "col-span-7" : "col-span-12")}>
                <div className="flex flex-col gap-12">
                    <div>
                        <Label className="text-gray-700 font-bold text-4xl">
                            Today
                        </Label>
                    </div>
                    <div className="flex flex-col">
                        <Button
                            onClick={() => setOpen(true)}
                            iconClassName="stroke-[3]"
                            className="py-3 px-5 border border-gray-200 rounded-md hover:border-gray-400 text-gray-500"
                            icon={PlusSmallIcon}
                            title="Add new task"
                        />
                        <div className="divide-y">
                            {tasks.map(task => (
                                <ItemList {...task} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Side
                open={open}
                title="Task:"
                onIconPress={setOpen}
                className="col-span-5 bg-gray-100 rounded-xl gap-3 p-6 flex flex-col"
            >
                <div className="flex flex-col gap-3">
                    <Input placeholder="Title" className="bg-transparent" />
                    <Input
                        as="textarea"
                        className="bg-transparent resize-none"
                        rows={4}
                        placeholder="Description"
                    />
                </div>
                <div className="flex place-content-around mt-auto">
                    <Button
                        className="text-gray-600 py-2 px-12 font-bold rounded-md hover:border-gray-400 border border-gray-300"
                        title="Delete task"
                    />
                    <Button
                        className="text-gray-600 bg-yellow-400 py-2 px-12 font-bold rounded-md hover:bg-yellow-500"
                        title="Save task"
                    />
                </div>
            </Side>
        </div>
    );
};

interface IITemList {
    title: string;
    description: string;
}

const ItemList = ({ title }: IITemList) => {
    return (
        <div className="flex items-center py-2 px-5 gap-4 cursor-pointer group">
            <input type="checkbox" />
            <div className="group-hover:font-semibold text-gray-700">
                {title}
            </div>
            <div className="ml-auto">
                <ChevronRightIcon className="h-4 w-4 stroke-[3] text-gray-600" />
            </div>
        </div>
    );
};
