import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUsers} from './actionPagi';
import {nanoid} from 'nanoid';

 class users extends Component {
    componentDidMount(){
        this.props.getUsers()
        
    }
    render() {
        const mm = this.props.a;
        
       

        
        return (
            <div>
                {mm.map(u => 
                     <React.Fragment key={nanoid()}>
                         <h6 >{u.name}</h6> 
                     </React.Fragment>
                )}
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({
    a:state.rA.users,
    
})

export default connect(mapStateToProps, {getUsers})(users)