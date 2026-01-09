import { useEffect, useRef } from "react";
import { Animated, Image, Pressable, StyleSheet, Text, View } from "react-native";
import type { Game } from "@/lib/types";
import Score from "./Score";
import { Link } from "expo-router";

const Card = ({ game }: { game: Game }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <Text style={styles.title}>{game.title}</Text>
      <Score score={game.score} maxScore={100} />
      <Text style={styles.description}>{game.description.slice(0, 100)} ...</Text>
    </View>
  );
};

const AnimatedGameCard = ({ game, index }: { game: Game; index: number }) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        delay: index * 300,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        delay: index * 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [opacity, scale, index]);
  return (
    <Link href={`/${game.slug}`} asChild>
      <Pressable className={`active:opacity-50 rounded-[10px] active:shadow-none`}>
        <Animated.View
          style={{
            opacity,
            transform: [{ scale }],
          }}
        >
          <Card game={game} />
        </Animated.View>
      </Pressable>
    </Link>
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

export default AnimatedGameCard;
