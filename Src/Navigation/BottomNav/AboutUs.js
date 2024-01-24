import { StyleSheet, Text, View, Dimensions , ScrollView } from 'react-native'
import React from 'react'

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const AboutUs = () => {
  return (
    <View>
        <View style={styles.aboutMe}>
              <ScrollView>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 20,
                    marginBottom: 20,
                  }}>
                  An Android developer is a professional who specializes in
                  creating applications for the Android operating system. Here's
                  a brief summary of the key responsibilities, skills, and tasks
                  associated with Android development. Designing and building
                  Android applications for smartphones, tablets, and other
                  devices: Designing and building Android applications for
                  smartphones, tablets, and other devices. Android applications
                  for smartphones, tablets, and other devices: Designing and
                  building Android applications for smartphones, tablets, and
                  other devices. Android applications for smartphones, tablets,
                  and other devices: Designing and building Android applications
                  for smartphones, tablets, and other devices. Android
                  applications for smartphones, tablets, and other devices:
                  Designing and building Android applications for smartphones,
                  tablets, and other devices.
                </Text>
              </ScrollView>
            </View>
    </View>
  )
}

export default AboutUs

const styles = StyleSheet.create({

  aboutMe: {
    height: windowHeight / 3,
    width: windowWidth - 100,
    backgroundColor: 'rgba(46, 46, 43, 0.6)',
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#fff',
    shadowOpacity: 2,
    marginTop: windowHeight / 10,
    marginBottom: windowHeight / 7,
    padding: '5%',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
})