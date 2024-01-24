import {Dimensions, StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

import {EduData} from '../../FlatListData/EducationData';
const EducationData = EduData;
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const newfont = 'IMFellFrenchCanonSC-Regular';
const newfont2 = 'NotoSerifDogra-Regular';
const newfont3 = 'Merriweather-Regular';
const newfont4 = 'ShadowsIntoLight-Regular';
const newfont5 = 'NotoSerifDogra-Regular';
const NewFont = 'BebasNeue-Regular';

const Education = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          right: 0,
          position: 'absolute',
        }}>
        <View style={styles.thirdCircle}>
          <View style={styles.secCircle}>
            <View style={styles.firstCircle}></View>
          </View>
        </View>
      </View>
      <View style={styles.EducationContainer}>
        <Text style={styles.EduText}>E</Text>
        <Text style={styles.EduText}>D</Text>
        <Text style={styles.EduText}>U</Text>
        <Text style={styles.EduText}>C</Text>
        <Text style={styles.EduText}>A</Text>
        <Text style={styles.EduText}>T</Text>
        <Text style={styles.EduText}>I</Text>
        <Text style={styles.EduText}>O</Text>
        <Text style={styles.EduText}>N</Text>
      </View>

      <FlatList
        data={EducationData}
        renderItem={({item}) => (
          <View style={styles.EduMainCont}>
            <View style={styles.EdFirstCont}>
              <Text style={styles.EduDate}>{item.date}</Text>
              <Text style={styles.EdufontName}>{item.title}</Text>
              {/* <Text style={[styles.EduName, { marginTop: windowHeight/130,}]}>in</Text> */}
              <Text style={[styles.EduName, {marginTop: windowHeight / 250}]}>
                {item.course}
              </Text>
              <Text style={styles.EduFromFont}>Form :</Text>
              <Text style={styles.EduFrom}>{item.from}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Education;

const styles = StyleSheet.create({
  thirdCircle: {
    height: windowHeight - 30,
    width: windowWidth * 5,
    backgroundColor: 'rgba(41, 41, 41, 0.3)',
    borderRadius: 500,
    marginRight: windowWidth / 9,
    justifyContent: 'center',
  },
  secCircle: {
    height: windowHeight - 200,
    width: '97%',
    backgroundColor: 'rgba(29, 30, 30, 0.3)',
    borderRadius: 500,
    marginRight: 50,
    justifyContent: 'center',
  },
  firstCircle: {
    height: windowHeight - 340,
    width: '96.9%',
    backgroundColor: 'rgba(42, 43, 43, 0.5)',
    borderRadius: 500,
    justifyContent: 'center',
    alignItems: 'flex-end',
    // marginRight: 50,
  },
  EducationContainer: {
    height: windowHeight,
    width: windowWidth / 5,
    justifyContent: 'center',
    // backgroundColor:"rgba(99, 99, 95, 0.2)",
    alignItems: 'center',
    position: 'absolute',
  },
  EduText: {
    // right: windowWidth / 2.2,
    fontSize: windowWidth / 6,
    fontFamily: newfont,
    color: '#a1a2a1',
    bottom: 10,
    // borderColor:"#fff",
    // borderWidth:1
    
  },
  EduMainCont: {
    height: windowHeight / 2.4,
    width: windowWidth,
    alignItems: 'center',
    left: '10%',
    marginTop: windowHeight / 15,
  },
  EdFirstCont: {
    height: windowHeight / 4.5,
    width: windowWidth / 1.5,
    backgroundColor: 'rgba(73, 73, 74, 0.8)',
    borderRadius: windowWidth / 15,
    // elevation: 90,
    shadowColor: '#c9c9c9',
    padding: '3%',
  },
  EduDate: {alignSelf: 'flex-end'},
  EdufontName: {
    alignSelf: 'center',
    marginTop: windowHeight / 150,
    fontSize: windowWidth / 25,
    color: '#171718',
    fontWeight: '700',
  },
  EduName: {
    alignSelf: 'center',
    marginTop: windowHeight / 50,
    fontSize: windowWidth / 20,
    fontFamily: newfont5,
  },
  EduFromFont: {
    alignSelf: 'center',
    marginTop: windowHeight / 100,
    fontSize: windowWidth / 25,
    color: '#171718',
    fontWeight: '700',
  },
  EduFrom: {
    alignSelf: 'center',
    marginTop: windowHeight / 250,
    fontSize: windowWidth / 25,
    fontFamily: newfont5,
  },
});
