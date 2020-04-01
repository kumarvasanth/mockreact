import React from "react";
import UserList from "./userlist";


class User extends React.Component{
    state={

        Users:[]

    }
    componentDidMount(){
        fetch("http://localhost:5000/members")
        .then(response=>response.json())
        .then(data=>{
            
            this.setState({Users:data})
        })
    }
    render(){
               return( 
                this.state.Users.map(user=>{
                      return (<div>
                          <UserList user={user} key={user.id}></UserList>
                      
                      </div>);
                   })
               )
            
            
    }
    
}export default User;