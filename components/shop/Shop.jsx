import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ShopScreen = () => {

  const products = [
    { title: 'Product Title 1', img: require('../../assets/images/walk.jpg'), price: 10, cat: 'Category 1' },
    { title: 'Product Title 2', img: require('../../assets//images/walk.jpg'), price: 10, cat: 'Category 2' },
    { title: 'Product Title 3', img: require('../../assets/images/walk.jpg'), price: 10, cat: 'Category 3' },
    { title: 'Product Title 4', img: require('../../assets//images/walk.jpg'), price: 10, cat: 'Category 4' },
    { title: 'Product Title 5', img: require('../../assets/images/walk.jpg'), price: 10, cat: 'Category 5' },
    { title: 'Product Title 6', img: require('../../assets//images/walk.jpg'), price: 10, cat: 'Category 6' },
    { title: 'Product Title 7', img: require('../../assets/images/walk.jpg'), price: 10, cat: 'Category 7' },
    { title: 'Product Title 8', img: require('../../assets//images/walk.jpg'), price: 10, cat: 'Category 8' },
    { title: 'Product Title 9', img: require('../../assets/images/walk.jpg'), price: 10, cat: 'Category 9' },
    { title: 'Product Title 10', img: require('../../assets//images/walk.jpg'), price: 10, cat: 'Category 10' },
  ];

  return (
    <View style={styles.container}>

      <ScrollView style={styles.productList} contentContainerStyle={styles.productListContainer}>
        {products.map((product, index) => (
          <View key={index} style={styles.productBox}>
            <Image source={product.img} style={styles.productImage} />
            <Text style={styles.productPrice}>${product.price}</Text>
            <Text style={styles.productTitle}>{product.title}</Text>
            <Text style={styles.productCategory}>{product.cat}</Text>
            <TouchableOpacity key={index} style={styles.addToCartButton}>
              <Text style={styles.addToCartButtonText}>Buy</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productList: {
    flex: 1,
    padding: 16,
  },
  productListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productBox: {
    width: '48%',
    marginBottom: 16,
    padding: 16,
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 24,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productTitle: {
    fontSize: 14,
    marginBottom: 8,
    textAlign: 'center',
  },
  productCategory: {
    fontSize: 12,
    color: '#888',
    marginBottom: 8,
    textAlign: 'center',
  },
  addToCartButton: {
    backgroundColor: '#08d4c6',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ShopScreen;
