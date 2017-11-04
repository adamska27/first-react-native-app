import React from 'react';
import { Text, FlatList, View, StatusBar } from 'react-native';

import currencies from '../data/currencies';

console.log(currencies);

const CurrencyList = () => (
  <View style={{ flex: 1 }}>
    <StatusBar barStyle="default" translucent={false} />
    <FlatList
      data={currencies}
      renderItem={({ item }) => <Text>{item}</Text>}
      keyExtractor={(item, index) => (item.id = index)}
    />
  </View>
);

export default CurrencyList;
