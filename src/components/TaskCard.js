import { useState } from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CardHeader from 'components/CardHeader';

import { colors, cards } from 'styles';

const editScheduledTask = () => {
  // edit the task somehow
}

export default function Summary( { children, task, expanded, onPress } ) {
  const [menuVisible, setMenuVisible] = useState(false);

  const onHeaderPress = () => {
    setMenuVisible(false);
    onPress();
  }

  const onMorePress = () => {
    setMenuVisible(!menuVisible);
  }

  return (
    <Pressable
      onPress={ onHeaderPress }
      style={ styles.taskCard }
    >
      <CardHeader
        title={ task.title }
        expanded={ expanded }
      >
        { expanded &&
          <Pressable
            onPress={ onMorePress }
          >
            <MaterialCommunityIcons style={ styles.headerIcon } name="dots-vertical" />
          </Pressable>
        }
      </CardHeader>
      { expanded &&
        <View style={ styles.detailContainer }>
          <View style={ styles.detailRow }>
            <Text style={ [styles.tag, styles.colorByNumber(task.priority), {flexGrow: 0}] }>
              P{ task.priority }
            </Text>

            <View style={ styles.detailItem }>
              <MaterialCommunityIcons style={ styles.inlineIcon } name="timer-outline" />
              <Text style={ styles.plainText }>
                {/* todo: replace 15 with user.settings.bufferTime */}
                { task.duration } - { task.duration + 15 } mins
              </Text>
            </View>

            { task.repeatEvery &&
              <View style={ styles.detailItem }>
                <MaterialCommunityIcons style={ styles.inlineIcon } name="repeat" />
                <Text style={ styles.plainText }>

                  { task.repeatEvery.fromCompletion && 'After ' || 'Every ' }
                  { task.repeatEvery.duration } { task.repeatEvery.period }
                  { task.repeatEvery.duration > 1 && 's' }
                </Text>
              </View>
            }
          </View>

          { children &&
            <View style={ styles.detailRow }>
              { children }
            </View>
          }

          <Text style={ styles.description }>
            "{ task.description }"
          </Text>

          { task.tags && task.tags.length > 0 &&
            <View style={ styles.tagCloud }>
              <MaterialCommunityIcons style={ styles.inlineIcon } name="tag-outline" />
              { task.tags.map((tag, i) => {
                return (
                  <Text
                    key={ i }
                    style={ [styles.tag, styles.colorByNumber(i)] }
                  >
                    { tag }
                  </Text>
                );
              })}
              <View style={ {flexGrow: 5} }></View>
            </View>
          }
        </View>
      }
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ...colors,
  ...cards,

});
