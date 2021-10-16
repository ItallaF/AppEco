import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground, ScrollView, Image, Platform} from 'react-native';

export default class Tigela1000mlImbuia extends Component{

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
    <Image source = {require('./Imagens/Tigela_1000ml_Imbuia_715_Evo_Edit.jpg')} style ={styles.img}/>
      <View style={styles.texv}>
        <Text style={styles.text}>
        TIGELA 1000ML IMBUIA</Text>
        <Text style={styles.prec}>R$ 7,15</Text>
        <Text style={styles.descr}>
        Tigela produzida com materiais sustentáveis de alta qualidade. {"\n"}Ela é   resistente e fácil de limpar, são cumbucas muito práticas e {"\n"}versáteis. Para servir caldos, sopas, açaí e demais alimentos. {"\n"}Podem ser levadas ao microondas {"\n"}para breve aquecimento. Além {"\n"}de possuir o design clean e moderno, trazendo beleza e delicadeza para sua cozinha.{"\n"}{"\n"}
        </Text>
        </View>
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
    width: 300,
    height: 250,
    position: 'relative'
  },
  texv: {
    marginTop: 20,
    justifyContent: 'center',
  },
  text:{
    flexDirection: 'column',
    marginTop: 20,
    marginHorizontal: 20,
    fontSize:20,
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
    marginLeft: 40,
    justifyContent:'center',
    alignItems:'center',
    width:150,
    height:40,
    borderRadius: 5,
  }
});