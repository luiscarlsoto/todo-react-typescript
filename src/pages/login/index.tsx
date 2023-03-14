import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";
import { loginUser } from "../../features/auth/authActions";
import { useAppDispatch } from "../../store/hooks";
import { InputLabel } from "../../UI/molecules";

export const Login = () => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        dispatch(loginUser({ email, password, remember: true }));
    };

    return (
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    className="mx-auto h-16 w-auto"
                    src={logo}
                    alt="Your Company"
                />
                <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-brown-1000">
                    {t("auth.page.title")}
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form
                        className="space-y-6"
                        onSubmit={handleSubmit}
                        method="POST"
                    >
                        <InputLabel
                            label={t("auth.page.email") as string}
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                        />
                        <InputLabel
                            label={t("auth.page.password") as string}
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                        />
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-brown-1000 focus:ring-brown-1000"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 block text-sm text-gray-900"
                                >
                                    {t("auth.page.rememberMe")}
                                </label>
                            </div>

                            <div className="text-sm">
                                <a
                                    href="/"
                                    className="font-medium text-brown-1000 hover:text-brown-1100"
                                >
                                    {t("auth.page.forgotPassword")}
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md border border-transparent bg-grayBrown-1000 py-2 px-4 text-sm font-medium text-brown-1000 shadow-sm hover:bg-grayBrown-1100 focus:outline-none focus:ring-2 focus:ring-grayBrown-1100 focus:ring-offset-2"
                            >
                                {t("auth.page.signin")}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-white px-2 text-gray-500">
                                    {t("auth.page.newHere")}
                                </span>
                            </div>
                        </div>

                        <div className="mt-6  gap-3">
                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md border bg-white py-2 px-4 text-sm font-medium text-brown-1000 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                                >
                                    {t("auth.page.signup")}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
