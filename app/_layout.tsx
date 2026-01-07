import { Stack } from "expo-router";
import Logo from "@/components/Logo";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: () => <Logo width={200} height={40} />,
        headerTitleAlign: "center",
      }}
    />
  );
}
