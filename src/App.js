import React, {Component} from 'react';
import './App.css';
import logo from './logo.jpg'
import video from './hypeVideo.mp4'

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {sample: 'Beat ❌ichigan', newValue : ""
  };
  this.handleClick = this.handleClick.bind(this);

  }
handleClick = (event) => {

//for(int i =0; i<)
var i;
var temp = event.target.value;

for (i =0; i < temp.length; i++){
  if(temp.charAt(i) === 'M'){
    temp = temp.replace("M",'❌');
    console.log(temp);
    
  }
  if(temp.charAt(i) === 'm'){
    temp = temp.replace("m","❌");
    console.log(temp);
  }
}

console.log(temp);


this.setState({
  sample:  temp
});
}

render(){
  return (
    <div className="App">
      <img src={logo} alt="logo"  height="200"  padding-bottom= "150px"/>
      <input
         className="textField"
          type="text"
          size="50"
          placeholder= {this.state.sample}
          onChange= {this.handleClick}
          value = {this.state.value}
        />
        <div className="textMain">{this.state.sample}</div>
  <div className="videoBox"><iframe width="350" height="300" frameBorde= "0" border-width = "0px"
        src={video}>
</iframe></div>
    </div>
  );
}
}