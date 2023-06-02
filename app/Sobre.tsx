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
      <Text style={{width:250, color:'white'}}>Somos uma empresa com a finalidade de entregar o melhor e mais interessante conteúdo para você, nossa missão é espalhar a informação para o alcance de todos, de forma divertida e dinâmica, na palma da sua mão</Text>
      </View>
      </View>
      <Link href="Cadastro" style={styles.button}>Cadastro</Link>
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
