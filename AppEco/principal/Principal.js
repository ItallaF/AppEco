import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, Platform, ScrollView, ImageBackground, TextInput} from 'react-native';
import * as firebase from 'firebase';

export default class App extends Component{
  
  static navigationOptions = {
    header:null
  }



  constructor(){
    super();

    this.state = {
      email: '',
      senha: ''
    }

     const firebaseConfig = {
    apiKey: "AIzaSyCfE28v2qd6BbE7tU5luT8o6axePHDw-Hk",
    authDomain: "exemplo-715cb.firebaseapp.com",
    databaseURL: "https://exemplo-715cb.firebaseio.com",
    projectId: "exemplo-715cb",
    storageBucket: "exemplo-715cb.appspot.com",
    messagingSenderId: "822734154818",
    appId: "1:822734154818:web:441b48cdb6e7d856f551db"
  };
  if ( ! firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
   }
  

this.cadastrar = this.cadastrar.bind(this);

    this.entrar = this.entrar.bind(this);

  }



  entrar(){
    
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
      .then(()=>this.props.navigation.navigate('Produtos'))
        .catch((erro)=>{

          switch(erro.code){
            case 'auth/user-not-foud': alert('Usuario nao Cadastrado!')
          }
  })
  }

  cadastrar(){

    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
      .then(()=>alert('Cadastro realizado com Sucesso!'))
        .catch((erro)=>{

          switch(erro.code){
            case 'auth/email-already-in-use': alert('Email ja está cadastrado!')
          }

        })


  }
  
  render(){
    return(
      <ScrollView>
      <ImageBackground style = {styles.bg} source = {require('./papers.co-od15-nature-leaf-rain-green-8-wallpaper.jpg')}>
          <View style = {styles.cabecalho}>
            <Text style = {styles.titulo}>
            ECO
           </Text>
        </View>
        <View style = {{marginTop:90, justifyContent:'center',alignItems:'center',}}>
          <Text style={{fontSize:25, color:'white', fontWeight: 'bold'}}>Usario e Senha por favaor</Text>
          </View>
          <View style={styles.entrada}>
          <TextInput 
          style={styles.input} placeholder='Email' onChangeText = {(email)=>this.setState({email})} />

          <TextInput 
          style={styles.input} placeholder='Senha' secureTextEntry={true} onChangeText = {(senha)=>this.setState({senha})} />
        </View>
        <View style={{flex:1, marginTop:Platform.OS =='ios'? 20 : 0, alignItems:'center'}}>
        

        <View style={{marginTop:85}}>

          <TouchableOpacity onPress={this.entrar} style={[styles.btnContainer, {backgroundColor:'#FFFFFF'}]}>
            <Text style={styles.btnText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.cadastrar} style={[styles.btnContainer, {backgroundColor:'#FFFFFF'}]}>
            <Text style={styles.btnText}>Cadastrar</Text>
          </TouchableOpacity>

          <Text style={{marginTop:85}}>
          </Text>

        </View>
      </View>
      </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  btnContainer:{
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,
    width:200,
    height:80   
  },
  btnText:{
    color:'#006666',
    fontWeight:'bold',
    fontSize: 20
  },
  cabecalho:{
    marginTop: 20,
    height: 50,
    backgroundColor: '#009966',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 15,
        },        
    shadowOpacity: 0.1,
    shadowRadius: 8.0,
  },
  titulo:{
    color:'white',
    fontSize: 20,
    fontWeight: 'bold' 
  },
  bg: {
    flex: 1, 
  },
  
  entrada: {
  marginTop: 50,  
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  
  },

  input: {
  paddingHorizontal: 20,
  paddingVertical: 15,
  borderRadius: 15,
  backgroundColor: '#FFF',
  alignSelf: 'stretch',
  marginBottom: 23,
  marginHorizontal: 20,
  fontSize: 16,
  },
  
});
