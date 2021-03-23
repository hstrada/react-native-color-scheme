import React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';
import styled from 'styled-components/native';

import themes from './src/theme';

const Wrapper = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Label = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: 24px;
`;

const App = () => {
  const deviceColorScheme = useColorScheme();
  const theme = themes[deviceColorScheme || 'dark'];

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Label>{deviceColorScheme}</Label>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
