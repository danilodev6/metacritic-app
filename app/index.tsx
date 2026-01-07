import { View } from "react-native";
import GamesList from "@/components/GamesList";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GamesList />
    </View>
  );
}
