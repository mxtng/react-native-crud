import React, {useLayoutEffect, useContext} from 'react';
import {View, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TaskItem from '../components/TaskItem';
import Context from '../context/TaskContext';

const IndexScreen = ({navigation}) => {
  const {state} = useContext(Context);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Tasks',
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <AntDesign style={styles.icon} name="plus" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(key) => key.id.toString()}
        renderItem={({item}) => <TaskItem id={item.id} title={item.title} />}
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
