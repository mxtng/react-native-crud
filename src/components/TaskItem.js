import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const TaskItem = ({title}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.iconsView}>
          <TouchableOpacity>
            <EvilIcons style={styles.icon} name="pencil" />
          </TouchableOpacity>
          <TouchableOpacity>
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
