import { logoutUser } from "../../features/auth/authSlice";
import { useAppDispatch } from "../../store/hooks";

export const Dashboard = () => {
    const dispatch = useAppDispatch();

    return (
        <main className="grid min-h-full place-items-center py-24 px-6 sm:py-32 lg:px-8">
            <div className="text-center">
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-brown-1000 sm:text-5xl">
                    Dashboard
                </h1>
                <p className="mt-6 text-base leading-7 text-gray-600"></p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <div
                        onClick={() => dispatch(logoutUser())}
                        className="cursor-pointer hover:underline rounded-md bg-secondary-1000 px-3.5 py-2.5 text-sm font-semibold text-brown-1000 shadow-sm hover:bg-secondary-1100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Logout
                    </div>
                    <a href="#" className="text-sm font-semibold text-gray-900">
                        Contact support <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </main>
    );
};
