import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity,} from 'react-native';
import { Link } from "expo-router";



export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.holder}>
        <View style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <Image source={require('../assets/image-removebg-preview.png')} style={{resizeMode:'contain', width:50, height:50, borderRadius:'100%',}}/><Text style={styles.titulo}>Atualiza!</Text>
        </View>
        <View style={styles.Images}>
          <View>
            <Image source={require('../assets/shinji.png')} style={styles.imagem}/>
            <Image source={require('../assets/misato3.jpg')} style={styles.imagem}/>
            <Image source={require('../assets/rei.jpg')} style={styles.imagem}/>
            <Image source={require('../assets/rei3.jpg')} style={styles.imagem}/>
          </View>
          <View>
            <Image source={require('../assets/shinji.png')} style={styles.imagem}/>
            <Image source={require('../assets/shinji2.jpg')} style={styles.imagem}/>
            <Image source={require('../assets/shinji4.jpg')} style={styles.imagem}/>
            <Image source={require('../assets/rei3.jpg')} style={styles.imagem}/>
          </View>

        </View>
      </View>
      <Link href="/" style={styles.button}>Voltar</Link>
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
    fontSize:12,
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
  Images:{
    flex:1,
    display:'flex',
    flexDirection:'row'
  },
  imagem:{
    width:80,
    height:80,
    resizeMode:'contain',
    marginBottom:10,
    marginLeft:15,
    borderRadius:10,
  }


});
