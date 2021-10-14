import React ,{useEffect}from 'react'
import {GET_USERS, USERS_ERROR} from '../action-types';
import axios from 'axios';


export const getUsers = () => async dispatch => {
    
    try{
        
        const res = await axios.get(`https://api.instantwebtools.net/v1/passenger?page=1&size=20`)
       
        let my =res.data.data;
        let mys=res.data.totalPassengers;
        let myres=my.map((q)=>{
           
            
            return q.airline[0]
        })
        dispatch( {
            type: GET_USERS,
            payload: myres,
            
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}