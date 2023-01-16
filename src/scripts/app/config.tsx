import { get as lodashGet, set as lodashSet } from "lodash";
export const githubURL = "https://github.com/WowStarWorld/StarWorldToolBox-Plus";

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

let settingsRaw = localStorage.getItem("settings");
if (settingsRaw) {
    try {
        JSON.parse(settingsRaw);
    } catch {
        localStorage.setItem("settings", "{}");
    }
} else {
    localStorage.setItem("settings", "{}");
}
