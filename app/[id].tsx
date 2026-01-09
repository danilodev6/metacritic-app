import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import type { GameDetails } from "@/lib/types";
import { getGameDetails } from "@/lib/rawg";

export default function GameDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [game, setGame] = useState<GameDetails | null>(null);

  useEffect(() => {
    if (!id) return;

    getGameDetails(id).then(setGame).catch(console.error);
  }, [id]);

  if (!id) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Game not found</Text>
      </View>
    );
  }

  if (!game) return <Text>Loading...</Text>;

  return (
    <ScrollView>
      <Text>{game.title}</Text>
      <Text>{game.slug}</Text>
      <Text>{game.score}</Text>
      <Text>{game.description}</Text>
    </ScrollView>
  );
}
