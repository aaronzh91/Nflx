import * as React from 'react';
import App from './App';
import './Navigation.css';

export interface INaviProp {
	page: boolean; 
	that: App; 
}

class Navi extends React.Component <INaviProp>{

	 constructor(props:any) {
			super(props); 
	}
		
    public httpLoader = (url: string)=> {
		if (this.props.that) {
			this.props.that.refreshData(url);
		}
    }

    public render() {
        // TODO replace url here
        return (
            <div className="Navi">
                <div className="NaviItem" onClick={this.httpLoader.bind(this, "/adventure")}><a href="#">I'm adventurous</a></div>
                <div className="NaviItem" onClick={this.httpLoader.bind(this, "/cuddling")}><a href="#">Cuddling</a></div>
                <div className="NaviItem" onClick={this.httpLoader.bind(this, "/brad_pitt")}><a href="#">Brad Pitt</a></div>
                <div className="NaviItem" onClick={this.httpLoader.bind(this, "/spy_movies")}><a href="#">Spy Movies</a></div>
            </div>
        );
    }
}

export default Navi;