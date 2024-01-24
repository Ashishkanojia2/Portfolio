import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';

import {
  backendData,
  programmingData,
  MiscellaneousData,
  familiarData,
  CurrentlyWorkingLang,
  FrontendData,
} from '../../FlatListData/Data';

import Projects from './Projects';
const Data = CurrentlyWorkingLang;
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const newfont = 'IMFellFrenchCanonSC-Regular';
const newfont2 = 'NotoSerifDogra-Regular';
const newfont3 = 'Merriweather-Regular';
const newfont4 = 'ShadowsIntoLight-Regular';
const newfont5 = 'NotoSerifDogra-Regular';
const NewFont = 'BebasNeue-Regular';

const Briefinfo = () => {
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#000'}}>
        <View>
          <Image
            source={require('../../Helper/images/AshishImg.jpg')}
            style={styles.Img}
          />
        </View>
        <ScrollView>
          <View>
            <View>
              <Text style={styles.d_Text}>D</Text>
              <Text style={styles.dev_Text}>eveloper</Text>
              <Text style={styles.Mob_text}>MOBILE APP</Text>
              <Text style={styles.Name_Text}>Ashish Kanojia</Text>
            </View>
            <View style={styles.contLink}>
              <TouchableOpacity>
                <Image
                  source={require('../../Helper/images/iconsMail.png')}
                  style={styles.contIconFirst}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../Helper/images/iconsGit.png')}
                  style={styles.contIconSec}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../Helper/images/iconsIn.png')}
                  style={styles.contIconThird}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: '#fff',
                marginTop: windowHeight / 4.5,
                fontSize: windowWidth / 14,
                alignSelf: 'center',
              }}>
              A bit more about me
            </Text>
            <Text
              style={{
                color: '#fff',
                marginTop: '-5%',
                fontSize: windowWidth / 14,
                alignSelf: 'center',
              }}>
              __________
            </Text>
            <View style={styles.aboutMe}>
              <ScrollView>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 20,
                    // lineHeight: 30,
                    // alignSelf: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                  }}>
                  An Android developer is a professional who specializes in
                  creating applications for the Android operating system. Here's
                  a brief summary of the key responsibilities, skills, and tasks
                  associated with Android development.Designing and building
                  Android applications for smartphones, tablets, and other
                  devices : Designing and building Android applications for
                  smartphones, tablets, and other devices. Android applications
                  for smartphones, tablets, and other devices : Designing and
                  building Android applications for smartphones, tablets, and
                  other devices.
                </Text>
              </ScrollView>
            </View>
            <View style={styles.SkillContaine}>
              <View
                style={{
                  height: windowHeight / 13,
                  width: windowWidth + 20,
                  backgroundColor: '#3a3b3a',
                  marginLeft: -10,
                  position: 'absolute',
                  transform: [{rotate: '7deg'}],
                  borderColor: '#fff',
                  borderWidth: 2,

                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: windowWidth / 18,
                    paddingHorizontal: 10,
                    fontFamily: newfont5,
                  }}>
                  lls skills skills skills skills skills skills
                </Text>
              </View>
              <View
                style={{
                  height: windowHeight / 13,
                  width: windowWidth + 20,
                  backgroundColor: '#000',
                  marginLeft: -10,
                  position: 'absolute',
                  transform: [{rotate: '-8deg'}],
                  borderColor: '#3a3b3a',
                  borderWidth: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: windowWidth / 15,
                    fontFamily: newfont5,
                  }}>
                  Let's talk about some skills
                </Text>
              </View>

              {/* <Text style={styles.skillTextCont}>
                Let's talk About some 
              </Text>
              <Text style={styles.skillTextCont}>
                skills
              </Text> */}
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    color: '#fff',
                    marginTop: windowHeight / 6,
                    fontSize: windowWidth / 20,
                    marginBottom: windowHeight / 10,
                  }}>
                  Currently These Language used for development..
                </Text>
              </View>

              <View>
                <FlatList
                  data={Data}
                  horizontal={true}
                  renderItem={({item}) => (
                    <View style={styles.skillFlatContainer}>
                      <Image
                        source={item.image}
                        style={styles.skillFlat_img_Cont}
                      />
                      <Text style={styles.skillFlat_Text_Cont}>
                        {item.name}
                      </Text>
                    </View>
                  )}
                />
              </View>

              {/* frontEnd data start From here */}

              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    color: '#fff',
                    marginTop: windowHeight / 20,
                    fontSize: windowWidth / 17,
                  }}>
                  FrontEnd
                </Text>
              </View>
              <View>
                <FlatList
                  data={FrontendData}
                  horizontal={true}
                  renderItem={({item}) => (
                    <View style={styles.skillFlatContainer}>
                      <Image
                        source={item.image}
                        style={styles.skillFlat_img_Cont}
                      />
                      <Text style={styles.skillFlat_Text_Cont}>
                        {item.name}
                      </Text>
                    </View>
                  )}
                />
              </View>

              {/* Backend data start From here */}

              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    color: '#fff',
                    marginTop: windowHeight / 20,
                    fontSize: windowWidth / 17,
                  }}>
                  Backend
                </Text>
              </View>
              <View>
                <FlatList
                  data={backendData}
                  horizontal={true}
                  renderItem={({item}) => (
                    <View style={styles.skillFlatContainer}>
                      <Image
                        source={item.image}
                        style={styles.skillFlat_img_Cont}
                      />
                      <Text style={styles.skillFlat_Text_Cont}>
                        {item.name}
                      </Text>
                    </View>
                  )}
                />
              </View>

              {/* progrmming data start From here */}

              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    color: '#fff',
                    marginTop: windowHeight / 20,
                    fontSize: windowWidth / 17,
                  }}>
                  Programming Language
                </Text>
              </View>
              <View>
                <FlatList
                  data={programmingData}
                  horizontal={true}
                  renderItem={({item}) => (
                    <View style={styles.skillFlatContainer}>
                      <Image
                        source={item.image}
                        style={styles.skillFlat_img_Cont}
                      />
                      <Text style={styles.skillFlat_Text_Cont}>
                        {item.name}
                      </Text>
                    </View>
                  )}
                />
              </View>

              {/* Miscellaneous data start From here */}

              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    color: '#fff',
                    marginTop: windowHeight / 20,
                    fontSize: windowWidth / 17,
                  }}>
                  Miscellaneous
                </Text>
              </View>
              <View>
                <FlatList
                  data={MiscellaneousData}
                  horizontal={true}
                  renderItem={({item}) => (
                    <View style={styles.skillFlatContainer}>
                      <Image
                        source={item.image}
                        style={styles.skillFlat_img_Cont}
                      />
                      <Text style={styles.skillFlat_Text_Cont}>
                        {item.name}
                      </Text>
                    </View>
                  )}
                />
              </View>

              {/* familiar data start From here */}

              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    color: '#fff',
                    marginTop: windowHeight / 20,
                    fontSize: windowWidth / 17,
                  }}>
                  Familiar With
                </Text>
              </View>
              <View>
                <FlatList
                  data={familiarData}
                  horizontal={true}
                  renderItem={({item}) => (
                    <View style={styles.skillFlatContainer}>
                      <Image
                        source={item.image}
                        style={styles.skillFlat_img_Cont}
                      />
                      <Text style={styles.skillFlat_Text_Cont}>
                        {item.name}
                      </Text>
                    </View>
                  )}
                />
              </View>
            </View>
            <View style={{backgroundColor: 'red', height:windowHeight, width:windowWidth}}>
              <Projects />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Briefinfo;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#000',
    flex: 1,
  },
  Container: {
    backgroundColor: '#3a3b3a',
    height: windowHeight / 2,
    width: windowWidth,
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  textStyle: {color: '#fff', fontSize: 30},
  textContiner: {},
  Img: {
    height: windowHeight / 1.5,
    width: windowWidth / 1,
    marginTop: windowHeight / 9,
    borderBottomRightRadius: 200,
    marginLeft: 50,
    position: 'absolute',
  },
  d_Text: {
    color: '#565757',
    fontSize: 200,
    fontFamily: newfont,
    marginTop: '20%',
    position: 'absolute',
  },
  dev_Text: {
    color: '#fff',
    fontSize: windowWidth / 9,
    marginTop: '42%',
    marginLeft: '20%',
    fontFamily: newfont,
    letterSpacing: 2,
    position: 'absolute',
  },
  Mob_text: {
    color: '#fff',
    fontSize: windowWidth / 27,
    marginTop: '41%',
    marginLeft: '45%',
    fontFamily: newfont2,
    letterSpacing: 1,
    position: 'absolute',
    fontWeight: '300',
  },
  Name_Text: {
    color: '#fff',
    fontSize: windowWidth / 20,
    marginTop: '53%',
    marginLeft: '45%',
    fontFamily: newfont2,
    letterSpacing: 2,
    position: 'absolute',
    fontWeight: '300',
  },
  contLink: {
    marginTop: windowHeight / 1.6,
    marginLeft: '8%',
    width: windowWidth / 8,
  },
  contIconFirst: {
    marginTop: '1%',
    height: windowHeight / 20,
    width: windowWidth / 10,
  },

  contIconSec: {
    marginTop: '20%',
    height: windowHeight / 18,
    width: windowWidth / 10,
  },
  contIconThird: {
    marginTop: '20%',
    height: windowHeight / 21,
    width: windowWidth / 13,
    marginLeft: '10%',
  },
  aboutMe: {
    height: windowHeight / 2.3,
    width: windowWidth - 100,
    backgroundColor: 'rgba(46, 46, 43, 0.6)',
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#fff',
    shadowOpacity: 2,
    marginTop: windowHeight / 10,
    marginBottom: windowHeight / 7,
    shadowColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
  },
  SkillContaine: {
    backgroundColor: '#000',
    flex: 1,
    width: windowWidth,
    // shadowColor: 'red',
    // shadowOpacity: 0.6,
    elevation: 10,
  },
  skillTextCont: {
    color: '#fff',
    alignSelf: 'center',
    // fontSize: 25,
    fontSize: windowWidth / 19,
    fontFamily: newfont5,
  },
  skillFlatContainer: {
    backgroundColor: '#3a3b3a',
    margin: 10,
    height: windowHeight / 8,
    width: windowWidth / 4.5,
    // paddingBottom:"25%"
    borderRadius: 10,
  },
  skillFlat_img_Cont: {
    marginTop: windowHeight / 100,
    alignSelf: 'center',
    height: windowHeight / 15,
    width: windowWidth / 7,
  },
  skillFlat_Text_Cont: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: windowWidth / 25,
    paddingBottom: '1%',
  },
});
