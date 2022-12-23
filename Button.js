import { Fragment } from "react";
import classes from './Header.module.css';

const Button=()=>{

    return(
        <Fragment>
            <header className={classes.button}>
                <span>Your Cart</span>
                <span className={classes.badge}>0</span>
            </header>
        </Fragment>

    )
}
export default Button;