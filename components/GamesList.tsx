import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AnimatedGameCard from "@/components/GameCard";
import { getLatestGames } from "@/lib/rawg";
import type { Game } from "@/lib/types";

export default function GamesList() {
  const [games, setGames] = useState<Game[]>([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((data) => setGames(data));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="dark" />
      {games.length === 0 ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={games}
          renderItem={({ item, index }) => <AnimatedGameCard game={item} index={index} />}
          keyExtractor={(item) => item.slug}
          contentContainerStyle={{
            padding: 10,
            paddingTop: insets.top + 10,
            paddingBottom: insets.bottom + 10,
          }}
        />
      )}
    </View>
  );
}
