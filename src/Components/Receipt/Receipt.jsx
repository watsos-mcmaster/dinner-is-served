import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      width: '50%',
    },
  }));

function Receipt({purchase}) {
    const classes = useStyles();

    function sumPrices() {
        return purchase.reduce(function (acc, obj) { return acc + obj.price; }, 0);
    }

    function calculatePickupTime() {
        const date = new Date();
        const minutes = Math.floor(Math.random() * 40);
        const updatedDate = new Date(date.getTime() + 60000*minutes);

        return updatedDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    }

    return (
        <Grid container direction="column" spacing={1}>
            {purchase.length > 0 ?
                <React.Fragment>
                    <Grid item xs={12}>
                        <Typography variant="h3">Thank you for your order!</Typography>
                        <Typography variant="h5">It will be ready for pickup at: {calculatePickupTime()}.</Typography>
                    </Grid>
                    {purchase.map((item, i) => {
                        return (
                            <Grid item>
                                <Paper className={classes.paper} key={i}>
                                    <Grid container justify="space-between">
                                        <Grid item xs={6}>
                                            <Typography style={{fontWeight: 600}}>{item.name}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography>${item.price}</Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        )
                    })}
                    <Grid item xs={6}>
                        <Typography variant="h5" align="right">Total paid: ${sumPrices()}</Typography> 
                    </Grid>
                </React.Fragment>
            : <React.Fragment>
                <Typography variant="h3">Thanks for thinking about making an order!</Typography>
                <Typography color="textSecondary">Cheapskate</Typography>
            </React.Fragment>}
        </Grid>
    )
}

function mapStateToProps(state) {
    return {
        purchase: state.reducer.purchase
    }
}

export default connect(
    mapStateToProps
)(Receipt)