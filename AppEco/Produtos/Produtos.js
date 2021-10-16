import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground, ScrollView, Platform, Image} from 'react-native';

export default class Produtos extends Component{

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
              <Image source = {require('./Imagens/copo-fibra-de-bambu.jpg')} style ={styles.img}/>
        <Text style={styles.text}>
        Copo Fibra De Bambu 
        </Text>
        <Text style={styles.prec}>
        R$14,60
        </Text>
        
         <TouchableOpacity onPress={()=>this.props.navigation.navigate('copofibradebambu')}style={[styles.btnproduto, {backgroundColor:'white'}]}>
            <Text style={styles.btnText}>Detalhes</Text>
          </TouchableOpacity>

        <Image source = {require('./Imagens/1_22_396.jpg')} style ={styles.img}/>
        <Text style={styles.text}>
        Copo Dobrável de Palha de Trigo</Text>
        <Text style={styles.prec}>R$21,90 
        </Text>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('CopoDobraveldePalhadeTrigo')}style={[styles.btnproduto, {backgroundColor:'white'}]}>
            <Text style={styles.btnText}>Detalhes</Text>
          </TouchableOpacity>

        <Image source = {require('./Imagens/Tigela_1000ml_Imbuia_715_Evo_Edit.jpg')} style ={styles.img}/>
        <Text style={styles.text}>
        Tigela 1000 ml Imbuia{"\n"}</Text>
        <Text style={styles.prec}>R$ 7,50
        </Text>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Tigela1000mlImbuia')}style={[styles.btnproduto, {backgroundColor:'white'}]}>
            <Text style={styles.btnText}>Detalhes</Text>
          </TouchableOpacity>

        <Image source = {require('./Imagens/JogoUtensilios_Terracota_7405_Evo-Edit.jpg')} style ={styles.img}/>
        <Text style={styles.text}>
        Jogo de Utensílios com suporte Terracota</Text>
        <Text style={styles.prec}>R$ 15,11 
        </Text>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('JogodeUtensilioscomsuporteTerracota')}style={[styles.btnproduto, {backgroundColor:'white'}]}>
            <Text style={styles.btnText}>Detalhes</Text>
          </TouchableOpacity>

        <Image source = {require('./Imagens/PratoLanche_Terracota_7247_Evo.jpg')} style ={styles.img}/>
        <Text style={styles.text}>
        Prato de Lanche Terracota</Text>
        <Text style={styles.prec}>R$ 5,61
        </Text>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('PRATOLANCHETERRACOTA')}style={[styles.btnproduto, {backgroundColor:'white'}]}>
            <Text style={styles.btnText}>Detalhes</Text>
          </TouchableOpacity>

        <Image source = {require('./Imagens/prato-evo-petisqueira-serve-salgado.jpg')} style ={styles.img}/>
        <Text style={styles.text}>
        Prato Evo Petisqueira Serve Salgado Bar Restaurantes 3 Und</Text>
        <Text style={styles.prec}>R$34,90
        </Text>

      <TouchableOpacity onPress={()=>this.props.navigation.navigate('PratoPetisqueiraSalgado')}style={[styles.btnproduto, {backgroundColor:'white'}]}>
            <Text style={styles.btnText}>Detalhes</Text>
          </TouchableOpacity>

        <Image source = {require('./Imagens/canudo-de-bambu-canudo-ecologico.jpg')} style ={styles.img}/>
        <Text style={styles.text}>
        Canudo de Bambu</Text>
        <Text style={styles.prec}>R$ 8,70
        </Text>

      <TouchableOpacity onPress={()=>this.props.navigation.navigate('canudodeBambu')}style={[styles.btnproduto, {backgroundColor:'white'}]}>
            <Text style={styles.btnText}>Detalhes</Text>
          </TouchableOpacity>

        <Image source = {require('./Imagens/kit-canudos-ecologicos-inox.jpg')} style ={styles.img}/>
        <Text style={styles.text}>
        Kit Ecológico de Canudos de inox</Text>
        <Text style={styles.prec}>R$ 22,99
        </Text> 
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Canudosdeinox')}style={[styles.btnproduto, {backgroundColor:'white'}]}>
            <Text style={styles.btnText}>Detalhes</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={[styles.btnproduto, {backgroundColor:'#FFCC99', marginTop:20}]}>
            <Text style={styles.btnText}>Voltar</Text>
          </TouchableOpacity> 
      </View>
      </View>
      </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  
  containerimg:{
      marginTop: 10,
      marginLeft: 80,
      marginBottom: 10,
    
  },
  img:{
    marginTop: 5,
    width: 200,
    height: 200,
    position: 'relative'
  },

  text:{
    fontSize:20,
    color: 'white'
  },
  prec:{
    fontSize:20,
    fontWeight: 'bold',
    color:'red'
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
  bg: {
    flex: 1, 
  },
  btnText:{
   color:'#006666',
    fontWeight:'bold',
    fontSize: 15,
    alignItems: 'center'
  },
  btnproduto: {
    marginTop:5,
    marginLeft: 60,
    justifyContent:'center',
    alignItems:'center',
    width:80,
    height:40,
    borderRadius: 5
  }
});