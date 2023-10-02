import { defaultIcon, IconMap, IconProps } from './Icon.type';

const Icon = <F extends keyof typeof IconMap>({
  iconType,
  iconName,
  size = 24,
  color = 'green',
}: IconProps<F>): JSX.Element => {
  const Icon: JSX.ElementType = IconMap[iconType] || defaultIcon;

  return <Icon name={iconName} size={size} color={color} />;
};

export default Icon;
