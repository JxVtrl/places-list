import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'
import Add from '../screens/Add'
import Login from '../screens/Login'
import Register from '../screens/Register'
import CommunityIcon from '../components/CommunityIcon'
import Details from '../screens/Details/Details'

import { AppProvider } from '../context/AppContext'

export type AppParamList = {
    General: undefined
    Details: undefined
}

export type TabParamList = {
    Home: undefined
    Add: undefined
}

export type AuthParamList = {
    Login: undefined
    Register: undefined
}

const App = createNativeStackNavigator<AppParamList>()
const Tab = createBottomTabNavigator<TabParamList>()
const Auth = createNativeStackNavigator<AuthParamList>()

function GeneralAppRoutes() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string = ''

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (route.name === 'Add') {
                        iconName = focused
                            ? 'plus-circle'
                            : 'plus-circle-outline'
                    }

                    return (
                        <CommunityIcon
                            icon={iconName}
                            size={size}
                            color={color}
                        />
                    )
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Add"
                component={Add}
                options={{
                    tabBarLabel: 'Add',
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}

function AppRoutes() {
    return (
        <AppProvider>
            <App.Navigator initialRouteName="General">
                <App.Screen
                    name="General"
                    component={GeneralAppRoutes}
                    options={{ headerShown: false }}
                />
                <App.Screen
                    name="Details"
                    component={Details}
                    options={{ headerShown: false }}
                />
            </App.Navigator>
        </AppProvider>
    )
}

function AuthRoutes() {
    return (
        <Auth.Navigator initialRouteName="Login">
            <Auth.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Auth.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />
        </Auth.Navigator>
    )
}

const Stack = createNativeStackNavigator()

function Routes() {
    return (
        <>
            <Stack.Navigator initialRouteName="App">
                <Stack.Screen
                    name="Auth"
                    component={AuthRoutes}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="App"
                    component={AppRoutes}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </>
    )
}

export default Routes
