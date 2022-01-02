import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Keyboard, ScrollView } from 'react-native';
import Task from './components/Task';
import moment from 'moment';
import { Alert } from 'react-native';
import HomeScreen from './HomeScreen';

var currentTime = new moment().format('LTS')
var hideButton = true;


export default function GuyedChecklist() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  var label = 'Start';


  const scanTimeStart = () => {
    var scanStart = currentTime;
    Alert.alert( task + " Started: " + scanStart ); 
    hideButton = false;   
  }
  const scanTimeEnd = () => {
    currentTime = new moment().format('LTS')
    Alert.alert("Mission Time for " + task + " to " + currentTime);
    hideButton = true;

  }

  const handleAddTask = () => {
    Keyboard.dismiss();
    scanTimeStart();
    setTaskItems([
                 'Flight Plan: Identify Hazards, Contingency Plan, Check Weather/Wind/Temp',
                 'PPE on, Fire Ext. Ready, Phone and Drone Charged',
                 'Log into NOC: Call or Login Online, GET COMBO if needed',
                 'Hotspot Photos: Transformer, Power Path, H-frames, Meters, Fiber Vaults, Access Road Gate, Compound Gate, Signage, 6 photos of each guy anchor (all angles)',
                 'Place Boards: Hi and Lo, Sunny Side of Tower, Compound or Wall',                 
                 'Power Drone ON: Open Litchi, Check and Adjust Camera Settings',
                 'Set Home Point: Drone Up, Flight Check (lights, satties, drift)',
                 'Set POI to Dead Center of Tower and SAVE', 
                 'Tower Overall Orbit: 30 to 50ft above tower, -45° to -60° gimbal',
                 'Upper Compound Orbit: tighten radius, -70° to -80° gimbal',
                 'Tower Orbits: let photos run, 20 to 35ft above tower, -35° to -45° gimbal, 1 centered orbit for every mount above top guy pull off',
                 'Down first Face: With 35° downward gimbal, descend at 2-3mph down the right half of the first face until tower base is in middle of the frame',
                 'Rotate clockwise to left half of first Face, Up first face With 35° downward gimbal, climb at 2-3mph up the left half of first face until the highest tower appurtenance is in the middle of the frame',
                 'Rotate clockwise to 2nd Face',
                 'Down second Face: With 35° downward gimbal, descend at 2-3mph down the right half of the second Face until tower base is in middle of the frame',
                 'Rotate clockwise to left half of second Face: With 35° downward gimbal, climb at 2-3mph up the left half of the second face until the highest tower appurtenance is in the middle of the frame',
                 'Rotate Clockwise to 3rd Face',
                 'Down third Face: With 35° downward gimbal, descend at 2-3mph down the right half of the third face until tower base is in middle of the frame',
                 'Once at the bottom, complete the tower foundation/scaling orbit',
                 'Lower Compound Orbit: POI = Center of Compound, 25 to 35ft AGL, -30° to -40° gimbal (steeper gimbal OK if higher Alt. needed)',
                 '* Platform Orbits: 0° Gimbal, 5 to 10ft below the mount',
                 '* RAD Orbit: Land to reset altimeter, climb to RAD level, 0° Gimbal. tripod 360° CW at 2 points', 'Tower Access Road: 15ft + AGL, 360° CW rotation at beginning of road, fly slowly to access gate, stop at sign',
                 'Check Photos on Laptop or Phone, SAVE',
                 'Remove Boards, Secure and Lock the Back',
                 'Lock the Gate: Reconnect Daisy Chain, Yank hard on the lock',
                 'Log Out of NOC: Call or Logout Online if necessary',
                 'Do Paperwork (if slow/no internet just write down and do at home)',

                ]);
                      
                 setTask(task + " --" + currentTime);
                 Keyboard.dismiss();

  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (    
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Guyed PreCX & PostCX: </Text>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} />                  
                </TouchableOpacity>                                
              )
            })
          }         
        </View>
          <View style={styles.addTaskWrapper}>
            <TouchableOpacity onPress={this.saveData}>
            </TouchableOpacity>
            </View>
      </View>      
      </ScrollView>
      <Button title={'End Scan \n'} color='#ec1f47'  onPress={() => { scanTimeEnd() }} />
      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
        enabled={false}
        >
          
        <TextInput style={styles.input} placeholder={' Address/ Job #'} value={task} onChangeText={task => setTask(task)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>{hideButton ? "Start" : "Reset"}</Text>
            
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
           
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    shadowColor: '#dedede',
    shadowOffset: {width: -1, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2
  },
  items: {
    marginTop: 30,
   
  },
  writeTaskWrapper: {
    position: 'absolute',
    top: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    marginLeft: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderColor: '#C0C0C0',
    borderWidth: 2,
    width: 275,
  },
  none: {
    height: 0,
    width: 0

  },
  addWrapper: {
    width: 80,
    height: 50,
    backgroundColor: '#E8EAED',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 2,
  },
  addText: {},
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
});