/* eslint-disable */
// screens/EditCat.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { editCat } from '../../redux/actions/cats';   // Adjust the path to your actions

const EditCatScreen = ({ route, navigation }) => {
  const { cat } = route.params;
  
  const [name, setName] = useState(cat.name);
  const [breed, setBreed] = useState(cat.breed);
  const [description, setDescription] = useState(cat.description);

  const dispatch = useDispatch();

  const handleSave = () => {
    const updatedCat = { id: cat.id, name, breed, description };
    dispatch(editCat(cat.id, updatedCat));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Breed"
        value={breed}
        onChangeText={setBreed}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default EditCatScreen;