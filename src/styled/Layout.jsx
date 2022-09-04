import styled from 'styled-components';
import { breakpoints, colours } from '../constants';

// This is the main styling component for any given layout

const LayoutStyles = styled.div`
  background-color: ${colours.LAYOUT_BG};
  color: ${colours.LAYOUT_TEXT};
  height: 100vh;
  display: flex;
  flex-flow: column wrap;
`

const LayoutWrapper = styled.section`
  overflow: auto;
  max-width: ${
    props => props.currentWidth <= breakpoints.MOB_MAX ? 100 :
    props.currentWidth <= breakpoints.SMALL_MAX ? 95 :
    props.currentWidth <= breakpoints.TABLET_MAX ? 90 :
    props.currentWidth <= breakpoints.LAPTOP_MAX ? 85 :
    props.currentWidth <= breakpoints.DESKTOP_MAX ? 80 : 70
  }%;
  width: 100%;
  ;
  padding: 1rem ${
    props => props.currentWidth <= breakpoints.MOB_MAX ? 0 :
    props => props.currentWidth <= breakpoints.SMALL_MAX ? 0.25 :
    props => props.currentWidth <= breakpoints.TABLET_MAX ? 0.5 :
    props => props.currentWidth <= breakpoints.LAPTOP_MAX ? 1 :
    props => props.currentWidth <= breakpoints.DESKTOP_MAX ? 1.5 : 2
  }rem;
  margin: 0 auto;
  flex: 1;
  border-left: 1px solid ${colours.PAGES_BORDER_COLOUR};
  border-right: 1px solid ${colours.PAGES_BORDER_COLOUR};
`;

export { LayoutWrapper, LayoutStyles };