import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { cards } from 'styles';

const numberIcons = ['looks-one', 'looks-two', 'looks-3', 'looks-4', 'looks-5', 'looks-6']

export default function ModalMenu( { children, title, icon, expanded } ) {

  if (icon && typeof icon === 'number') {
    icon = numberIcons[icon - 1];
  }

  return (
    <View style={ styles.cardHeader }>
      { icon &&
        <MaterialCommunityIcons style={ styles.headerIcon } name={ icon } />
      }
      <Text style={ [styles.title, expanded ? styles.fullTitle : null] }>{ title }</Text>
      <View>{ children }</View>
    </View>
  );
};

const styles = StyleSheet.create({
  ...cards,
});
