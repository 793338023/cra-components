import * as React from 'react';
import { withRouter, RouteComponentProps } from "react-router-dom"

export interface IAppProps extends RouteComponentProps {
}

class App extends React.PureComponent<IAppProps> {
    count = 0;
    componentDidMount() {
        console.log("xxxx");
    }

    handleClick=()=>{
        this.props.history.push(`${++this.count}`)
    }
    public render() {
        return (
            <div onClick={this.handleClick}>
                123{this.props.location.pathname}
            </div>
        );
    }
}

export default withRouter(App)