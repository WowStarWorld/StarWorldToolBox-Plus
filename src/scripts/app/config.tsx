import { get as lodashGet, set as lodashSet, hasIn as lodashHasIn } from "lodash";


if (typeof localStorage !== "undefined" && localStorage.getItem("settings")) {
    try {
        JSON.parse(localStorage.getItem("settings"));
    } catch {
        localStorage.setItem("settings", "{}");
    }
} else {
    localStorage.setItem("settings", "{}");
}

// 函数
export function getStorageItem (name: string, defaultValue: any = undefined) {
    let settings = JSON.parse(localStorage.getItem("settings"));
    return lodashHasIn(settings, name) ? lodashGet(settings, name) : defaultValue;
}

export function setStorageItem (name: string, value: any) {
    let settings = JSON.parse(localStorage.getItem("settings"));
    lodashSet(settings, name, value);
    localStorage.setItem("settings", JSON.stringify(settings));
    return settings;
}

// 常量
export const githubURL = "https://github.com/WowStarWorld/StarWorldToolBox-Plus";
