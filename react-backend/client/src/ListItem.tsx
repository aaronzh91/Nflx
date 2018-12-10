import * as React from 'react';
import './ListItem.css';

class ListItem extends React.Component {
    public props = {
        link: "",
        src: "",
        title: ""
    };

    public hover() {
        // TODO show plot overview
    }

    public out() {
        // TODO hide something what is being displayed
    }

    public render() {
        return (
            <div className="ListItem">
                <div className="title">{this.props.title}</div>
                <a href={this.props.link}><img className="img" src={this.props.src} onMouseOver={this.hover} onMouseOut={this.out} /></a>
            </div>
        );
    }
}

export default ListItem;