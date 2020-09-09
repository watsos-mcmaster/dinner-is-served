import styled from 'styled-components';
import { Paper } from '@material-ui/core';

export const PaddedDiv = styled.div`
  padding: 2em;
`

export const OutlinedDiv = styled.div`
  padding: 1em;
  border: 4px solid #000;
`

export const ClickablePaper = styled(Paper)`
  width: 190px;
  cursor: pointer;
`