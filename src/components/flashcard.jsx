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
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <TouchableOpacity
          style={{
            padding: 20,
            marginTop: '20%',
          }}
        >
          <Icon
            raised
            name='times-circle-o'
            type='FontAwesome'
            onPress={() => console.log("arrow clicked")}
            style={{

              fontSize: 30,
              color: '#880808'
            }} />
        </TouchableOpacity>
        <FlipCard
          friction={6}
          perspective={1000}
          flipHorizontal={true}
          clickable={true}
        >
          <View
            style={{
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
            >subject </Text>

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
            {/* <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignSelf: 'flex-start'
            }}
            >
            <Button
            onPress={() => {
              console.log("you tapped the button")
            }}
            title="Discard"
            style={{
              margin: 30
            }}
          />
           <Button
            onPress={() => {
              console.log("you tapped the button")
            }}
            title="Keep"
            style={{
              margin: 30
            }}
          />
          </View> */}
          </Text>
        </FlipCard>
        <TouchableOpacity
          style={{
            padding: 20,
            marginTop: '20%'
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