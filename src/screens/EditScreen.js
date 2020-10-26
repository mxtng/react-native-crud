import React, {useLayoutEffect, useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

const EditScreen = ({navigation}) => {
  const [title, setTitle] = useState('Todo #1');
  const [detail, setDetail] = useState('Complete todo by today');

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Edit Task',
    });
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title:</Text>
      <TextInput
        style={styles.titleInput}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.title}>Description:</Text>
      <TextInput
        multiline
        style={styles.textInput}
        value={detail}
        onChangeText={(text) => setDetail(text)}
      />
      <Button style={styles.button} title="Update Task" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  title: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 20,
  },
  titleInput: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 5,
    fontSize: 18,
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 5,
    height: 100,
    fontSize: 18,
  },
  button: {
    marginTop: 5,
  },
});

export default EditScreen;
