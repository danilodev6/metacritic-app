import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Link } from "expo-router";

export const InfoIcon = () => {
  return (
    <Link href="/about" className="flex-row items-center ml-auto">
      <FontAwesome5 name="info-circle" size={24} color="black" />
    </Link>
  );
};
