import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { Data } from '../../Helper/images/ImagesData';
const imageData = Data()
const windowHeight = Dimensions.get('window').height;
const windowwidth = Dimensions.get('window').width;
const Firstfont = 'BreeSerif-Regular';
const dancingFont = 'DancingScript-Regular';
const domineFont = 'Domine-Regular';
const rubikFont = 'RubikDoodleTriangle';
const cairofont = 'CarioPlay-Regular';
const Home = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.Main}>
        <ScrollView>
          <View style={styles.devModeCont}>
            <Text style={styles.devModeText}>Devloper Mode</Text>
          </View>
          <View style={styles.headingContainer}>
            <Text style={[styles.headingText, {fontSize: windowwidth / 10}]}>
              Hey, I'm
            </Text>
            <Text
              style={[
                styles.headingText,
                {fontSize: windowwidth / 15, marginTop: '1%'},
              ]}>
              Ashish Kanojia
            </Text>
            <Text
              style={[
                styles.headingText,
                {fontSize: windowwidth / 20, marginTop: '1%'},
              ]}>
              Android Developer (frontEnd)
            </Text>
            {/* <Text style={[styles.headingText, {fontSize: windowwidth / 18}]}>
                Fontend Developer
              </Text> */}
          </View>
          <View style={styles.whiteContainer}>
            <View style={styles.dataContainer}>
              <Text style={styles.HeadingLang}>Specialized In</Text>
              <Text style={styles.HeadingLang}>Front End</Text>
              
              <View style={styles.langMainContainer}>
                <View style={styles.langContainer}></View>
                <View style={styles.langContainer}></View>
                <View style={styles.langContainer}></View>
              </View>
              {/* <Text style={styles.HeadingLang}>BackEnd End</Text>
              <ScrollView></ScrollView>
              <View style={styles.langMainContainer}>
                <View style={styles.langContainer}></View>
                <View style={styles.langContainer}></View>
                <View style={styles.langContainer}></View>
              </View>
              <Text style={styles.HeadingLang}>Other Specialized </Text>
              <ScrollView></ScrollView>
              <View style={styles.langMainContainer}>
                <View style={styles.langContainer}></View>
                <View style={styles.langContainer}></View>
                <View style={styles.langContainer}></View>
              </View> */}
            </View>
            <FlatList
            data={imageData}
            renderItem={({item})=>(
                <View>
                    <Text style={{color:"#000", fontSize:20}}>{item.name}</Text>
                  {/* <ImageBackground style={{width:100, height:100}} source={require(item.image)}/> */}
                  <Image source={item.image} style={{width:100, height:100}}/>
                </View>
            )}
            
            />
          </View>
        </ScrollView>
      </View>
    </View>
    // <Navigation/>
  );
};

export default Home;

const styles = StyleSheet.create({
  Main: {
    backgroundColor: '#000',
    height: windowHeight,
    width: windowwidth,
  },
  whiteContainer: {
    backgroundColor: '#e8e8e8',
    // marginTop: windowHeight / 2,
    height: windowHeight * 2,
    width: windowwidth,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  dataContainer: {
    margin: 20,
  },
  headingContainer: {
    marginTop: windowHeight / 2.4,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  headingText: {fontFamily: domineFont, fontSize: windowwidth / 11 , color:"#fff"},
  devModeCont: {alignItems: 'flex-end', marginRight: '5%'},
  devModeText: {fontFamily: rubikFont, fontSize: windowwidth / 30 , color:"#fff"},
  langMainContainer: {
    flexDirection: 'row',
    width: windowwidth,
    height: '15%',
    justifyContent: 'space-around',
    marginLeft: '-5%',
    backgroundColor: 'pink',
    alignItems: 'center',
  },
  langContainer: {
    height: '90%',
    width: '25%',
    backgroundColor: '#2f2f2f',
    borderRadius: 20,
  },
  HeadingLang: {
    color: '#000',
    fontSize: 20,
    fontFamily: domineFont,
  },
});
