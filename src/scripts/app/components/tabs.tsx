import React from "react";

import { Tabs } from "antd";
import { MDBContainer, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { getStorageItem } from "../config";

export interface RandomIconProps {
    list: Array<string>;
    timeout: number;
}

export interface RandomIconStates {
    currentText: string;
}

// 随机MDBIcon图标
export class RandomIconComponent extends React.Component<RandomIconProps, RandomIconStates> {

    public id: number;

    constructor (props) {
        super (props);
        this.state = { currentText: props.list[Math.floor((Math.random() * props.list.length))] };
    }

    componentDidMount () {
        let that = this;
        let list = this.props.list; // 创建计时器
        this.id = setInterval(() => that.setState({ currentText: list[Math.floor((Math.random() * list.length))] }), this.props.timeout) as any;
    }

    componentWillUnmount () { try { clearInterval(this.id); } catch {} /* 销毁 */ }

    render () { return <MDBIcon icon={this.state.currentText} />; /* 渲染 */ }
}

export const AllCategories: {[index: string]: {title: string | JSX.Element, children: any[]}} = {
    all: {
        title: <><RandomIconComponent list={['earth-africa', 'earth-americas', 'earth-asia', 'earth-europe', 'earth-oceania']} timeout={250}/> 全部工具</>,
        children: [],
    },
    programming: {
        title: <><MDBIcon icon="code"/> 编程工具</>,
        children: [],
    },
    other: {
        title: <><MDBIcon icon="cube"/> 其他工具</>,
        children: [],
    }
};

export function registerTool (buttonName: string, path: string, icon: string[] | string = null, category: string = null, customProps: any = {}) {
    let iconList: string[] = (typeof icon === "string") ? [icon] : icon;
    let iconElement = (iconList.length == 1) ? <MDBIcon icon={iconList[0]}/> : <RandomIconComponent list={iconList} timeout={250}/>;
    let callback = (index) => (
        <MDBBtn key={index} onClick={ () => location.hash = path } style={
            { textTransform: "none", marginRight: ".4rem", marginTop: ".4rem" }
        } {...customProps}>
            { icon ? (<>{iconElement}&nbsp;</>) : "" }{ buttonName }
        </MDBBtn>
    );
    if (typeof category === "string" && category in AllCategories) {
        AllCategories[category].children.push(callback);
    }
    AllCategories["all"].children.push(callback);
    return callback;
}

export interface TabProps {
    appid: string;
}

export class AppTabs extends React.Component<TabProps, any> {
    getItems () {
        return Object.values(AllCategories).map(
            (value, index) => {
                let children: JSX.Element[] = value.children.map(
                    (_value, _index) => _value(_index)
                );
                if (children.length <= 0) children = [ <h4 key={0}>暂无内容</h4> ];
                return {
                    label: (<>&nbsp;&nbsp;{value.title}&nbsp;&nbsp;</>),
                    children: (
                        <>{...children}</>
                    ),
                    key: `${this.props.appid}-tabs-${index}`
                };
            }
        );
    }

    render () {
        return (
            <MDBContainer>
                <Tabs tabPosition={getStorageItem("general.tabs.position", "left")} items={this.getItems()}/>
            </MDBContainer>
        );
    }

}

export default AppTabs;
