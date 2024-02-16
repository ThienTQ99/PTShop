import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "../creens/home/Home";
import Budget from "../creens/budget/Budget";
import Son from "../creens/son/Son";
import Category from "../creens/category/Category";
import Transaction from "../creens/transaction/Transaction";

const Navigationbar = () => {
  function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text className=" text-xl">Home!</Text>
      </View>
    );
  }

  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            switch (route.name) {
              case "Home":
                return (
                  <Ionicons
                    name={focused ? "home" : "home-outline"}
                    size={focused ? 35 : size}
                    color={color}
                  />
                );
                break;

                case "Budget":
                  return (
                    <Ionicons
                      name={focused ? "cash" : "cash-outline"}
                      size={focused ? 35 : size}
                      color={color}
                    />
                  );
                  break;
                  case "Son":
                    return (
                      <Ionicons
                        name={focused ? "people" : "people-outline"}
                        size={focused ? 35 : size}
                        color={color}
                      />
                    );
                    break;
                    case "Category":
                      return (
                        <Ionicons
                          name={focused ? "list" : "list-outline"}
                          size={focused ? 35 : size}
                          color={color}
                        />
                      );
                      break;
                      case "Transaction":
                        return (
                          <Ionicons
                            name={focused ? "swap-horizontal" : "swap-horizontal-outline"}
                            size={focused ? 35 : size}
                            color={color}
                          />
                        );
                        break;
              default:
                break;
            }
          },
          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: "tomato",
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Budget" component={Budget} />
        <Tab.Screen name="Son" component={Son} />
        <Tab.Screen name="Category" component={Category} />
        <Tab.Screen name="Transaction" component={Transaction} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigationbar;
