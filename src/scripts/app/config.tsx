import { get as lodashGet, set as lodashSet } from "lodash";


if (localStorage.getItem("settings")) {
    try {
        JSON.parse(localStorage.getItem("settings"));
    } catch {
        localStorage.setItem("settings", "{}");
    }
} else {
    localStorage.setItem("settings", "{}");
}

export function getStorageItem(name: string, defaultValue: any = undefined) {
    let value = lodashGet(JSON.parse(localStorage.getItem("settings")), name);
    return value ? value : defaultValue;
}

export function setStorageItem(name: string, value: any) {
    let settings = JSON.parse(localStorage.getItem("settings"));
    lodashSet(settings, name, value);
    localStorage.setItem("settings", JSON.stringify(settings));
    return settings;
}

// Constants
export const githubURL = "https://github.com/WowStarWorld/StarWorldToolBox-Plus";
