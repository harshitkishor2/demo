import { Animated, FlexStyle, ShadowStyleIOS, TransformsStyle, ViewStyle } from "react-native";

export interface CustomStyle extends ViewStyle, FlexStyle, ShadowStyleIOS, TransformsStyle { }
// Flex related style
export type AlignContent = | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around' | undefined;
export type AlignItems = | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline' | undefined;
export type JustifyContent = | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | undefined;
export type FlexDirection = | 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined;
export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse' | undefined;
export type FlexAlignType = | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';

// Dimension related style (Height, width, padding,margin)
export type DimensionValue = | number | 'auto' | `${number}%` | Animated.AnimatedNode | null | undefined;

// Font related style
export type FontVariant = | 'small-caps' | 'oldstyle-nums' | 'lining-nums' | 'tabular-nums' | 'proportional-nums';
export type TextDecorationStyle = 'solid' | 'double' | 'dotted' | 'dashed' | undefined;
export type FontWeight = | 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | undefined;
export type TextTransform = 'none' | 'uppercase' | 'lowercase' | 'capitalize'
export type TextAlign = 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;

// Animation related

export type EasingFunction = { (t: number): number };
export type Easing = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'ease-in-cubic' | 'ease-out-cubic' | 'ease-in-out-cubic' | 'ease-in-circ' | 'ease-out-circ' | 'ease-in-out-circ' | 'ease-in-expo' | 'ease-out-expo' | 'ease-in-out-expo' | 'ease-in-quad' | 'ease-out-quad' | 'ease-in-out-quad' | 'ease-in-quart' | 'ease-out-quart' | 'ease-in-out-quart' | 'ease-in-quint' | 'ease-out-quint' | 'ease-in-out-quint' | 'ease-in-sine' | 'ease-out-sine' | 'ease-in-out-sine' | 'ease-in-back' | 'ease-out-back' | 'ease-in-out-back' | EasingFunction;
export type Animation = 'bounce' | 'flash' | 'jello' | 'pulse' | 'rotate' | 'rubberBand' | 'shake' | 'swing' | 'tada' | 'wobble' | 'bounceIn' | 'bounceInDown' | 'bounceInUp' | 'bounceInLeft' | 'bounceInRight' | 'bounceOut' | 'bounceOutDown' | 'bounceOutUp' | 'bounceOutLeft' | 'bounceOutRight' | 'fadeIn' | 'fadeInDown' | 'fadeInDownBig' | 'fadeInUp' | 'fadeInUpBig' | 'fadeInLeft' | 'fadeInLeftBig' | 'fadeInRight' | 'fadeInRightBig' | 'fadeOut' | 'fadeOutDown' | 'fadeOutDownBig' | 'fadeOutUp' | 'fadeOutUpBig' | 'fadeOutLeft' | 'fadeOutLeftBig' | 'fadeOutRight' | 'fadeOutRightBig' | 'flipInX' | 'flipInY' | 'flipOutX' | 'flipOutY' | 'lightSpeedIn' | 'lightSpeedOut' | 'slideInDown' | 'slideInUp' | 'slideInLeft' | 'slideInRight' | 'slideOutDown' | 'slideOutUp' | 'slideOutLeft' | 'slideOutRight' | 'zoomIn' | 'zoomInDown' | 'zoomInUp' | 'zoomInLeft' | 'zoomInRight' | 'zoomOut' | 'zoomOutDown' | 'zoomOutUp' | 'zoomOutLeft' | 'zoomOutRight';
export type Direction = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';