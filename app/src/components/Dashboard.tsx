import React, {useContext} from "react";
import {UserContext} from "../contexts/UserContext";
import {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {update, reset} from "../redux/habitsReducer";
import {databaseObserver } from "../firebase/utils";
import { Navigate } from "react-router-dom";
import { Link} from "react-router-dom";

const Dashboard = () => {
    
    const user: any = useContext(UserContext);
    const {data: habits}: any = useSelector((state: any) => state.habits);

    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = databaseObserver(user.uid, (data: any) => {
          if(data) {
            const habits = {...data.habits};
            dispatch(update(habits));
          }
            
      
          
        } );
        return () => {
          unsubscribe();
          dispatch(reset());
        };

    }, []);

      const renderHabits = (habits: any) => {
        console.log("habit", "||", habits);
        const list = Object.keys(habits);
        return (<ol>
          {list.map(el => <li key={el}>{el}</li>)}
          </ol>)
      };
     
    
    if(!user) {
        return <Navigate to="/" />
    }  
    return (
        <div>
          <h1>Dashboard</h1>
            <p>{user?.uid ? user.uid : "noyser"}</p>
            {renderHabits(habits)}
        </div>
    )
};

export default Dashboard;