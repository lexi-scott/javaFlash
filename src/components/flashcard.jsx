import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Card, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import FlipCard from 'react-native-flip-card';

import cardInfo from '../seeds/cardInfo';

function Cards() {
  return (
    <>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      }}>
        {/* cancel button */}
        <TouchableOpacity
          style={{
            padding: 20,
            marginTop: 200
          }}
        >
          <Icon
            name='times-circle-o'
            type='FontAwesome'
            onPress={() => console.log("arrow clicked")}
            style={{
              fontSize: 30,
              color: '#880808'
            }} />
        </TouchableOpacity>

        {/* card front */}
        <FlipCard
          friction={6}
          perspective={10000}
          flip={true}
          clickable={true}
        >
          <View
            style={{
              borderWidth: 3,
              borderRadius: 5,
              width: 200,
              height: 250,
              textAlign: 'center',
              top: '50%',
              left: '50%',
            }}
          >
            <Text h3
              style={{
                textAlign: 'center'
              }}
            >
              subject
            </Text>
            <Text
              style={{
                paddingTop: 30,
                textAlign: 'center'
              }}>
              hello
            </Text>
          </View>

          {/* card back */}
          <View
            style={{
              borderWidth: 3,
              borderRadius: 5,
              width: 200,
              height: 250,
              textAlign: 'center',
              top: '50%',
              left: '50%',
            }}>
            <Text>
              Here is answer BACK CARD MORE ANSWER HERE A LONG ANSWER
            </Text>
          </View>

        </FlipCard>

        {/* Correct Button */}
        <TouchableOpacity
          style={{
            padding: 20,
            marginTop: 200
          }}
        >
          <Icon
            name='check-circle-o'
            type='FontAwesome'
            onPress={() => console.log("arrow clicked")}
            style={{
              fontSize: 30,
              color: 'green'
            }} />
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Cards