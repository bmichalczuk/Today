import React from 'react';
import { render, screen } from '@testing-library/react';
import ThemeStyles from "../../styled-components/Theme";
import GlobalStyles from '../../styled-components/GlobalStyles';
import AppHeader from '.';

describe('AppHeader', () => {
  describe('renders AppHeader component', () => {
    render(
        <ThemeStyles>
            <GlobalStyles />
            <AppHeader />
        </ThemeStyles>
        );

      it(`Renders app logo`, () => {
        expect(screen.getByText("Today")).toBeInTheDocument();
      });

      it(`Renders link to login page`, () => {
        expect(screen.getByText("Log in")).toBeInTheDocument();
      });

    
  });
});