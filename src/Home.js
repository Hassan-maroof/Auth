import React ,{Component} from 'react';

class Home extends Component {
render() {
    return(
        <div>
            <p>Home</p> 
            <button onClick = {this.props.auth.login}>Log In</button>
        </div>
        );
    }
}

export default Home ; 