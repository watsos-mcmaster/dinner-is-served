import React from 'react'
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid, Paper, Typography, List, ListItem, Button, makeStyles } from '@material-ui/core';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import { removeFromCart, completePurchase } from '../../redux/actions';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width: '50vw',
  },
}));

function ShoppingCart({items}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  function handleClick(index) {
    dispatch(removeFromCart(index));
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
              <Grid container spacing={2} alignItems="center" justify="space-between">
                <Grid item>
                  <Typography variant="h4" style={{ fontWeight: 600 }}>{item.name}</Typography>
                  <Typography variant="h5" color="textSecondary">${item.price}</Typography>
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
                <Grid item>
                  <Button variant="contained" color="primary" onClick={() => handleClick(i)}><HighlightOffOutlinedIcon/> Remove Item</Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        )
      })}
      <Grid container direction="column" alignItems="flex-end">
        <Grid item xs={4}>
          <Typography variant="h5">Total price: ${sumPrices()}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary" disabled={items.length===0} onClick={handleFinalize}>Finalize Purchase</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

function mapStateToProps(state) {
  return {
    items: state.reducer.cart
  }
}

export default connect(
  mapStateToProps
)(ShoppingCart)