import { Toaster } from "react-hot-toast";
import { Trans } from "react-i18next";

export const Notification = () => {
    return <Toaster position="bottom-center" reverseOrder={false} />;
};

export const notificationAsyncMessage = {
    loading: "common.loading",
    success: (data: any) => {
        return <Trans>{data?.status.key ?? "Success"}</Trans>;
    },
    error: (error: any) => (
        <Trans>{error?.response?.data?.status?.key ?? "Error"}</Trans>
    ),
};
