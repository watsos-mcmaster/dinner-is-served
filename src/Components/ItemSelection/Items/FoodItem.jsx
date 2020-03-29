import React, { useState } from 'react'
import { Grid, FormGroup, Checkbox, FormControl, FormControlLabel, Typography, RadioGroup, Radio } from '@material-ui/core'
import { connect, useDispatch } from 'react-redux';
import { OutlinedDiv } from '../../Styles';
import * as Actions from '../../../redux/actions';

function FoodItem({itemName, price, options}) {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(Actions.setCurrentItem(itemName, price));

        return () => {
            dispatch(Actions.resetCurrentItem);
        }
    }, [])

    function handleMultiChange(event) {
        const option = event.target.name;
        dispatch(Actions.toggleItemOption(option));
    }

    return (
        <OutlinedDiv>
            <Grid item container justify="space-between">
                <Grid item xs={6}>
                    <Typography variant="h5">{`Options for building your ${itemName.toLowerCase()}:`}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5" color="textSecondary" align="right">${price}</Typography>
                </Grid>
                {options.map((item, i) => {
                    return (
                        <Grid item key={i}>
                            <FormControl component="fieldset">
                                {item.type === "multi"
                                ? <FormGroup>
                                    {item.options.map((option, i) => {
                                        return <SelectableItem name={option} key={i} handleChange={handleMultiChange}/>
                                    })}
                                </FormGroup>
                                : <SingleGroup items={item.options}/>}
                            </FormControl>
                        </Grid>
                    )
                })}
            </Grid>
        </OutlinedDiv>
    );
}

function SingleGroup({items}) {
    const dispatch = useDispatch();
    const [value, setValue] = useState(items[0]);
    const previousValue = React.useRef("");
    
    React.useEffect(() => {
        if ( previousValue ) {
            dispatch(Actions.toggleItemOption(previousValue.current));
        }
        dispatch(Actions.toggleItemOption(value));
        previousValue.current = value;
    }, [value])

    return (
        <RadioGroup value={value} onChange={(event) => setValue(event.target.value)}>
            {items.map((option, i) => {
                return <FormControlLabel control={<Radio/>} value={option} label={option} key={i}/>
            })}
        </RadioGroup>
    )
}

function SelectableItem({name, handleChange}) {
    return (
        <FormControlLabel
            control={<Checkbox color="primary" onChange={handleChange} name={name} />}
            label={name}
        />
    )
}

function mapStateToProps(state) {
    return {
        currentItem: state.reducer.currentItem
    }
}

export default connect(
    mapStateToProps
)(FoodItem)