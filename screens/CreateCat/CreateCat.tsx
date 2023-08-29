/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { addCat } from "../../redux/actions/cats";
import { useDispatch } from 'react-redux';


const CreateCatScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [description, setDescription] = useState('');
  const [cats, setCats] = useState([]);
  const dispatch = useDispatch();


  const handleSubmit = () => {
    if (name.trim() === '' || breed.trim() === '' || description.trim() === '') {
      Alert.alert('Validation Error', 'All fields are required.');
      return;
    }

    const newCat = {
      id: Date.now().toString(), 
      name,
      breed,
      description
    };
    
    setCats(prevCats => [...prevCats, newCat]);
    dispatch(addCat({ name, breed, description }));
    Alert.alert('Success', 'Cat created successfully!');
    navigation.navigate('ListCats', { cats: [...cats, newCat] });

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
      <Button title="Add Cat" onPress={handleSubmit} />
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
export default CreateCatScreen;
