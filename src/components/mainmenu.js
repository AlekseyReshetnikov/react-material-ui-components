import React from 'react';
import {NavLink} from 'react-router-dom';

export default function MainMenu(){
    const a = ["SimpleTable", "Datagrid", "BackDrop",
    "LabelBottomNavigation"];
    return (<div> <ul>
        {a.map((item, index)=>(
            <p key={item}>
        <NavLink key ={item}
//            className={classes.link}
            to={"/components/"+item}
        > {item}
                </NavLink></p>))}
            </ul>
    </div>);
}
