import React, {useLayoutEffect, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import TaskContext from '../context/TaskContext';

const DetailScreen = ({route, navigation}) => {
  const {state} = useContext(TaskContext);
  const {id} = route.params;

  const task = state.find((item) => item.id === id);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: task.title,
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Edit', {id})}>
          <EvilIcons style={styles.icon} name="pencil" />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{task.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
    marginRight: 15,
  },
  container: {
    margin: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default DetailScreen;
