/* eslint-disable */
// screens/ListCatsScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListCatsScreen = ({ route }) => {
  const { cats } = route.params;

  return (
    <View style={styles.container}>
      <FlatList 
        data={cats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>Name: {item.name}</Text>
            <Text>Breed: {item.breed}</Text>
            <Text>Description: {item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listItem: {
    padding: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  }
});

export default ListCatsScreen;
