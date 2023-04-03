
import {React,useState} from 'react';
import { View,Text, Button,StyleSheet,TextInput } from 'react-native';
import { Fragment } from 'react/cjs/react.production.min';


const styles=StyleSheet.create({
  lay1:{
    flex:6,
    flexDirection:"row",
    backgroundColor:"white",
  },
  lay2:{
    flex:1,
    backgroundColor:"white",
    alignItems:"center",
  },
  listCon:{
    flex:6,
    backgroundColor:"blue",
  },
  btnCon:{
    flex:3,
    backgroundColor:"red",
    justifyContent:"space-around",
    alignItems:"center"
  },
  total:{
    flex:1,
    flexDirection:"row",
    width:"90%",
    alignItems:"center",
  },
  price:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
  },
  euroInput:{
    backgroundColor:"grey",
    width:100,
    height:40,
  },
  wonInput:{
    backgroundColor:"grey",
    width:100,
    height:40,
  },
  container:{
    
    justifyContent:"space-around"
  }

})



export default function App() {
  const[total,setTotal]=useState(0);
  const[euros,setEuros]=useState(0);
  const[won,setWon]=useState(0);
  let [hello,setHello]=useState(0);

  return (
    <Fragment>
      <View style={styles.lay1}>
        <View style={styles.listCon}>

        </View>
        <View style={styles.btnCon}>
          <View>            
            <TextInput value="nom de la donnee"/>
            <Button title="insertion" onPress={()=>{
              setTotal(total+1);
            }}></Button>
            <Button title="hello" onPress={()=>{setHello(hello+1)}}></Button>
          </View>
          
          <View style={styles.container}>
            <TextInput style={styles.euroInput} value="EUROS" />
            <TextInput style={styles.wonInput} value="WON"/>
          </View>
        </View>
      </View>


      <View style={styles.lay2}>
        <View style={styles.total}>
          <Text>Total  : </Text>
          <Text>{total}</Text>
          <Text>{hello}</Text>
        </View>
        <View style={styles.price}>
          {/* <Text>EUROS : {euros}</Text> */}
          {/* <Text>WON : {won}</Text> */}
        </View>
      </View>
    </Fragment>
  );
}


