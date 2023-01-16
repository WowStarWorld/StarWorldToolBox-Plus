import React from "react";

import { MDBContainer, MDBInputGroup } from "mdb-react-ui-kit";
import { FloatButton, Select, Tabs } from "antd";
import { RestOutlined } from "@ant-design/icons";

import * as config from "../../config";

export const path = "/settings";

export function render () {
    return (
        <Component/>
    );
}

export default {
    render, path
}

export class Component extends React.Component {

    getItems () {
        let positions = [
            { label: "左", value: "left" },
            { label: "右", value: "right" },
            { label: "上", value: "top" },
            { label: "下", value: "bottom" }
        ];
        return [
            {
                label: "常规",
                children: (
                    <>
                        <MDBInputGroup textBefore="工具箱标题:" noBorder>
                            <input
                                className='form-control rounded' type='text'
                                defaultValue={config.getStorageItem("general.title", "StarWorld 工具箱")}
                                onInput={(value) => config.setStorageItem("general.title", value.target["value"])}
                            />
                        </MDBInputGroup><br/>
                        <MDBInputGroup textBefore="选项卡位置:" noBorder>
                            <Select
                                options={positions}
                                defaultValue={config.getStorageItem("general.tabs.position", "left")}
                                onSelect={(value) => config.setStorageItem("general.tabs.position", value)}
                            />
                        </MDBInputGroup>
                    </>
                )
            }
        ].map(
            (value, index) => {
                return {
                    label: value.label,
                    children: value.children,
                    key: index
                }
            }
        );
    }

    render () {
        let that = this;
        return (
            <>
                <br/><br/>
                <MDBContainer>
                    <Tabs items={this.getItems() as any} tabPosition={config.getStorageItem("general.tabs.position", "left")}/>
                </MDBContainer>
                <FloatButton icon={<RestOutlined/>} tooltip="重置" style={{right: 80}} onClick={() => {localStorage.clear(); location.reload();}}/>
            </>
        );
    }
}

