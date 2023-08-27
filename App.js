import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import BlogTypesScreen from "./screens/BlogTypesScreen";
import BlogTypeScreen from "./screens/BlogTypeScreen";
import { Icon } from "react-native-elements";
import BlogScreen from "./screens/BlogScreen";
import SearchScreen from "./screens/SearchScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BlogTypesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BlogTypes"
        component={BlogTypesScreen}
        options={{ title: "Blog Types" }}
      />
      <Stack.Screen
        name="BlogType"
        component={BlogTypeScreen}
        options={{ title: "Blog Type" }}
      />
      <Stack.Screen name="BlogScreen" component={BlogScreen} />
    </Stack.Navigator>
  );
}

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="BlogType"
        component={BlogTypeScreen}
        options={{ title: "Blog Type" }}
      />
      <Stack.Screen
        name="BlogScreen"
        component={BlogScreen}
        options={{ title: "Blog Types" }}
      />
    </Stack.Navigator>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#F5FEFD" },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeStackScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={"#715C83"} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={BlogTypesStack}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" color={"#715C83"} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: true,
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={"#715C83"} size={30} />
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
