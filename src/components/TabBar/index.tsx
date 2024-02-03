import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../../pages/Login";


const Tab  = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={Login} />
        </Tab.Navigator>
    )
}