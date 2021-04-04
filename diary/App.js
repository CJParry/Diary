import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Gallery from './pages/Gallery';
import Home from './pages/Home';
import AddContent from './pages/AddContent';

 
export default function App() {

  const Tab = createBottomTabNavigator();
 
  const [newTask, setnewTask] = useState('');
 
  const [appTasks, appTask] = useState([]);
 
  const taskInputHandler = (enteredText) => {
    setnewTask(enteredText);
  };
 
  const addTaskHandler = () =>{
    appTask(currentTask => [...currentTask, newTask]);
    console.log(newTask);
  };
 
  return (
    // <View style= {styles.container}>
       
    //   <View style = {styles.inputContainer}>
       
    //     <TextInput
    //       placeholder = "Task List"
    //       style = {styles.input}
    //       onChangeText = {taskInputHandler}
    //       value = {newTask}
    //     />
       
    //     <Button title = "+"
    //       onPress = {addTaskHandler}
    //     /> 
    //   </View>
    //   <View>
    //     {appTasks.map((task) => <Text>{task}</Text>)}
    //   </View>
    // </View>
    <NavigationContainer>
       <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Add Content" component={AddContent} />
        <Tab.Screen name="Gallery" component={Gallery} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input :{
    borderColor:"black", 
    borderWidth:1 , 
    padding :20,
     
  },
  inputContainer :{
    flexDirection :'row', 
    justifyContent :'space-between', 
    alignContent:'center',
    bottom:20
  },
});