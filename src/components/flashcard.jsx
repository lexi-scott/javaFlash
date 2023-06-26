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
        flexDirection: 'column'
      }}>
        <FlipCard
          friction={6}
          perspective={10000}
          flip={true}
          clickable={true}
        >
          <View
            style={{
              marginTop: 120,
              borderWidth: 3,
              borderRadius: 5,
              width: 200,
              height: 250,
              textAlign: 'center'
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
          <Text
            style={{
              borderWidth: 3,
              borderRadius: 5,
              width: 200,
              height: 250,
              textAlign: 'center',
              paddingTop: 20,
            }}
          >
            Here is answer
          </Text>
        </FlipCard>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <TouchableOpacity
            style={{
              padding: 20,
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
          <TouchableOpacity
            style={{
              padding: 20,
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
      </View>

    </>
  );
}

export default Cards