import React, {Component} from 'react';
// import PropTypes from 'prop-types';

const App = () => {
  // const profiles = [
  //   {
  //     name: "Taro", age: 10
  //   },
  //   {
  //     name: "Hanako", age: 20
  //   },
  //   {
  //     name: "noname"
  //   }
  // ]
  return (
    // <div>
    //   {
    //     profiles.map((profile, index) => {
    //       return <User name={profile.name} age={profile.age} key={index} />
    //     })
    //   }
    //   {/* <User name={"Taro"} age={10}/>
    //   <User name={"Hanako"} age={20}/> */}
    // </div>
    <Counter></Counter>
  )
}

// const User = (props) => {
//   return <div>Hi I'm {props.name}, and {props.age} years old!</div>
// }

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = { count: 0 }
  }
  
  handlePlusCount = () => {
    // const Count = this.state.count;
    this.setState({count: this.state.count + 1})
  }
  
  handleMinusCount = () => {
    // const Count = this.state.count;
    this.setState({count: this.state.count - 1})
  }

  render() {
    console.log("render")
    return(
      <React.Fragment>
        <div>Count: { this.state.count } </div>
        <button onClick={this.handlePlusCount}>+1</button>
        <button onClick={this.handleMinusCount}>-1</button>
      </React.Fragment>
    )
  }
}

// User.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
// }
// User.defaultProps = {
//   age: 1
// }

export default App;
