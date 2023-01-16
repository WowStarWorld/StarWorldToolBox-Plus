import React from "react";
import App from "./app/app";
import ANTDLocale from "antd/locale/zh_CN";

import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import { getStorageItem } from "./app/config";

export const RootJQuery = $("#app-container").hide();
export const Root = createRoot(RootJQuery[0]);
export default Root;

Root.render(
    <ConfigProvider locale={ANTDLocale}>
        <App container={RootJQuery}/>
    </ConfigProvider>
);

$(window).on("hashchange", () => location.reload());

RootJQuery.fadeIn(500);

if (getStorageItem("general.theme", "light") == "dark") {
    $(document.documentElement).css("filter", "invert()")
}
