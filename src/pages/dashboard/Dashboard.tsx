import { useState } from "react";
import { Button, Input, Label } from "../../UI/atoms";
import { ChevronRightIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { classNames } from "../../helper/styles.helper";
import { Side } from "../../UI/organisms";
const tasks = [
    {
        id: 1,
        title: "Task 1",
        description: "Description 1",
        date: new Date(),
        completed: false,
    },
    {
        id: 2,
        title: "Task 2",
        description: "Description 2",
        date: new Date(),
        completed: false,
    },
    {
        id: 3,
        title: "Task 3",
        description: "Description 3",
        date: new Date(),
        completed: false,
    },
    {
        id: 4,
        title: "Task 4",
        description: "Description 4",
        date: new Date(),
        completed: false,
    },
    {
        id: 5,
        title: "Task 5",
        description: "Description 5",
        date: new Date(),
        completed: false,
    },
    {
        id: 6,
        title: "Task 6",
        description: "Description 6",
        date: new Date(),
        completed: false,
    },
    {
        id: 7,
        title: "Task 7",
        description: "Description 7",
        date: new Date(),
        completed: false,
    },
    {
        id: 8,
        title: "Task 8",
        description: "Description 8",
        date: new Date(),
        completed: false,
    },
    {
        id: 9,
        title: "Task 9",
        description: "Description 9",
        date: new Date(),
        completed: false,
    },
    {
        id: 10,
        title: "Task 10",
        description: "Description 10",
        date: new Date(),
        completed: false,
    },
    {
        id: 11,
        title: "Task 11",
        description: "Description 11",
        date: new Date(),
        completed: false,
    },
    {
        id: 12,
        title: "Task 12",
        description: "Description 12",
        date: new Date(),
        completed: false,
    },
    {
        id: 13,
        title: "Task 13",
        description: "Description 13",
        date: new Date(),
        completed: false,
    },
];

export const Dashboard = () => {
    const [open, setOpen] = useState<boolean>(false);

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
    completed: boolean;
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
