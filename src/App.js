// create your App component here
import React from 'react';

class App extends React.Component {
   state = {
       peopleInSpace: []
   }
   
    render(){
    return(
        <h1>Hi!</h1>
    )
   }

   componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            this.setState({
                peopleInSpace: data.people
            })
            console.log(data)
        })
   }
   
}
export default App;