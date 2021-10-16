import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground, ScrollView, Image, Platform} from 'react-native';

export default class Canudosdeinox extends Component{

static navigationOptions = {
    header:null
  }
  render(){
    return(
      <ScrollView>
      <ImageBackground style = {styles.bg} source = {require('./fundov.jpg')}>
          <View style = {styles.cabecalho}>
            <Text style = {styles.titulo}>
            Eco
           </Text>
        </View>
<View style={{flex:1, marginTop:Platform.OS =='ios'? 20 : 0, alignItems:'center'}}>
  <View style={styles.containerimg}>
    <Image source = {require('./Imagens/kit-canudos-ecologicos-inox.jpg')} style ={styles.img}/>
    
        <Text style={styles.text}>
        Kit Ecológico de Canudos de inox</Text>
        <Text style={styles.prec}>R$22,99 </Text>
        <Text style={styles.descr}>
        CANUDOS INOX {"\n"}
CANUDO CURVADO LISO 6,00 MM 21,6 CM{"\n"} 
CANUDO RETO TORCIDO 5,80 MM 20 CM{"\n"}
ESCOVINHA DE NYLON 18,5 CM {"\n"}
SAQUINHO COM PERSONALIZAÇÃO {"\n"}
UTILIZADOS PARA CANUDOS INOX{"\n"} 
PRODUZIDAS COM MATERIAL 100% ALGODÃO.{"\n"}
NA COR CRU.{"\n"}
TAMANHO 5,5X25</Text> 
        <Text></Text>
        <TouchableOpacity
            style={[styles.btnproduto, {backgroundColor:'#FF3366'}]}
            onPress={() =>
              alert(
                'Compra Realizada com Sucesso'
              )
            }>
            <Text style={styles.textBtn}>Comprar</Text>
          </TouchableOpacity>
          
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Produtos')}style={[styles.btnproduto, {backgroundColor:'#666633'}]}>
            <Text style={styles.btnText}>Votar aos Produtos</Text>
        </TouchableOpacity> 
        
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Principal')}style={[styles.btnproduto, {backgroundColor:'#336633'}]}>
            <Text style={styles.btnText}>Voltar ao Menu Inicial</Text>
          </TouchableOpacity> 
          <Text></Text>
        </View>
        </View>
        </ImageBackground>
      </ScrollView>
       );
  }
}
const styles = StyleSheet.create({
  
  containerimg:{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    
  },
  img:{
    marginTop: 5,
    width: 250,
    height: 400,
    position: 'relative'
  },

  text:{
    marginTop: 20,
    fontSize:20,
    marginHorizontal: 20,
    fontWeight: 'bold',
    color:'white'
  },
  descr:{
    fontSize:20,
    marginHorizontal: 20,
    fontWeight: 'bold',
    color:'white'
  },
  prec:{
    fontSize:20,
    marginHorizontal: 20,
    fontWeight: 'bold',
    color:'red'
  },
  bg: {
    flex: 1, 
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
    color:'#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold' 
  },
  btnText:{
    color:'white',
    fontWeight:'bold',
    fontSize: 15,
    alignItems: 'center'
  },
  btnproduto: {
    marginTop:5,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    width:150,
    height:40,
    borderRadius: 5,
  }
});