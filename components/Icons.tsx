import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";

export const InfoIcon = () => {
  return (
    <Link href="/about" className="flex-row items-center ml-auto">
      <FontAwesome5 name="info-circle" size={24} color="black" />
    </Link>
  );
};

export const InfoIconTab = (props: any) => {
  return <FontAwesome name="info" size={24} color="black" {...props} />;
};

export const HomeIconTab = (props: any) => {
  return <FontAwesome name="home" size={24} color="black" {...props} />;
};
