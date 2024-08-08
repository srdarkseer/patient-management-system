declare module "react-native-svg-charts" {
  import * as React from "react";
  import { ViewStyle } from "react-native";

  export interface ProgressCircleProps {
    style?: ViewStyle;
    progress: number;
    progressColor: string;
    backgroundColor?: string;
    strokeWidth?: number;
    startAngle?: number;
    endAngle?: number;
    cornerRadius?: number;
    animate?: boolean;
    animationDuration?: number;
    children?: React.ReactNode;
  }

  export class ProgressCircle extends React.Component<ProgressCircleProps> {}
}
