import React from 'react';

import SignIn from './pages/SignIn/Index';
// import SignUp from './pages/SignUp/Index';
import GlobalStyle from './styles/global';

import AppProvider from './hooks/';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    
    <GlobalStyle />
  </>
);

export default App;
