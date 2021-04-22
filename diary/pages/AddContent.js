import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Camera from './Camera';


// This page allows the user to take a picture with their camera, or upload from their phone memory

const AddContent = () => {
  return (
    <SafeAreaView>
        <Text>Page to take pictures and upload content, upload here!</Text>
    <Camera>
      
    </Camera>
    </SafeAreaView>
  );
};

export default AddContent; 