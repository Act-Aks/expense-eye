import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
  Zocial,
} from '@expo/vector-icons';

export const IconMap = {
  AntDesign: AntDesign,
  Entypo: Entypo,
  EvilIcons: EvilIcons,
  Feather: Feather,
  FontAwesome: FontAwesome,
  FontAwesome5: FontAwesome5,
  Fontisto: Fontisto,
  Foundation: Foundation,
  Ionicons: Ionicons,
  MaterialCommunityIcons: MaterialCommunityIcons,
  MaterialIcons: MaterialIcons,
  SimpleLineIcons: SimpleLineIcons,
  Zocial: Zocial,
};

export const defaultIcon = Entypo;

export type IconNameMap = {
  AntDesign: keyof typeof AntDesign.glyphMap;
  Entypo: keyof typeof Entypo.glyphMap;
  EvilIcons: keyof typeof EvilIcons.glyphMap;
  Feather: keyof typeof Feather.glyphMap;
  FontAwesome: keyof typeof FontAwesome.glyphMap;
  FontAwesome5: keyof typeof FontAwesome5.glyphMap;
  Fontisto: keyof typeof Fontisto.glyphMap;
  Foundation: keyof typeof Foundation.glyphMap;
  Ionicons: keyof typeof Ionicons.glyphMap;
  MaterialCommunityIcons: keyof typeof MaterialCommunityIcons.glyphMap;
  MaterialIcons: keyof typeof MaterialIcons.glyphMap;
  SimpleLineIcons: keyof typeof SimpleLineIcons.glyphMap;
  Zocial: keyof typeof Zocial.glyphMap;
};

export type IconProps<F extends keyof typeof IconMap> = {
  iconType: F;
  iconName: IconNameMap[F];
  size?: number;
  color?: string;
};
