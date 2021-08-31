import React from 'react';
import Loading from "./Loading";
import {Alert} from "react-native";
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = "c98df855229618a9bfa933d0f92f953f";

export default class extends React.Component{
  state={
    isLoading:true,
  };

  getWeather= async(latitude,longitude)=>{
    const{data}=await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
      console.log(data);
    };

  getLocation=async ()=>{
    try{
      //애플리케이션 사용자의 현재 위치 확인 프로미스 함수
      // Location.requestForegroundPermissionsAsync 이 작동하지 않는다면 
      //프로미스를 리턴한다 
      //만약 사용자가 permission 을 안주면 에러를 발생시킨다.(자바스크립트 에러)
      await Location.requestForegroundPermissionsAsync();
      const {coords :{latitude,longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(lat,long);
      this.setState({
          isLoading:false,
        })
      // Sebd ti API and get Weather
    }catch(error){
      //try 안에 에러가 발생시 실행
      Alert.alert("Can't find you.", "So sad");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading}=this.state;
  return isLoading ? <Loading/> : null; 

  }
}



//저장 후에 즉시 전체 애플리케이션을 reload한다.
//splash 스크린이 잠깐 보이고 애플리케이셔이 나타난다.
//이것을 live load라고 한다 (내가 저장하면 자동으로 리프레쉬)
//새로고침을 수동으로 하고 싶다면 command or ctrl + R
//Cordova or PhoneGap 이용해서 .. 그 안에 html CSS 를 넣는다.(웹 안에서 작동하는 웹사이트) => 하이브리드, 웹뷰 방식
//