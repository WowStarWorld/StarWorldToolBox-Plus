import React from "react";

import { MDBContainer, MDBTextArea } from "mdb-react-ui-kit";
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
};

registerTool("进制转换工具", path, "copy", "other");

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
            this.setState({ "currentOutput": (output === "NaN") ? "空" : output });
        } catch {
            this.setState({ "currentOutput": "空" });
        }
    }

    switch () { this.setState({ from: this.state.to, to: this.state.from }); }

    render () {
        let that = this;
        let numberRange = range(2, 37);
        let from = numberRange.map((i) => ({ label: `从${i}进制`, value: i }));
        let to = numberRange.map((i) => ({ label: `到${i}进制`, value: i }));
        let convertCallback = () => that.convert();
        let switchCallback = () => that.switch();
        return (
            <>
                <br/><br/>
                <MDBContainer>
                    <span title="转换" role="button" onClick={convertCallback} className="not-a-text" style={{marginRight: "1rem"}}><i className="sw-text-shadow far fa-compass" style={{marginRight: ".25rem"}}/>转换</span>
                    <Select value={this.state.from} options={from} onSelect={(value) => this.setState({from: value})}></Select>
                    <span title="切换" role="button" onClick={switchCallback} className="not-a-text text-button" style={{marginRight: "1rem", marginLeft: "1rem"}}><i className="sw-text-shadow fa fa-repeat text-hover-blue"/></span>
                    <Select value={this.state.to} options={to} onSelect={(value) => this.setState({to: value})}></Select>
                    <br/><br/>
                    <MDBTextArea label="请输入要转换进制的数字" onInput={(e) => {this.setState({"currentInput": e.target["value"]});}}></MDBTextArea>
                    <br/>
                    <MDBTextArea className="form-control" placeholder={"空"} value={this.state.currentOutput}></MDBTextArea>
                </MDBContainer>
            </>
        );
    }
}
