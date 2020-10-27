import React, {useLayoutEffect, useState, useEffect, useContext} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import TaskContext from '../context/TaskContext';

const EditScreen = ({route, navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const {state, editTask} = useContext(TaskContext);
  const id = route.params.id;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Edit Task',
    });
  }, [navigation]);

  useEffect(() => {
    const task = state.find((item) => item.id === id);
    setTitle(task.title);
    setDescription(task.description);
  }, []);

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
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Button
        style={styles.button}
        title="Update Task"
        onPress={() =>
          editTask(id, title, description, () => navigation.navigate('Index'))
        }
      />
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
