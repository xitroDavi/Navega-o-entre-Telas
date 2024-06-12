import React from 'react';
import { Text, StyleSheet, View, Image} from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Details() {

    const route = useRoute();
    
  return (
    <View style={estilo.container}>
  
        <View style={estilo.card}>
            <View style={estilo.imageCardContent}>
                <Image style={estilo.img} source={{uri: route.params.imgUrl}}></Image>
            </View>
            
            <View style={estilo.assessmentCardContent}>
                <Image style={estilo.icon} source={require('../../assets/star-solid.png')}/>
                <Image style={estilo.icon} source={require('../../assets/star-solid.png')}/>
                <Image style={estilo.icon} source={require('../../assets/star-solid.png')}/>
                <Image style={estilo.icon} source={require('../../assets/star-half-solid.png')}/>
                <Image style={estilo.icon} source={require('../../assets/star-regular.png')}/>
                <Text style={estilo.assessmentText}>
                    (152 Avaliações)
                </Text>
            </View>
            <View style={estilo.deliveryCardContent}>
                <Image style={estilo.icon} source={require('../../assets/truck.png')}/>
                <Text style={estilo.deliveryText}>
                    Frete Grátis
                </Text>
            </View>
            <Text>{route.params.nome}</Text>
            <Text>{route.params.precoNormal}</Text>
            <Text>{route.params.precoPromocao}</Text>
            <Text>{route.params.metodoPagamento}</Text>

        </View>
      
    </View>

    
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ff',
    borderColor: '#90E0EF',
    paddingHorizontal: 20,
    marginTop: '50px',
  },

  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: '10px',
    height: 'auto',
    width: '85%',
    backgroundColor: '#FFF',
    borderRadius: '10px',
 },

 imageCardContent: {
    height: '200px',
    width: '165px',
 },

 img: {
    height: '100%',
    width: '100%',
 },

 icon: {
    height: '15px',
    width: '15px',
 },

 textCardContent: {
    display: 'flex',
    rowGap: '7px',
    width: '165px',
    height: 'auto',
 },

 deliveryCardContent: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: '3.5px',
 },

 deliveryText: {
    fontSize: '12px',
    fontWeight: '600',
    fontStyle: 'italic',
    color: '#1F9050',
 },

 assessmentCardContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: '3.5px',
 },

 assessmentText: {
    fontSize: '10.2px',
    fontWeight: '400',
    color: '#A5A5A5',
 },

 productNameText: {
    fontSize: '16px',
    fontWeight: '600',
 },

 priceCardContent: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '3.5px',
 },

 oldPriceText: {
    fontSize: '12px',
    fontWeight: '600',
    textDecorationLine: 'line-through',
    color: '#696969',
 },

 newPriceText: {
    fontSize: '17px',
    fontWeight: '700',
    color: '#1EAD2C',
 },

 paymentMethod: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#1EAD2C',
 },
});

/* <Text>{route.params.nome}</Text> */

/* 
    
*/