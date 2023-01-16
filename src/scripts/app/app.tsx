import React from "react";

import AppNavbar from "./components/navbar";
import AppTabs from "./components/tabs";
import AppButtons from "./components/button";

import CurrentPage from "./pages/all";

export interface AppProperties {
    container: JQuery;
}

export class App extends React.Component<AppProperties> {

    public readonly state: {
        // GUI
        showNavbarBasic: boolean;
    }

    public id: string;

    constructor (props) {
        super (props);
        this.id = `app-${new Date().getTime()}`;
        this.state = {
            showNavbarBasic: false,
        };
    }

    componentDidMount() {
        let that = this;
    }

    render () {
        let that = this;
        return (
            <>
                <AppNavbar appid={this.id}/>
                {
                    (location.hash.length < 2) ? (
                        <>
                            <br/><br/><AppTabs appid={this.id}/>
                        </>
                    ) : CurrentPage
                }
                <AppButtons/>
            </>
        );
    }
}
export default App;
