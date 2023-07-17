import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {Badge} from 'react-native-paper';

const ListItem = props => {
  const {data} = props;
  const tw = useTailwind();

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log("item.id", item.id)
        }}
        key={item.id}
        style={tw('flex-row items-center justify-between py-4')}>
        <View>
          <Image
            source={{
              uri: 'https://kalasalingam.ac.in/wp-content/uploads/2021/08/Achievements-dummy-profile.png',
            }}
            style={tw('w-14 h-14 rounded-full')}
          />
        </View>
        <View style={tw('flex-1 px-2 pl-4')}>
          <Text style={tw('font-bold text-lg mb-2')}>{item.name}</Text>
          <Text style={tw('text-xs text-gray-400')}>
            This is a content motherdfd
          </Text>
        </View>
        <View style={tw('flex-col items-center justify-center items-center')}>
          <View style={tw('mb-2')}>
            <Text style={tw('text-xs text-gray-400')}>5 mins</Text>
          </View>
          <View>
            <Badge
              style={tw('bg-blue-500')}
              theme={{
                colors: {
                  primary: 'green',
                },
              }}>
              2
            </Badge>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return <FlatList data={data} renderItem={renderItem} />;
};

export default ListItem;
