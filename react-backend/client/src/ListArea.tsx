import * as React from 'react';
import './ListArea.css';
import ListItem from './ListItem';

class ListArea extends React.Component {

    public props: { data: Array<{ link: string, src: string, title: string }>, page: boolean | null } = {
        data: [],
        page: null
    };

    public render() {
        return (
            <div className="ListArea" id="listArea">
                {/* {this.state.data.map((item) =>
                    <ListItem src={item.src} link={item.link} title={item.title} key={item.title} />
                )} */}
                {this.props.data.map((item) =>
                    <ListItem src={item.src} link={item.link} title={item.title} key={item.title} />
                )}
            </div>
        );
    }
}

export default ListArea;