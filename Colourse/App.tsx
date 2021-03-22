import React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';
import styled from 'styled-components/native';

import themes from './src/theme';

const Wrapper = styled.View`
  background-color: ${({theme}) => theme.colors.background};
`;

const Label = styled.Text`
  background-color: ${({theme}) => theme.colors.text};
`;

const App = () => {
  const deviceColorScheme = useColorScheme();
  const theme = themes[deviceColorScheme || 'dark'];

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Label>Label</Label>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
