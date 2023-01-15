export function readFileAs (callback: (input: JQuery) => void = (...args) => null, type: "url" | "buffer" = "buffer"): Promise<ArrayBuffer | string> {
    return new Promise(
        function (resolve, reject) {
            let input: JQuery = $("<input>").attr("type", "file");
            callback(input);
            input.trigger("click").on(
                "change",
                function () {
                    let fileReader = new FileReader();
                    fileReader.onload = function () {
                        resolve(fileReader.result as ArrayBuffer);
                    };
                    fileReader.onabort = reject;
                    fileReader.onerror = reject;
                    if (type == "buffer") fileReader.readAsArrayBuffer(input.prop("files")[0]);
                    if (type == "url") fileReader.readAsDataURL(input.prop("files")[0]);
                }
            );
        }
    );
}

export default readFileAs;
