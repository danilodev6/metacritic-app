import { useEffect, useState } from "react";
import { ScrollView, Text, View, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import type { GameDetails } from "@/lib/types";
import { getGameDetails } from "@/lib/rawg";
import Score from "../components/Score";

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

  if (!game)
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Loading...</Text>
      </View>
    );

  return (
    <ScrollView className="flex-1 px-4">
      <View className="flex-row items-center justify-center my-4">
        <Text className="text-lg font-bold mr-2">{game.title}</Text>
        <Score maxScore={100} score={game.score} />
      </View>
      <Image src={game.img} style={styles.image} />
      <Text>{game.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
});
