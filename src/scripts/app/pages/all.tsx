import React from "react";

import { MDBContainer } from "mdb-react-ui-kit";

import TOOL_BASE64 from "./tools/programming/base64";

export let AllPages = {
    [TOOL_BASE64.path]: TOOL_BASE64.render,
};

function getCurrentPage () {
    let path = location.hash.slice(1);
    if (path in AllPages) {
        return AllPages[path]();
    }
    return (
        <MDBContainer>
            <h4>页面未找到</h4>
        </MDBContainer>
    );
}
export let CurrentPage: JSX.Element = getCurrentPage();
export default CurrentPage;
