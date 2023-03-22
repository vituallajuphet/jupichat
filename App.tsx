import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import React from 'react';
import Splash from './src/Screen/Test';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: React.FC = (props: any) => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <TailwindProvider utilities={utilities}>
          <Splash />
        </TailwindProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
