import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import { Link } from "expo-router";



export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.holder}>
      <Image source={require('../assets/image-removebg-preview.png')} style={{resizeMode:'contain', width:50, height:50, borderRadius:'100%',}}/>
      <Text style={styles.titulo}>Atualiza!</Text>
      </View>
      <View style={styles.InputsPlace}>
        <TextInput placeholder='  Nome' style={styles.input}></TextInput>
        <TextInput placeholder='  E-mail' style={styles.input}></TextInput>
        <TextInput placeholder='  Data de Nascimento' style={styles.input}></TextInput>
        <TextInput placeholder='  CPF' keyboardType='numeric' style={styles.input}></TextInput>
      </View>
      <TouchableOpacity style={styles.button2}>Cadastrar</TouchableOpacity>
      <Link href="/Sobre" style={styles.button2}>Voltar</Link>
      <Link href="/Home" style={styles.button}>Já tem uma conta?</Link>
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
    marginTop:10,
    width:200,
    height:50,
    textAlign:'center',
    backgroundColor:'#fffffc',
    color:'#004aad',
    fontFamily:'arial',
    fontWeight:'700',
    alignItems:'center',
    justifyContent:'center',
    display:'flex',
    borderRadius:10,
    borderWidth:1.5,
    borderBottomWidth:5,
    borderColor:'#004aad'  ,
  },
  button2:{
    marginTop:10,
    width:200,
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
    borderWidth:1.5,
    borderBottomWidth:5,
    borderColor:'#5271ff'  , 
  },

  InputsPlace:{
    display:'flex',
    alignItems:'center'
  },
  input:{
    width:200,
    height:40,
    backgroundColor:'#ffffff',
    marginBottom:10,
    borderRadius:5,
    fontFamily:'monospace',
    borderWidth:1.5,
    borderColor:'#5271ff'
  }


});
