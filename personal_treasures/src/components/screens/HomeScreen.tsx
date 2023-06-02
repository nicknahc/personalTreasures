import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

interface ListingItem {
  id: number;
  title: string;
  image: any;
  price: number;
  description: string;
  category: string;
  brand: string;
  condition: string;
  availability: string;
  quantity: number;
  seller: string;
  shipping: string;
  rating: number;
  reviews: string[];
  attributes: { [key: string]: string };
  sku: string;
  date: string;
}

const listingsData: ListingItem[] = [
  {
    id: 1,
    title: 'Necklace',
    image: require('../../../assets/necklace.jpg'),
    price: 29.99,
    description: 'Beautiful necklace with a pendant.',
    category: 'Jewelry',
    brand: 'ABC Jewelry',
    condition: 'New',
    availability: 'In Stock',
    quantity: 10,
    seller: 'ABC Jewelry Store',
    shipping: 'Free Shipping',
    rating: 4.5,
    reviews: ['Great necklace!', 'Fast shipping!', 'Highly recommended.'],
    attributes: { color: 'Silver', length: '18 inches' },
    sku: 'NECKLACE001',
    date: '2023-05-30',
  },
  // Add more listing items
];

const HomeScreen = () => {
  const windowWidth = Dimensions.get('window').width;

  const renderListingItem = ({ item }: { item: ListingItem }) => {
    const itemWidth = windowWidth / 3 - 10; // Calculate the width dynamically based on the number of columns

    return (
      <TouchableOpacity style={[styles.listingItem, { width: itemWidth }]}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.listingImage} resizeMode="cover" />
        </View>
        <Text style={styles.listingTitle}>{item.title}</Text>
        <Text style={styles.listingPrice}>${item.price}</Text>
        {/* Render additional fields as needed */}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Categories</Text>
        {/* Add category buttons */}
      </View>
      <FlatList
        data={listingsData}
        renderItem={renderListingItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3} // Adjust the number of columns for the grid
        contentContainerStyle={styles.listingsContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listingsContainer: {
    flexGrow: 1,
  },
  listingItem: {
    margin: 5,
    alignItems: 'center',
  },
  imageContainer: {
    width: '80%',
    aspectRatio: 1, // Make the container square-like
    borderRadius: 10,
    overflow: 'hidden', // Ensure the image stays within the container
  },
  listingImage: {
    flex: 1,
    width: '100%',
    height: undefined, //
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
    listingTitle: {
    marginTop: 5,
    fontSize: 16,
  },
    listingPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
    
export default HomeScreen;