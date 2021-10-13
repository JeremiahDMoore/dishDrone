import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Keyboard, ScrollView } from 'react-native';
import Task from './components/Task';

export default function Mono() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  
  const handleAddTask = () => {
    Keyboard.dismiss();

    setTaskItems(['JOB: ' + task,
                 'Flight Plan: Identify Hazards, Contingency Plan, Check Weather/Wind/Temp',
                 'PPE on, Fire Ext. Ready, Phone and Drone Charged',
                 'Log into NOC: Call or Login Online, GET COMBO if needed',
                 'Hotspot Photos: Transformer, Power Path, H-frames, Meters, Fiber Vaults, Access Road Gate, Compound Gate, Signage',
                 'Place Boards: Hi and Lo, Sunny Side of Tower, Compound or Wall',                 
                 'Inspect Drone: Props, Fuselage, Lens/Gimbal, ',
                 'Power Drone ON: Open Litchi, Check and Adjust Camera Settings',
                 'Set Home Point: Drone Up, Flight Check (lights, satties, drift)',
                 'Set POI to Dead Center of Tower and SAVE', 
                 'Tower Overall Orbit: 30 to 50ft above tower, -45° to -60° gimbal',
                 'Upper Compound Orbit: tighten radius, -70° to -80° gimbal',
                 'Tower Orbits: let photos run, 20 to 35ft above tower, -35° to -45° gimbal, 1 centered orbit for every mount, descend -10ft every orbit until bottom is visible',
                 'Foundation Orbit: Manual orbit, Manual gimbal, center tower foundation in frame',
                 'Lower Compound Orbit: POI = Center of Compound, 25 to 35ft AGL, -30° to -40° gimbal (steeper gimbal OK if higher Alt. needed)',
                 '* Platform Orbits: 0° Gimbal, 5 to 10ft below the mount',
                 '* RAD Orbit: Land to reset altimeter, climb to RAD level, 0° Gimbal', 
                 'Tower Access Road: 15ft + AGL, 360° CW rotation at beginning of road, fly slowly to access gate, stop at sign',
                 'Check Photos on Laptop or Phone, SAVE',
                 'Remove Boards, Secure and Lock the Back',
                 'Lock the Gate: Reconnect Daisy Chain, Yank hard on the lock',
                 'Log Out of NOC: Call or Logout Online if necessary',
                 'Do Paperwork (if slow/no internet just write down and do at home)',
                 ]);
                      
    setTask(null);
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
        <Text style={styles.sectionTitle}>Monopole Mapping Checklist</Text>
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
          <Image
          style={{
            width: '100%'
          }}
          title="Ken" 
          imageSource={require('../../assets/orbits.png')} 
          story="One angry motherfucker and Ryu's twin brother, separated from birth."
          />

        </View>
        
      </View>
      
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={' Address/ Job #'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>GO</Text>
            
          </View>
        </TouchableOpacity>
        
      </KeyboardAvoidingView>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
});
