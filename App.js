
import {React,useState} from 'react';
import {View,Text, Button,StyleSheet,TextInput, Keyboard, FlatList } from 'react-native';
import { Fragment } from 'react/cjs/react.production.min';
import ListE from './components/ListE';

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
  nameInput:{
    backgroundColor:"grey",
    width:120,
    height:40,
  },
  container:{
    flex:1,
    height:300,
    justifyContent:"space-around",
    
  }

})





export default function App(){


  return(
    <ListE></ListE>
  );
}

// export default function App() {
//   const[name,setName]=useState("");
//   const[price,setPrice]=useState(0);
//   const[total,setTotal]=useState(0);
//   const[euros,setEuros]=useState(0);
//   const[won,setWon]=useState(0);
  
//   return (
//     <Fragment>
//       <View style={styles.lay1}>
//         <View style={styles.listCon}>
//           <FlatList 
          
//           />
//         </View>

//         <View style={styles.btnCon}>
//           <View>            
//             <TextInput 
//             placeholder="nom de la donnee"
//             style={styles.nameInput}
//             value={name}
//             onChangeText={setName}
//             />
//             <Button title="insertion" onPress={()=>{
//               setName("");
//               Keyboard.dismiss();
//             }}></Button>
//           </View>
          
//           <View style={styles.container}>
//             <TextInput style={styles.euroInput} placeholder="EUROS" />
//             <TextInput style={styles.wonInput} placeholder="WON"/>
//           </View>
//         </View>
//       </View>


//       <View style={styles.lay2}>
//         <View style={styles.total}>
//           <Text>Total  : </Text>
//           <Text>{total}</Text>
//         </View>
//         <View style={styles.price}>
//           {/* <Text>EUROS : {euros}</Text> */}
//           {/* <Text>WON : {won}</Text> */}
//         </View>
//       </View>
//     </Fragment>
//   );
// }


