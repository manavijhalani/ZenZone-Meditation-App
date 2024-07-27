import { View, Text, TouchableOpacity,StyleSheet} from "react-native";
import React from 'react';

interface CustomButtonProps{
    onPress:()=>void;
    title:string;
    textStyles?:string;
    ContainerStyles?:string;
}

export default function CustomButton({onPress,title,textStyles="",ContainerStyles=""}:CustomButtonProps)
{
    return(
         
         <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={onPress}>
           <Text>{title}</Text>
         </TouchableOpacity>

    );
 }

 const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        borderRadius: 12,
        minHeight: 62,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: 'black', // Customize the color as needed
        fontSize: 18, // Customize the font size as needed
        fontWeight: '600', // Customize the font weight as needed
    },
});