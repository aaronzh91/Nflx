import * as React from 'react';
import './App.css';
import Footer from './Footer';
import ListArea from './ListArea';
import Navi from './Navigation';


class App extends React.Component {

  public state = {
    data: [],
    page: false
  }

  public refreshData(url: string) {
        // TODO Parsing and processing data
        const loader = new XMLHttpRequest();
        // loader.open("GET", "/spy_movies", true);
		loader.open("GET", url, true);
        loader.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        loader.send();
		console.log(loader.response);
		
        if (loader.response) {
			console.log(loader.response);
        }
		
		
		this.setState({ data: loader.response });
  }

  public changePages =(b: boolean) =>{
    this.setState({ page: b });
  }

  public render() {
    // TODO To display different page, modify the content of Navi and ListArea based on the value of page
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.page ? "Tradition" : "Snuggle"}</h1>
        </header>
        <div className="mood"><i>In the mood for...</i></div>
        <Navi that={this} page={this.state.page} />
        <ListArea data={this.state.data} page={this.state.page} />
        <Footer that={this} />
      </div>
    );
  }
}

export default App;