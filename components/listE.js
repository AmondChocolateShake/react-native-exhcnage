import {View,Text,Button,StyleSheet, TextInput, ScrollView} from 'react-native';



function ListE(props){
    

    return(
        <View>
            <Text>{props.name}</Text>
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