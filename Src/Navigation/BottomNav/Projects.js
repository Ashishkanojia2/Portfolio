import {Dimensions, StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {ProjectData} from '../../FlatListData/ProjectData';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const newfont = 'IMFellFrenchCanonSC-Regular';
const newfont2 = 'NotoSerifDogra-Regular';
const newfont3 = 'Merriweather-Regular';
const newfont4 = 'ShadowsIntoLight-Regular';
const newfont5 = 'NotoSerifDogra-Regular';
const NewFont = 'BebasNeue-Regular';

const ProData = ProjectData;

const Projects = () => {
  return (
    <View style={styles.main}>
      <View style={styles.MainContainer}>
        <View style={styles.LeftContainer}>
          <View style={styles.FirstLeftCont}>
            <Text style={styles.LeftContText}>P</Text>
            <Text style={styles.LeftContText}>R</Text>
            <Text style={styles.LeftContText}>O</Text>
            <Text style={styles.LeftContText}>J</Text>
            <Text style={styles.LeftContText}>E</Text>
            <Text style={styles.LeftContText}>C</Text>
            <Text style={styles.LeftContText}>T</Text>
          </View>
          <View style={styles.SecLeftCont}>
            <Text style={styles.SecLeftContText}>P</Text>
            <Text style={styles.SecLeftContText}>R</Text>
            <Text style={styles.SecLeftContText}>O</Text>
            <Text style={styles.SecLeftContText}>J</Text>
            <Text style={styles.SecLeftContText}>E</Text>
            <Text style={styles.SecLeftContText}>C</Text>
            <Text style={styles.SecLeftContText}>T</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={{alignItems: 'flex-end'}}>
            <FlatList
              data={ProData}
              renderItem={({item}) => (
                <View style={styles.ProjContainer}>
                  {/* <Image/>  */}
                  <Text style={styles.ProjectDateTxt}>{item.Date}</Text>
                  <Text style={styles.ProjectNameTxt}>{item.ProjectName}</Text>
                  <Text style={styles.ProjectDescTxt}>{item.Description}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Projects;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  container: {
    height: windowHeight / 8,
    width: windowWidth - 50,
    backgroundColor: 'gray',
  },
  MainContainer: {
    flex: 1,
    // backgroundColor: '#0a193a',
    flexDirection: 'row',
  },
  LeftContainer: {
    // backgroundColor: '#5d3100',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {flex: 3},
  FirstLeftCont: {alignItems: 'center', position: 'absolute'},
  LeftContText: {
    fontSize: windowWidth / 4,
    fontFamily: newfont,
    color: '#292a29',
  },
  SecLeftCont: {alignItems: 'center'},
  SecLeftContText: {
    color: '#fff',
    fontSize: windowWidth / 7,
    fontFamily: newfont,
    // shadowColor:'#17e83f',
    // elevation: 100,
    // fontWeight:"900"
  },
  ProjContainer: {
    height: windowHeight / 6,
    width: windowWidth / 1.5,
    backgroundColor: '#1a1b1a',
    margin: 10,
    borderTopLeftRadius: windowWidth / 35,
    borderBottomLeftRadius: windowWidth / 35,
    padding: '2%',
  },
  ProjectDateTxt: {
    color: '#767775',
    fontSize: windowWidth / 30,
    alignSelf: 'flex-end',
  },
  ProjectNameTxt: {
    color: '#fff',
    fontSize: windowWidth / 20,
    alignSelf: 'center',
    marginTop: '2%',
    fontFamily: newfont5,
    textDecorationLine:"underline",
    letterSpacing:1
    
  },
  ProjectDescTxt: {
    color: '#848583',
    fontSize: windowWidth / 35,
    marginTop: '4%',
  },
});
