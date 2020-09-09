import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid, Paper, Typography, List, ListItem, Button, makeStyles, useTheme, useMediaQuery } from '@material-ui/core';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { removeFromCart, completePurchase, setCurrentItem, setCartIndex } from '../../redux/actions';

const useStyles = makeStyles((theme) => ({
  paper: props => ({
    padding: theme.spacing(2),
    margin: 'auto',
    width: props.isMobile ? '70vw' : '50vw',
  }),
}));

export default function ShoppingCart() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles({isMobile});
  const dispatch = useDispatch();
  const items = useSelector(state => state.reducer.cart);
  const history = useHistory();

  function handleClick(index) {
    dispatch(removeFromCart(index));
  }

  function handleEdit(index) {
    dispatch(setCartIndex(index));
    dispatch(setCurrentItem(items[index].name, items[index].price, items[index].options));
    history.push(`/item/${items[index].name.toLowerCase()}`);
  }

  function handleFinalize() {
    dispatch(completePurchase);
    history.push("/thanks");
  }

  function sumPrices() {
    return items.reduce(function (acc, obj) { return acc + obj.price; }, 0);
  }

  return (
    <Grid container justify="center" spacing={2}>
      {items.length === 0 && <Typography variant="h2" align="center">Nothing here!</Typography>}
      {items.map((item, i) => {
        return (
          <Grid item key={i}>
            <Paper className={classes.paper}>
              <Grid container spacing={2} alignItems="center">
                <Grid item container justify="space-between">
                  <Typography variant="h4" style={{ fontWeight: 600 }} display="inline">{item.name}</Typography>
                  <Typography variant="h5" color="textSecondary" display="inline">${item.price}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6" className={classes.title}>
                    Selected options:
                  </Typography>
                  <List dense>
                    {item.options.length === 0 && <ListItem><Typography color="textSecondary">N/A</Typography></ListItem>}
                    {item.options.map((option, i) => {
                      return (
                        <ListItem key={i}>
                          <Typography color="textSecondary">{option}</Typography>
                        </ListItem>
                      )
                    })}
                  </List>
                </Grid>
                <Grid item container md={4} xs={12} spacing={2} justify="center">
                  <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={() => handleEdit(i)} startIcon={<EditOutlinedIcon/>} fullWidth> Edit Item</Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={() => handleClick(i)} startIcon={<HighlightOffOutlinedIcon/>} fullWidth> Remove Item</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        )
      })}
      <Grid container direction="column" alignItems="flex-end">
        <Grid item xs>
          <Typography variant="h5">Total price: ${sumPrices()}</Typography>
        </Grid>
        <Grid item xs>
          <Button variant="contained" color="primary" disabled={items.length===0} onClick={handleFinalize}>Finalize Purchase</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}