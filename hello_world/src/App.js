import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    {
      name: "Taro", age: 10
    },
    {
      name: "Hanako", age: 20
    },
    {
      name: "noname"
    }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
      {/* <User name={"Taro"} age={10}/>
      <User name={"Hanako"} age={20}/> */}
    </div>
  )
}

const User = (props) => {
  return <div>Hi I'm {props.name}, and {props.age} years old!</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
// User.defaultProps = {
//   age: 1
// }

export default App;
