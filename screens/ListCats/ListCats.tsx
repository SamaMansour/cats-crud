/* eslint-disable */
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';  // Adjust this import based on your setup;
import { useSelector } from 'react-redux';  // Import the useSelector hook
import { deleteCat } from "../../redux/actions/cats";
import { useDispatch } from 'react-redux';



const ListCatsScreen = ({ route, navigation }) => {
  const cats = useSelector(state => state.cats);
  const dispatch = useDispatch();
  // Access cats from the Redux store
  const handleEdit = (cat) => {
    // Navigation or logic for editing the selected cat
    navigation.navigate('EditCat', { cat }); // Assuming you have an 'EditCat' screen
  };

  const handleDelete = (catId) => {
    dispatch(deleteCat(catId));  // Dispatch the delete action
  };

  return (
    <View style={styles.container}>
      <FlatList 
        data={cats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <View style={styles.catDetails}>
              <Text>Name: {item.name}</Text>
              <Text>Breed: {item.breed}</Text>
              <Text>Description: {item.description}</Text>
            </View>
            <View style={styles.icons}>
              <TouchableOpacity onPress={() => handleEdit(item)}>
                <FontAwesome name="edit" size={24} color="blue" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <FontAwesome name="trash" size={24} color="red" />
              </TouchableOpacity>
            </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  icons: {
    flexDirection: 'row',
    marginLeft: 'auto'
  },
  icon: {
    marginRight: 15,
  }
});

export default ListCatsScreen;
