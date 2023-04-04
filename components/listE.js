import {View,Text,Button,StyleSheet, TextInput} from 'react-native';
import { useState } from 'react/cjs/react.production.min';


function ListE(){
    // const[num,setNum]=useState(0);
    // const[name,setName]=useState("");
    // const[won,setWon]=useState(0);
    // const[euro,setEuro]=useState(0);
    // setName("name");
    // setWon(100);
    // setEuro(100);

    return(
        <View style={itemStyles.con}>
            <View
            style={{
                flexDirection:"row",
                justifyContent:"space-between",
                
                
            }}>
                <Text>1. Banna</Text>
                <Button
                title='X'
                ></Button>
            </View>

            <View
            style={{
                flexDirection:"row",
                justifyContent:"space-between",
            }}>
                <Text>100won</Text>
                <TextInput></TextInput>
            </View>

            <View
            style={{
                flexDirection:"row",
                justifyContent:"space-between",
            }}>
                <Text>100euros</Text>

                <View
                style={{
                    flexDirection:"row",
                }}>
                    <Button
                    title='ll'
                    ></Button>
                    <Button
                    title='he'
                    ></Button>
                </View>

            </View>
        </View>
    );
}

const itemStyles=StyleSheet.create({
    con:{
        height:300,
        width:200,
    }

})

export default ListE;