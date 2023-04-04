import { XMarkIcon } from "@heroicons/react/24/solid";
import { classNames } from "../../helper/styles.helper";
import { Label } from "../atoms";

export interface SideProps {
    title?: string;
    className?: string;
    closeIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    children: React.ReactNode;
    onIconPress: (open: false) => void;
    open: boolean;
}

export const Side = ({
    title = "",
    className = "",
    closeIcon: Icon = XMarkIcon,
    children = null,
    onIconPress = () => {},
    open = false,
}: SideProps) => {
    if (!open) return null;
    return (
        <div
            className={classNames(
                className,
                "bg-gray-100 rounded-xl p-6 gap-6"
            )}
        >
            <div className="flex place-content-between items-center">
                <Label className="font-bold text-gray-600 text-xl">
                    {title}
                </Label>
                <div
                    onClick={() => onIconPress(false)}
                    className="cursor-pointer group"
                >
                    <Icon className="h-5 w-5 stroke-[3] text-gray-500 group-hover:text-gray-700" />
                </div>
            </div>
            {children}
        </div>
    );
};
