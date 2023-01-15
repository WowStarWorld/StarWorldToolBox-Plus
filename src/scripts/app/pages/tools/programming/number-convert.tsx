import React from "react";

import { MDBBtn, MDBContainer, MDBTextArea } from "mdb-react-ui-kit";
import { registerTool } from "../../../components/tabs";
import { Select } from "antd";

import range from "lodash/range";

export const path = "/tools/number-convert";

export function render () {
    return (
        <Component/>
    );
}

export default {
    render, path
}

registerTool("进制转换工具", path, "clone", "other");

export class Component extends React.Component {

    public readonly state: {
        currentOutput: string;
        currentInput: string;
        from: number;
        to: number;
    };

    constructor (props) {
        super (props);
        this.state = {
            currentOutput: "空",
            currentInput: "",
            from: 10,
            to: 10,
        };
    }

    convert () {
        let from = this.state.from;
        let to = this.state.to;
        let number = this.state.currentInput;
        try {
            let output = parseInt(number, from).toString(to);
            this.setState(
                {
                    "currentOutput": (output === "NaN") ? "空" : output
                }
            );
        } catch {
            this.setState(
                {
                    "currentOutput": "空"
                }
            );
        }
    }

    switch () {
        let from = this.state.from;
        let to = this.state.to;
        this.setState(
            {
                from: to,
                to: from,
            }
        );
    }

    render () {
        let that = this;
        let from = range(2, 37).map(
            (i) => {
                return {
                    label: `从${i}进制`,
                    value: i,
                };
            }
        );
        let to = range(2, 37).map(
            (i) => {
                return {
                    label: `到${i}进制`,
                    value: i,
                };
            }
        );
        return (
            <>
                <br/><br/>
                <MDBContainer>
                    <MDBBtn color="info" onClick={() => that.convert()}>转换</MDBBtn>
                    <br/><br/>
                    <Select value={this.state.from} options={from} onSelect={(value) => this.setState({from: value})}></Select>
                    &nbsp;&nbsp;<span role="button" onClick={() => this.switch()} className="not-a-text text-button">&nbsp;&lt;-&gt;&nbsp;</span>&nbsp;&nbsp;
                    <Select value={this.state.to} options={to} onSelect={(value) => this.setState({to: value})}></Select>
                    <br/><br/>
                    <MDBTextArea label="请输入要转换进制的数字" onInput={(e) => {this.setState({"currentInput": e.target["value"]})}}></MDBTextArea>
                    <br/>
                    <MDBTextArea className="form-control" placeholder={"空"} value={this.state.currentOutput}></MDBTextArea>
                </MDBContainer>
            </>
        );
    }
}

