import { Image, StyleSheet, Text, View } from "react-native";
import type { Game } from "@/lib/types";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.score}> SCORE: {game.score}</Text>
      <Text style={styles.description}>{game.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 3,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  score: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginBottom: 5,
  },
});

export default GameCard;
