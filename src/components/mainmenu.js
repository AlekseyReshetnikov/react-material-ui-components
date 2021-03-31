import React from 'react';
import {NavLink} from 'react-router-dom';

export default function MainMenu(){
    const a = ["SimpleTable", "Datagrid", "BackDrop"];
    return (<div> <ul>
        {a.map((item, index)=>(
            <p>
        <NavLink key ={item}
//            className={classes.link}
            to={"/"+item}
        > {item}
                </NavLink></p>))}
            </ul>
    </div>);
}
