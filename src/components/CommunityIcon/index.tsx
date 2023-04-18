import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface CommunityIconProps {
  icon: string;
  color?: string;
  size?: number;
}

export default function CommunityIcon({
  icon,
  color,
  size = 26
}: CommunityIconProps) {
  return <MaterialCommunityIcons name={icon} size={size} color={color} />;
}

CommunityIcon.defaultProps = {
  color: '#000'
};
