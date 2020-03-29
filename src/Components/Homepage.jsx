import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, 
  faBlender, 
  faHamburger,
  faPizzaSlice,
  faDrumstickBite,
  faCoffee,
  faBeer,
  faGlassMartiniAlt,
  faIceCream,
  faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { PaddedDiv, ClickablePaper, OutlinedDiv } from './Styles';

function FoodSection({sectionTitle, children}) {
  return (
    <React.Fragment>
      <Grid item>
        <Typography variant="h5">{sectionTitle}</Typography>
      </Grid>
      <Grid item xs={12}>
        <OutlinedDiv>
          <Grid container item spacing={9}>
            {children}
          </Grid>
        </OutlinedDiv>
      </Grid>
    </React.Fragment>
  )
}

function FoodItem({name, icon, color, id}) {
  const history = useHistory();
  return (
    <Grid item>
      <ClickablePaper onClick={() => history.push(`/item/${id}`)}>
        <PaddedDiv>
          <FontAwesomeIcon icon={icon} color={color} size="7x"/>
          <Typography align="center">{name}</Typography>
        </PaddedDiv>
      </ClickablePaper>
    </Grid>
  )
}

export default function Homepage() {
  return (
    <Grid container spacing={2}>
      <Grid item container>
        <Typography variant="h3" color="primary">Select a menu item</Typography>
      </Grid>
      <FoodSection sectionTitle="Healthy Options">
        <FoodItem name="Salad" icon={faLeaf} color="green" id="salad"/>
        <FoodItem name="Smoothie" icon={faBlender} color="green" id="smoothie"/>
      </FoodSection>
      <FoodSection sectionTitle="Dinner Options">
        <FoodItem name="Hamburger" icon={faHamburger} color="orange" id="hamburger"/>
        <FoodItem name="Pizza" icon={faPizzaSlice} color="orange" id="pizza"/>
        <FoodItem name="Fried Chicken" icon={faDrumstickBite} color="orange" id="friedchicken"/>
      </FoodSection>
      <FoodSection sectionTitle="Drinks">
        <FoodItem name="Coffee" icon={faCoffee} color="blue" id="coffee"/>
        <FoodItem name="Beer" icon={faBeer} color="blue" id="beer"/>
        <FoodItem name="Martini" icon={faGlassMartiniAlt} color="blue" id="martini"/>
      </FoodSection>
      <FoodSection sectionTitle="Dessert">
        <FoodItem name="Ice Cream" icon={faIceCream} color="brown" id="icecream"/>
        <FoodItem name="Cake" icon={faBirthdayCake} color="brown" id="cake"/>
      </FoodSection>
    </Grid>
  )
}