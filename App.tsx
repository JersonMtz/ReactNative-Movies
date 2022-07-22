import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/routes/StackNavigator';

import { LogBox } from 'react-native';
import { GradientProvider } from './src/contexts/GradientContext';
// import { FadeInScreen } from './src/screens/FadeInScreen';

LogBox.ignoreLogs([
	"[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
	return (
		<NavigationContainer>
			<GradientProvider>
				<StackNavigator />
				{/* <FadeInScreen /> */}
			</GradientProvider>
		</NavigationContainer>
	)
}

export default App;