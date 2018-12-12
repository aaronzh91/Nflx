import * as React from 'react';
// import './SearchBox.css';
import App from './App';

// export interface MyProps {}

export interface IAppProp {
	that: App; 
}

class SearchBox extends React.Component <IAppProp, {value: string}> {
  constructor(props:any) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
	
  public handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  public handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    
	let content = this.state.value;
	if (this.props.that) {
			console.log("Searched for:" + content);
			if (content.indexOf('\'') >= 0) {
				content = content.replace(/'/g, '\\\'');
			}
			this.props.that.refreshDataPost(content);
	}
	event.preventDefault();
  }

  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Plot Search:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchBox;
