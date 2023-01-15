import React from "react";

import { MDBBtn, MDBContainer, MDBBtnGroup, MDBTextArea } from "mdb-react-ui-kit";
import { registerTool } from "../../../components/tabs";

export const path = "/tools/base64";

export function render () {
    return (
        <Component/>
    );
}

export default {
    render, path
}

registerTool("Base64 编码工具", path, "layer-group", "programming");

export class Component extends React.Component {

    public readonly state: {
        currentOutput: string;
        currentInput: string;
    };

    constructor (props) {
        super (props);
        this.state = {
            currentOutput: "空",
            currentInput: "",
        };
    }

    encode () {
        this.setState(
            {
                currentOutput: new Buffer(this.state.currentInput).toString("base64") || "空",
            }
        );
    }
    decode () {
        this.setState(
            {
                currentOutput: new Buffer(this.state.currentInput, "base64").toString() || "空",
            }
        );
    }
    render () {
        let that = this;
        return (
            <>
                <br/><br/>
                <MDBContainer>
                    <MDBBtnGroup>
                        <MDBBtn color="info" onClick={() => that.encode()}>编码</MDBBtn>
                        <MDBBtn color="info" onClick={() => that.decode()}>解码</MDBBtn>
                    </MDBBtnGroup>
                    <br/><br/><br/>
                    <MDBTextArea label="请输入要编码的文本" onInput={(e) => {this.setState({"currentInput": e.target["value"]})}}></MDBTextArea>
                    <br/>
                    <MDBTextArea className="form-control" placeholder={"空"} value={this.state.currentOutput}></MDBTextArea>
                </MDBContainer>
            </>
        );
    }
}

