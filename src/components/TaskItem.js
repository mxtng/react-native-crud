import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';
import TaskContext from '../context/TaskContext';

const TaskItem = ({id, title}) => {
  const navigation = useNavigation();
  const {deleteTask} = useContext(TaskContext);
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detail', {id})}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.iconsView}>
          <TouchableOpacity onPress={() => navigation.navigate('Edit', {id})}>
            <EvilIcons style={styles.icon} name="pencil" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteTask(id)}>
            <EvilIcons style={styles.icon} name="trash" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f3d060',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
  },
  iconsView: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: 30,
  },
});

export default TaskItem;
