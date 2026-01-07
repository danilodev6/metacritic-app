import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import GameCard from "@/components/GameCard";
import { getLatestGames } from "@/lib/rawg";
import type { Game } from "@/lib/types";

export default function GamesList() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    getLatestGames().then((data) => setGames(data));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <FlatList
        data={games}
        renderItem={({ item }) => <GameCard game={item} />}
        keyExtractor={(item) => item.slug}
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  );
}
