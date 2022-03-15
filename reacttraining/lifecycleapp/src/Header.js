import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component {
    
    constructor(props) {
        console.log('constructor')
      super(props);
      this.state = {favoritecolor: "red"};
      
    }
  
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')
        return {favoritecolor: props.favcol };

    }
  

    componentDidMount() {
        console.log('component Did mount')
        setInterval(() => {
            console.log('set interval')
          this.setState({favoritecolor: "blue"})
        }, 5000)
      }

    render() {
      return (
          <div>{console.log('render')}
                  <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                  </div>
      );
    }
  }