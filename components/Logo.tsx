import * as React from "react";
import Svg, { G, Rect, Path, Circle, Text } from "react-native-svg";

interface Props {
  xmlns?: string;
  width?: number;
  height?: number;
}

const Logo = (props: Props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={320} height={48} {...props}>
    <G
      fill="none"
      stroke="#111"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      transform="translate(0 8)"
    >
      <Rect width={40} height={24} x={4} y={8} rx={12} />
      <Path d="M16 18v8M12 22h8" />
      <Circle cx={32} cy={20} r={2} fill="#111" />
      <Circle cx={36} cy={24} r={2} fill="#111" />
    </G>
    <Text
      x={56}
      y={32}
      fill="#111"
      fontFamily="System-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      fontSize={20}
      fontWeight={600}
    >
      {"\n    Top Games\n  "}
    </Text>
  </Svg>
);
export default Logo;
