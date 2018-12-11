import * as React from 'react';
import './ListItem.css';

class ListItem extends React.Component {
    public props = {
        IMDB_ID: "",
		movie_imdb_link: "",
        title: "",
		poster_path: "",
		overview: ""
    };

    public hover() {
        // TODO show plot overview
    }

    public out() {
        // TODO hide something what is being displayed
    }

    public render() {
		var imglink = "http://image.tmdb.org/t/p/w185/" + this.props.poster_path;
        return (
            <div className="ListItem">
                <div className="title">{this.props.title}</div>
                <a href={this.props.movie_imdb_link}><img className="img" src={imglink} onMouseOver={this.hover} onMouseOut={this.out} /></a>
            </div>
        );
    }
}

export default ListItem;