import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';
import SaladItem from './Items/SaladItem';
import SmoothieItem from './Items/SmoothieItem';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateCartItem } from '../../redux/actions';
import BurgerItem from './Items/BurgerItem';
import PizzaItem from './Items/PizzaItem';
import ChickenItem from './Items/ChickenItem';
import CoffeeItem from './Items/CoffeeItem';
import BeerItem from './Items/BeerItem';
import MartiniItem from './Items/MartiniItem';
import IceCreamItem from './Items/IceCreamItem';
import CakeItem from './Items/CakeItem';

export default function ItemContainer() {
    const dispatch = useDispatch();
    const history = useHistory();
    const cartIndex = useSelector(state => state.reducer.cartIndex);

    function handleClick() {
        if (cartIndex !== undefined) {
            dispatch(updateCartItem(cartIndex));
            history.push("/cart");
        } else {
            dispatch(addToCart);
            history.push("/");
        }
    }

    return (
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <Typography variant="h3" color="primary">Customize your meal!</Typography>
            </Grid>
            <Grid container item xs={8} spacing={2}>
                <Grid item>
                    <Switch>
                        <Route path="/item/salad" component={SaladItem}/>
                        <Route path="/item/smoothie" component={SmoothieItem}/>
                        <Route path="/item/hamburger" component={BurgerItem}/>
                        <Route path="/item/pizza" component={PizzaItem}/>
                        <Route path="/item/friedchicken" component={ChickenItem}/>
                        <Route path="/item/coffee" component={CoffeeItem}/>
                        <Route path="/item/beer" component={BeerItem}/>
                        <Route path="/item/martini" component={MartiniItem}/>
                        <Route path="/item/icecream" component={IceCreamItem}/>
                        <Route path="/item/cake" component={CakeItem}/>
                    </Switch>
                </Grid>
                <Grid item container justify="flex-end">
                    <Button variant="contained" color="primary" onClick={handleClick}>{cartIndex !== undefined ? "Update Item" : "Add to Cart"}</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}