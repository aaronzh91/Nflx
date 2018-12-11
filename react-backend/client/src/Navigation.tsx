import * as React from 'react';
import App from './App';
import './Navigation.css';

class Navi extends React.Component {

    public props: { that: App | null, page: boolean | null } = {
        page: null,
        that: null
    }

    public httpLoader(url: string) {
        // TODO Parsing and processing data
        const loader = new XMLHttpRequest();
        loader.open("POST", url, true);
        loader.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        loader.send();
        const that = this.props.that;
        if (that) {
            that.refreshData(loader.response);
            // that.refreshData([{
                // link: "https://www.qq.com",
                // src: "https://img5.duitang.com/uploads/item/201601/08/20160108212022_YPkGR.jpeg",
                // title: "1",
            // }]);
        }
    }

    public render() {
        // TODO replace url here
        return (
            <div className="Navi">
                <div className="NaviItem" onClick={this.httpLoader.bind(this, "url")}><a href="#">Crying in bed</a></div>
                <div className="NaviItem" onClick={this.httpLoader.bind(this, "url")}><a href="#">Cuddling</a></div>
                <div className="NaviItem" onClick={this.httpLoader.bind(this, "/brad_pitt")}><a href="#">Brad Pitt</a></div>
                <div className="NaviItem" onClick={this.httpLoader.bind(this, "url")}><a href="#">Spy Movies</a></div>
            </div>
        );
    }
}

export default Navi;