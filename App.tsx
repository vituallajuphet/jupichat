import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigator from './src/navigator/MainNavigator/MainNavigator';
import {AppProvider} from './src/context/context';

const App: React.FC = (props: any) => {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <PaperProvider>
          <TailwindProvider utilities={utilities}>
            {/* <Splash /> */}
            <MainNavigator />
          </TailwindProvider>
        </PaperProvider>
      </AppProvider>
    </SafeAreaProvider>
  );
};

export default App;
