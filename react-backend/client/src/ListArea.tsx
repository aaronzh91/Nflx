import * as React from 'react';
import './ListArea.css';
import ListItem from './ListItem';

class ListArea extends React.Component {

    public props : { data: Array<{ IMDB_ID: string, movie_imdb_link: string, title: string, poster_path: string, overview: string }> | null, page: boolean | null } = {
        data: [{IMDB_ID: "", movie_imdb_link: "", title: "", poster_path: "", overview: ""}], 
		page: null
    };

    public render() {
        return (
            <div className="ListArea" id="listArea">
				{/* {this.state.data.map((item) =>
                    <ListItem src={item.src} link={item.link} title={item.title} key={item.title} />
				)} */}
                {this.props.data!.map((item) =>
                    <ListItem IMDB_ID={item.IMDB_ID} movie_imdb_link={item.movie_imdb_link} title={item.title} poster_path={item.poster_path} overview={item.overview} key={item.IMDB_ID} />
                )}
            </div>
        );
    }
}



export default ListArea;
