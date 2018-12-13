// import * as React from 'react';
// import './App.css';
// import Footer from './Footer';
// import ListArea from './ListArea';
// import Navi from './Navigation';

// class App extends React.Component {

  // public state = {
    // data: [],
    // page: false
  // }

  // public refreshData(d: any) {
    // this.setState({ data: d })
  // }

  // public changePages(b: boolean) {
    // this.setState({ page: b });
  // }

  // public render() {
    // // TODO To display different page, modify the content of Navi and ListArea based on the value of page
    // return (
      // <div className="App">
        // <header className="App-header">
          // <h1 className="App-title">{this.state.page ? "Tradition" : "Snuggle"}</h1>
        // </header>
        // <div className="mood"><i>In the mood for...</i></div>
        // <Navi that={this} page={this.state.page} />
        // <ListArea data={this.state.data} page={this.state.page} />
        // <Footer that={this} />
      // </div>
    // );
  // }
// }

// export default App;

import * as React from 'react';
import './App.css';
import Footer from './Footer';
import ListArea from './ListArea';
import Navi from './Navigation';
import SearchBox from './SearchBox';
// import SearchBox from './SearchBox';


class App extends React.Component {

  public state = {
    data: [],
    page: false
  }
  
  public refreshData(url: string) {
	  fetch(url)
		.then(res => res.json())
		.then(json => {
			this.setState({
				data: json
			})
		});
  }
  
  public refreshDataPost(content: string) {
		const contentJson = {val: content};
		console.log("Fetching: " + JSON.stringify(contentJson));
		fetch('/search/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(contentJson)
		})
			.then(res => res.json())
			.then(json => {
				this.setState({
				data: json
				})
			});
  }

  public changePages =(b: boolean) =>{
    this.setState({ data: [], page: b });
  }
  

  public render() {
    // TODO To display different page, modify the content of Navi and ListArea based on the value of page
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><a href="/">{this.state.page ? "Traditional" : "Snuggle"}</a></h1>
        </header>
        <div className="mood"><i>In the mood for...</i></div>
        <Navi that={this} page={this.state.page} />
		<SearchBox that={this} />
        <ListArea data={this.state.data} page={this.state.page} />
        <Footer that={this} />
      </div>
    );
  }
}

export default App