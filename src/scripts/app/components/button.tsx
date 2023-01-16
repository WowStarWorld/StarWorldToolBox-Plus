import React from "react";

import { MDBTextArea, MDBInput } from "mdb-react-ui-kit";
import { FloatButton, Modal } from "antd";
import { SyncOutlined, PlusCircleOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

import { githubURL } from "../config";

export interface ButtonsProps {
    modalIssues: boolean;
    modalIssuesTitle: string;
    modalIssuesContent: string;
}

export class AppButtons extends React.Component<any, ButtonsProps> {

    constructor (props) {
        super (props);
        this.state = {
            modalIssues: false,
            modalIssuesContent: "",
            modalIssuesTitle: ""
        };
    }

    render() {
        let that = this;
        let submit = () => {
            that.setState({modalIssues: false});
            window.open(
                `${githubURL}/issues/new?body=${encodeURI(that.state.modalIssuesContent)}&title=${encodeURI(that.state.modalIssuesTitle)}`
            );
        };
        return (
            <>
                <FloatButton.Group trigger="click" icon={<PlusCircleOutlined/>}>
                    <FloatButton icon={<ExclamationCircleOutlined />} onClick={() => this.setState({modalIssues: !this.state.modalIssues})}/>
                    <FloatButton icon={<SyncOutlined/>} onClick={() => location.reload()}/>
                    <FloatButton.BackTop visibilityHeight={0}/>
                </FloatButton.Group>
                <Modal title="反馈" okButtonProps={{className: "shadow border-0",}} cancelButtonProps={{className: "shadow border-0"}} open={this.state.modalIssues} onCancel={() => this.setState({modalIssues: false})} onOk={submit}>
                    <br/><MDBInput label="标题" onInput={(e) => this.setState({modalIssuesTitle: e.target["value"]})}/><br/>
                    <MDBTextArea label="内容"  onInput={(e) => this.setState({modalIssuesContent: e.target["value"]})}/>
                </Modal>
            </>
        );
    }
}

export default AppButtons;
