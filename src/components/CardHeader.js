import { View, Text, StyleSheet } from 'react-native';

import { cards } from 'styles';

export default function ModalMenu( { children, title,  } ) {

  return (
    <View style={ styles.cardHeader }>
      <Text style={styles.title}>{ title }</Text>
      <View>{ children }</View>
    </View>
  );
};

const styles = StyleSheet.create({
  ...cards,
});
