export interface ReadFileAs {
    (callback: (input: JQuery) => void, type: "url" | "binary" | "text"): Promise<string>;
    (callback: (input: JQuery) => void, type: "buffer"): Promise<ArrayBuffer>;
}

export const readFileAs: ReadFileAs = (callback: (input: JQuery) => void, type: unknown): Promise<any> =>  {
    return new Promise(
        (resolve, reject) => {
            let input: JQuery = $("<input>").attr("type", "file");
            callback(input);
            input.trigger("click").on(
                "change",
                () => {
                    let fileReader = new FileReader();
                    fileReader.onload = function () {
                        resolve(fileReader.result);
                    };
                    fileReader.onabort = reject;
                    fileReader.onerror = reject;
                    if (type == "buffer") fileReader.readAsArrayBuffer(input.prop("files")[0]);
                    if (type == "url") fileReader.readAsDataURL(input.prop("files")[0]);
                    if (type == "text") fileReader.readAsText(input.prop("files")[0]);
                    if (type == "binary") fileReader.readAsBinaryString(input.prop("files")[0]);
                }
            );
        }
    );
};

export default readFileAs;
