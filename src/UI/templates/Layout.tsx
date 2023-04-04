// import { logoutUser } from "../../features/auth/authSlice";
// import { useAppDispatch } from "../../store/hooks";

import {
    Bars4Icon,
    CalendarDaysIcon,
    DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import { Link, Outlet, useLocation } from "react-router-dom";
import { classNames } from "../../helper/styles.helper";
import { Label } from "../atoms";
import { Side } from "../organisms";

export const Layout = () => {
    // const dispatch = useAppDispatch();
    // onClick={() => dispatch(logoutUser())}
    const { pathname } = useLocation();
    const navItems = [
        {
            name: "today",
            icon: Bars4Icon,
            label: "Today",
            link: "/",
        },
        {
            name: "profile",
            icon: CalendarDaysIcon,
            label: "Calendar",
            link: "/profile",
        },
        {
            name: "wall",
            icon: DocumentDuplicateIcon,
            label: "Sticky wall",
            link: "/wall",
        },
    ];

    return (
        <main className="grid grid-cols-12 h-screen p-4 overflow-hidden gap-4">
            <Side
                open={true}
                closeIcon={Bars4Icon}
                title="Menu"
                onIconPress={console.log}
                className="col-span-2 flex flex-col align-center"
            >
                <div className="flex flex-col gap-1">
                    {navItems.map((item, index) => (
                        <Link
                            to={item.link}
                            className={classNames(
                                pathname === item.link
                                    ? "bg-gray-200"
                                    : "border-transparent",
                                "group cursor-pointer border-r-2 w-full flex rounded-lg p-2 hover:bg-gray-200"
                            )}
                            key={index}
                        >
                            <item.icon
                                className={classNames(
                                    pathname === item.link
                                        ? "text-gray-600"
                                        : "text-grayBrown-1000",
                                    "w-6 h-6"
                                )}
                            />
                            <Label
                                className={classNames(
                                    pathname === item.link
                                        ? "font-bold text-gray-700"
                                        : "",
                                    "ml-2 text-grayBrown-1000"
                                )}
                            >
                                {item.label}
                            </Label>
                        </Link>
                    ))}
                </div>
            </Side>
            <aside className="col-span-10">
                <Outlet />
            </aside>
        </main>
    );
};
