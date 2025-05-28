import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Index from "./app/index"
import TabNavigator from "./app/Tabs/_layout"
import SignIn from "./app/Auth/sign-in"
import SignUp from "./app/Auth/sign-up"
import GlobalProvider from "./context/GlobalContext";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <GlobalProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Index">
            <Stack.Screen name="Index" component={Index} options={{ headerShown: false }} />
            <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
    </GlobalProvider>
  )
}
