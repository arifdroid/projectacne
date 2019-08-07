/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//// import

import { RNCamera } from 'react-native-camera';



/// .. import

class App extends React.Component {

  constructor(){
    super()
  }

  //function here

  _takePicure = async() => {

    if(this.camera){

      const option = { quality:0.5, base64:true}

      const data = await this.camera.takePictureAsync(option)
      
      alert(' check : '+ data.uri.toString)
      
    }

  }



  //

  render(){
  return (
   <View style={styles.container}>
   
   <Text style={{margin:10, alignSelf:'center'}}> this camera Test </Text>

   <RNCamera
    ref={ref=>this.camera=ref}
    
    type={RNCamera.Constants.Type.back}

    style={styles.preview}

    
   
   />
    <View style={{margin:10, alignSelf:'center'}}>
      <TouchableOpacity
      
      onPress={this._takePicure}
      style={styles.capture}
      
      >

      <Text> capture </Text>
      
      </TouchableOpacity>
    </View>
   
   </View>

  );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});




export default App;
