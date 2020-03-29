import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Homepage from './Components/Homepage';
import ItemContainer from './Components/ItemSelection/ItemContainer';
import ShoppingCart from './Components/Cart/ShoppingCart';
import Receipt from './Components/Receipt/Receipt';
import Appbar from './Components/Appbar';
import store from './redux/store';

const FlexGrowDiv = styled.div`
  flex-grow: 1;
`

const Container = styled.div`
  display: flex;
  margin: auto;
  align-items: start;
  width: 80%;
  background-color: #f5f5f5;
  min-height: 100vh;
  height: 100%;
  padding: 1em;
`

function App() {
  return (
    <Provider store={ store }>
      <FlexGrowDiv>
        <Router>
          <Appbar/>
          <Container>
            <Switch>
              <Route exact path="/">
                <Homepage/>
              </Route>
              <Route path="/item" component={ItemContainer}/>
              <Route path="/cart" component={ShoppingCart}/>
              <Route path="/thanks" component={Receipt}/>
            </Switch>
          </Container>
        </Router>
      </FlexGrowDiv>
    </Provider>
  );
}

export default App;
