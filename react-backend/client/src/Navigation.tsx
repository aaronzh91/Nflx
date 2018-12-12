// import * as React from 'react';
// import App from './App';
// import './Navigation.css';

// class Navi extends React.Component {

    // public props: { that: App | null, page: boolean | null } = {
        // page: null,
        // that: null
    // }

    // public httpLoader(url: string) {
        // // TODO Parsing and processing data
        // const loader = new XMLHttpRequest();
        // loader.open("GET", url, true);
        // loader.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        // loader.send();
		// console.log(loader.responseText);
        // const that = this.props.that;
        // if (that) {
             // that.refreshData(loader.response);
        // }
    // }


    // public render() {
        // // TODO replace url here
        // return (
            // <div className="Navi">
                // <div className="NaviItem" onClick={this.httpLoader.bind(this, "/adventure")}><a href="#">I'm adventurous</a></div>
                // <div className="NaviItem" onClick={this.httpLoader.bind(this, "/cuddling")}><a href="#">Cuddling</a></div>
                // <div className="NaviItem" onClick={this.httpLoader.bind(this, "/brad_pitt")}><a href="#">Brad Pitt</a></div>
                // <div className="NaviItem" onClick={this.httpLoader.bind(this, "/spy_movies")}><a href="#">Spy Movies</a></div>
            // </div>
        // );
    // }
// }

// export default Navi;


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
		if (!this.props.page) {
			return (
            <div className="Navi">
                <div className="NaviItem" onClick={this.httpLoader.bind(this, "/first_date")}><a href="#">First Date</a></div>
				<div className="NaviItem" onClick={this.httpLoader.bind(this, "/horror_night")}><a href="#">Horror Night</a></div>
                <div className="NaviItem" onClick={this.httpLoader.bind(this, "/cuddling")}><a href="#">Cuddling</a></div>
                <div className="NaviItem" onClick={this.httpLoader.bind(this, "/brad_pitt")}><a href="#">Brad Pitt</a></div>
                <div className="NaviItem" onClick={this.httpLoader.bind(this, "/spy_movies")}><a href="#">Spies</a></div>
            </div>
			);
		}
		else { return (
			<div className="Navi">
                <div className="NaviItem" onClick={this.httpLoader.bind(this, "/trad/Action")}><a href="#">Action</a></div>
				<div className="NaviItem" onClick={this.httpLoader.bind(this, "/trad/Adventure")}><a href="#">Adventure</a></div>
                <div className="NaviItem" onClick={this.httpLoader.bind(this, "/trad/Animation")}><a href="#">Animated</a></div>
                <div className="NaviItem" onClick={this.httpLoader.bind(this, "/trad/Comedy")}><a href="#">Comedy</a></div>
                <div className="NaviItem" onClick={this.httpLoader.bind(this, "/trad/Crime")}><a href="#">Crime</a></div>
				<div className="NaviItem" onClick={this.httpLoader.bind(this, "/trad/Documentary")}><a href="#">Documentary</a></div>
				<div className="NaviItem" onClick={this.httpLoader.bind(this, "/trad/Drama")}><a href="#">Drama</a></div>
				<div className="NaviItem" onClick={this.httpLoader.bind(this, "/trad/Family")}><a href="#">Family</a></div>
				<div className="NaviItem" onClick={this.httpLoader.bind(this, "/trad/Fantasy")}><a href="#">Fantasy</a></div>
				<div className="NaviItem" onClick={this.httpLoader.bind(this, "/trad/Foreign")}><a href="#">Foreign</a></div>
				<div className="NaviItem" onClick={this.httpLoader.bind(this, "/trad/History")}><a href="#">History</a></div>
				<div className="NaviItem" onClick={this.httpLoader.bind(this, "/trad/Horror")}><a href="#">Horror</a></div>
				<div className="NaviItem" onClick={this.httpLoader.bind(this, "/trad/Mystery")}><a href="#">Mystery</a></div>
				<div className="NaviItem" onClick={this.httpLoader.bind(this, "/trad/Romance")}><a href="#">Romance</a></div>
				<div className="NaviItem" onClick={this.httpLoader.bind(this, "/trad/ScienceFiction")}><a href="#">SciFi</a></div>
				<div className="NaviItem" onClick={this.httpLoader.bind(this, "/trad/Thriller")}><a href="#">Thriller</a></div>
				<div className="NaviItem" onClick={this.httpLoader.bind(this, "/trad/TVMovie")}><a href="#">TV</a></div>
				<div className="NaviItem" onClick={this.httpLoader.bind(this, "/trad/War")}><a href="#">War</a></div>
				<div className="NaviItem" onClick={this.httpLoader.bind(this, "/trad/Western")}><a href="#">Western</a></div>
            </div>
		)};
			    
    }
}

export default Navi;