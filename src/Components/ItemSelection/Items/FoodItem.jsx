import React, { useState } from 'react'
import { Grid, FormGroup, Checkbox, FormControl, FormControlLabel, Typography, RadioGroup, Radio } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { OutlinedDiv } from '../../Styles';
import * as Actions from '../../../redux/actions';

export default function FoodItem({itemName, price, options}) {
    const dispatch = useDispatch();
    const currentOptions = useSelector(state => state.reducer.currentItem.options);

    React.useEffect(() => {
        if (currentOptions.length === 0) {
            dispatch(Actions.setCurrentItem(itemName, price));
        }

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
                                        return <SelectableItem name={option} key={i} handleChange={handleMultiChange} currentOptions={currentOptions}/>
                                    })}
                                </FormGroup>
                                : <SingleGroup items={item.options} currentOptions={currentOptions}/>}
                            </FormControl>
                        </Grid>
                    )
                })}
            </Grid>
        </OutlinedDiv>
    );
}

function SingleGroup({items, currentOptions}) {
    const dispatch = useDispatch();
    const selectedOption = currentOptions.map(option => items.indexOf(option)).find(index => index > -1);
    const [value, setValue] = useState(selectedOption ? items[selectedOption] : items[0]);
    const [previousValue, setPreviousValue] = useState("");
    
    React.useEffect(() => {
        const previousIndex = currentOptions.indexOf(previousValue);
        if ( previousValue && previousIndex > -1) {
            dispatch(Actions.toggleItemOption(previousValue));
        }
        if ( previousValue || selectedOption === undefined) {
            dispatch(Actions.toggleItemOption(value));
        }
        setPreviousValue(value);
    }, [value])

    return (
        <RadioGroup value={value} onChange={(event) => setValue(event.target.value)}>
            {items.map((option, i) => {
                return <FormControlLabel control={<Radio/>} value={option} label={option} key={i}/>
            })}
        </RadioGroup>
    )
}

function SelectableItem({name, handleChange, currentOptions}) {
    return (
        <FormControlLabel
            control={<Checkbox color="primary" checked={currentOptions.indexOf(name) > -1} onChange={handleChange} name={name} />}
            label={name}
        />
    )
}