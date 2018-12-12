import * as React from 'react';
import App from './App';
import './Footer.css';

class Footer extends React.Component {

    public props: { that: App | null } = {
        that: null
    }

    public changePages(bool: boolean) {
        const that = this.props.that;
        if (that) {
            that.changePages(bool);
        }
    }

    public render() {
        return (
            <div className="Footer" style={{ width: "80%", marginLeft: "10%" }}>
                <div>Find movies by:</div>
                <div onClick={this.changePages.bind(this, false)}><a href="#">Snuggle Tags</a></div>
                <div onClick={this.changePages.bind(this, true)}><a href="#">Traditional Search</a></div>
            </div>
        );
    }
}

export default Footer;