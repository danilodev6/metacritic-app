import { View, Text } from "react-native";

const Score = ({ score, maxScore }: { score: number; maxScore: number }) => {
  const getColor = () => {
    const percetage = Math.round((score / maxScore) * 100);
    if (percetage < 50) {
      return "bg-red-500";
    } else if (percetage < 80) {
      return "bg-yellow-500";
    } else {
      return "bg-green-500";
    }
  };

  const className = getColor();

  return (
    <View className={`${className} w-8 h-8 rounded-full justify-center items-center`}>
      <Text className="text-white text-2xl font-bold">{score}</Text>
    </View>
  );
};

export default Score;
