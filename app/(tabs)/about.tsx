import { Stack } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function About() {
  return (
    <ScrollView className="flex-1 px-4">
      <Stack.Screen
        options={{
          headerTitle: "About",
          headerRight: undefined,
        }}
      />
      <View className="flex-1 items-center justify-center mt-4">
        <Text className="text-center text-lg">This is a sample app to demonstrate how to use the Metacritic API.</Text>
        <Text className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Text>
      </View>
    </ScrollView>
  );
}
