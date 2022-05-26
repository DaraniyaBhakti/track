import '../_mockLocation';
import React,{useState,useEffect,useContext} from 'react';
import {Context as LocationContext } from '../context/LocationContext'
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {requestPermissionAsync, watchPositionAsync, Accuracy  }from 'expo-location';
import Map from '../components/Map';

const TrackCreateScreen = () => {

  const {addLocation} = useContext(LocationContext)
  const [err, setErr] = useState(null)
  const startWatching = async() => {
    try{
      await requestPermissionAsync();
      await watchPositionAsync({
        accuracy:Accuracy.BestForNavigation,
        timeInterval:1000,
        distanceInterval:10
      },(location)  =>{
        addLocation(location);
      })
    }catch(e){
      setErr(e);
    } 
  }

  useEffect(() => {
    startWatching()
  },[])

  return (
      <SafeAreaView forceInset={{top:'always'}}>
        <Text h3>Create a track</Text>
        <Map/>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen
