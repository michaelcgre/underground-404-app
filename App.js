import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import BlogTypesScreen from "./screens/BlogTypesScreen";
import BlogTypeScreen from "./screens/BlogTypeScreen";
import { Icon } from "react-native-elements";
import BlogScreen from "./screens/BlogScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BlogTypesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BlogTypes" component={BlogTypesScreen} />
      <Stack.Screen name="BlogType" component={BlogTypeScreen} />
      <Stack.Screen name="BlogScreen" component={BlogScreen} />
    </Stack.Navigator>
  );
}

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="BlogType" component={BlogTypeScreen} />
      <Stack.Screen name="BlogScreen" component={BlogScreen} />
    </Stack.Navigator>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#F5FEFD" },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={"#715C83"} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="BlogTypesStack"
        component={BlogTypesStack}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" color={"#715C83"} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <HomeTabs />
    </NavigationContainer>
  );
}
