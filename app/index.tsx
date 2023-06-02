import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Link } from "expo-router";



export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.holder}>
      <Image source={require('../assets/image-removebg-preview.png')} style={{resizeMode:'contain', width:150, height:150, borderRadius:'100%',}}/>
      <Text style={styles.titulo}>Atualiza!</Text>
      <View style={styles.texto}>
      <Text style={{width:250, color:'white'}}>Seu app de informações relavantes feto para você. Junte-se a nós e receba semanalmente uma coletânea de informações selecionadas para seu perfil e seus interesses</Text>
      </View>
      </View>
      <Link href="/Sobre" style={styles.button}>Sobre</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7386e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize:26,
    fontWeight:'bold',
    color:'white',
    marginBottom:30,
  },
  holder:{
    display:'flex',
    textAlign:'justify',
    alignItems:'center',
    justifyContent:'center'
  },
  button:{
    marginTop:20,
    width:100,
    height:50,
    textAlign:'center',
    backgroundColor:'#004aad',
    color:'white',
    fontFamily:'arial',
    fontWeight:'700',
    alignItems:'center',
    justifyContent:'center',
    display:'flex',
    borderRadius:10,  
  },
  texto:{
    padding:5,
    backgroundColor:'#004aad',
    borderRadius:10,
    boxShadow: '10px 8px 1px #5271ff',
  }


});
