import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';
import logo from'../../assets/sp.jpg';
import useStyles from './styles';
import {Link, useLocation } from 'react-router-dom';
const Navbar=({totalItems})=>{
    const classes=useStyles();
    const location=useLocation();
   
    return(
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to ="/" variant="h6" className={classes.title} color="inherit">
                      <img src={logo} alt="Spartistics" height="25px" className={classes.img}/>
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                    <IconButton component={Link} to ="/cart"arial-label="Shpping cart"  color="inherit">
                        <Badge badgeContent ={totalItems} color="secondary">
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                    </div>
                    </Toolbar> 
            </AppBar>
        </>
    )

}
export default Navbar;