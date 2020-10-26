import React, {useLayoutEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TaskItem from '../components/TaskItem';

const tasksList = [
  {title: 'Task #1'},
  {title: 'Task #2'},
  {title: 'Task #3'},
  {title: 'Task #4'},
  {title: 'Task #5'},
];

const IndexScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Tasks',
      headerRight: () => (
        <TouchableOpacity>
          <AntDesign style={styles.icon} name="plus" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <FlatList
        data={tasksList}
        keyExtractor={(key) => key.title}
        renderItem={({item}) => <TaskItem title={item.title} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
    marginRight: 15,
  },
});

export default IndexScreen;
