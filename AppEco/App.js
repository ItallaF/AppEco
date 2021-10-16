import {createAppContainer, createStackNavigator} from 'react-navigation';

import Principal from './principal/Principal';
import Produtos from './Produtos/Produtos';

import copofibradebambu from './Produtos/copofibradebambu';
import CopoDobraveldePalhadeTrigo from './Produtos/CopoDobraveldePalhadeTrigo';
import Tigela1000mlImbuia from './Produtos/Tigela1000mlImbuia';
import JogodeUtensilioscomsuporteTerracota from './Produtos/JogodeUtensilioscomsuporteTerracota';
import PRATOLANCHETERRACOTA from './Produtos/PRATOLANCHETERRACOTA';
import PratoPetisqueiraSalgado from './Produtos/PratoPetisqueiraSalgado';
import canudodeBambu from './Produtos/canudodeBambu';
import Canudosdeinox from './Produtos/Canudosdeinox';

const telas = createStackNavigator({
  
  Principal:{
    screen:Principal
  },
  
  Produtos:{
    screen: Produtos
  },

  copofibradebambu:{
    screen:copofibradebambu
  },
   CopoDobraveldePalhadeTrigo:{
    screen:CopoDobraveldePalhadeTrigo
  },
  Tigela1000mlImbuia:{
    screen:Tigela1000mlImbuia
  },
  JogodeUtensilioscomsuporteTerracota:{
    screen: JogodeUtensilioscomsuporteTerracota
  },
  PRATOLANCHETERRACOTA:{
    screen:PRATOLANCHETERRACOTA
  },
  PratoPetisqueiraSalgado:{
    screen:PratoPetisqueiraSalgado
  },
  canudodeBambu:{
    screen:canudodeBambu
  },
  Canudosdeinox:{
    screen:Canudosdeinox
  },

});

export default createAppContainer(telas);