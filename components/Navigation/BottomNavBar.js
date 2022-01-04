import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import RecipesMain from "../../Pages/Home/RecipesMain";
import FavoriteRecipes from "../../Pages/Favorites/FavoriteRecipes";
import PersonalInventory from "../../Pages/Personal/PersonalInventory";

//Screen names
const recipesMainName = "Recipes";
const favoritesName = "Favorites";
const personalInventoryName = "Inventory";

const Tab = createBottomTabNavigator();

export default function BottomNavBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={recipesMainName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === recipesMainName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === favoritesName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === personalInventoryName) {
              iconName = focused ? "settings" : "settings-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        screenOptions={{
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize: 10,
          },
          tabBarStyle: [
            {
              display: "flex",
            },
            null,
          ],
        }}
      >
        <Tab.Screen name={recipesMainName} component={RecipesMain} />
        <Tab.Screen name={favoritesName} component={FavoriteRecipes} />
        <Tab.Screen
          name={personalInventoryName}
          component={PersonalInventory}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
