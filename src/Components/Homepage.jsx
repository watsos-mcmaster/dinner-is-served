import React from 'react';
import { Grid, Typography, useTheme, useMediaQuery } from '@material-ui/core';
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

function FoodSection({sectionTitle, isMobile, children}) {
  return (
    <React.Fragment>
      <Grid item>
        <Typography variant="h5">{sectionTitle}</Typography>
      </Grid>
      <Grid item xs={12}>
        <OutlinedDiv>
          <Grid container item spacing={isMobile ? 2 : 9} justify={isMobile ? "center" : "flex-start"}>
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
          <Grid container item xs={12} justify="center">
            <FontAwesomeIcon icon={icon} color={color} size="7x"/>
            <Typography align="center">{name}</Typography>
          </Grid>
        </PaddedDiv>
      </ClickablePaper>
    </Grid>
  )
}

export default function Homepage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container spacing={2}>
      <Grid item container>
        <Typography variant="h3" color="primary">Select a menu item</Typography>
      </Grid>
      <FoodSection sectionTitle="Healthy Options" isMobile={isMobile}>
        <FoodItem name="Salad" icon={faLeaf} color="green" id="salad"/>
        <FoodItem name="Smoothie" icon={faBlender} color="green" id="smoothie"/>
      </FoodSection>
      <FoodSection sectionTitle="Dinner Options" isMobile={isMobile}>
        <FoodItem name="Hamburger" icon={faHamburger} color="orange" id="hamburger"/>
        <FoodItem name="Pizza" icon={faPizzaSlice} color="orange" id="pizza"/>
        <FoodItem name="Fried Chicken" icon={faDrumstickBite} color="orange" id="friedchicken"/>
      </FoodSection>
      <FoodSection sectionTitle="Drinks" isMobile={isMobile}>
        <FoodItem name="Coffee" icon={faCoffee} color="blue" id="coffee"/>
        <FoodItem name="Beer" icon={faBeer} color="blue" id="beer"/>
        <FoodItem name="Martini" icon={faGlassMartiniAlt} color="blue" id="martini"/>
      </FoodSection>
      <FoodSection sectionTitle="Dessert" isMobile={isMobile}>
        <FoodItem name="Ice Cream" icon={faIceCream} color="brown" id="icecream"/>
        <FoodItem name="Cake" icon={faBirthdayCake} color="brown" id="cake"/>
      </FoodSection>
    </Grid>
  )
}