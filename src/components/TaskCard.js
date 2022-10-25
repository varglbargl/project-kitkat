import { View, Pressable, Text, StyleSheet } from 'react-native';

import CardHeader from 'components/CardHeader';
import { colors, cards } from 'styles';
import { Button } from 'react-native-web';

const editScheduledTask = () => {
  // edit the task somehow
}

export default function Summary( { task, expanded, onPress } ) {

  return (
    <Pressable
      onPress={ onPress }
      style={ styles.taskCard }
    >
      <CardHeader
        title={ task.title }
      >
      </CardHeader>
      { expanded &&
        <View style={ styles.detailContainer }>
          <View style={ styles.detailRow }>
            <Text style={ [styles.tag, styles.colorByNumber(task.priority - 1), {flexGrow: 0.25}] }>
              Priority { task.priority }
            </Text>
            <Text style={ styles.plainText }>
              {/* todo: replace 15 with user.settings.bufferTime */}
              { task.duration } - { task.duration + 15 } mins
            </Text>
            { task.repeatEvery &&
              <Text style={ styles.plainText }>

                { task.repeatEvery.fromCompletion &&
                  '~'
                }{ task.repeatEvery.duration > 1 &&
                  `Every ${ task.repeatEvery.duration } ${ task.repeatEvery.period }s`
                  || `Every ${ task.repeatEvery.period }`
                }
              </Text>
            }
          </View>

          <Text style={ styles.description }>
            "{ task.description }"
          </Text>

          { task.tags &&
            <View style={ styles.tagCloud }>
              <Text style={ styles.tag }>Tags:</Text>
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
