import React, { Component } from 'react'

class User extends Component {
    
    render() {
        const {user} = this.props
    
    
        return (
            <div>
                <h4>UserDetails</h4>
                <h4>{user.name}</h4>
                <h4>{user.location}</h4>
                <h4>{user.id}</h4>

            </div>
        )
    }
}
export default User;