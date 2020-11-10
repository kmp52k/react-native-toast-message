import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import Icon from '../icon';
import { icons } from '../../assets';
import styles, { HEIGHT } from './styles';

const BaseToast = (props) => {
  const { color, icon, text1, text2, onClose, onPress } = props;

  const baseStyle = [
    styles.base,
    styles.borderLeft,
    { borderLeftColor: color }
  ];

  return (
    <View style={baseStyle}>
      <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
        {icon ? (
          <Icon style={styles.icon} source={icon} />
        ) : (
          <View style={styles.icon} />
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.contentContainer} onPress={onPress}>
        <View style={styles.body}>
          {text1 !== undefined && (
            <View>
              <Text style={styles.text1} numberOfLines={1}>
                {text1}
              </Text>
            </View>
          )}
          {text2 !== undefined && (
            <View>
              <Text style={styles.text2} numberOfLines={2}>
                {text2}
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.closeButtonContainer} onPress={onClose}>
        <Icon style={styles.closeIcon} source={icons.close} />
      </TouchableOpacity>
    </View>
  );
};

BaseToast.HEIGHT = HEIGHT;

export default BaseToast;
