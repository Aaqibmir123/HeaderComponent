import { Fragment, useState } from "react"
import classes from './Header.module.css';
import res from './meals.jpg';
import Button from "./Button";
const Header =props=>{
    const [button,setbutton]=useState(0);

    const chage=()=>{
        setbutton(button+1);
    }
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <Button />
            </header>
            <div className="classes['main-image]">
               <img src={res} alt="not found" />
            </div>
        </Fragment>
    )

}

export default Header;