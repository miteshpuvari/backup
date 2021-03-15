import React from 'react';
import {FlatList,View, Text, TouchableOpacity, Touchable} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';


import ProductItem from '../../components/shop/ProductItem';
import cartActions from '../../store/actions/card';
import HeaderButton from '../../components/UI/HeaderButton';
import { log } from 'react-native-reanimated';

const ProductOverViewScreen = props => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();
    return (<FlatList data={products} 
                      keyExtractor={item => item.id} 
                      renderItem={itemData => <ProductItem  image={itemData.item.imageUrl} 
                                                            title={itemData.item.title}  
                                                            price={itemData.item.price}
                                                            description={itemData.item.description}
                                                            onViewDetail={() => {
                                                                props.navigation.navigate('ProductDetail', {
                                                                    productId: itemData.item.id,
                                                                    productTitle: itemData.item.title
                                                                });
                                                            }}
                                                            onAddToCart={() => {
                                                                dispatch(cartActions.addToCard(itemData.item));
                                                              }}
                                                /> } 
            />
    );
};

ProductOverViewScreen.navigationOptions = navData =>{
    return {
    headerTitle: 'All Products',
    headerRight: () => (
        <TouchableOpacity onPress={() => {
            navData.navigation.navigate('Cart')
        }}>
        <View>
        <Ionicons name="md-cart" size={32} color="white" />
        </View>
        </TouchableOpacity>
      )};

    //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //         <Item title='Cart' iconName='md-cart' onPress={() => {}} />
    //     </HeaderButtons>
};

export default ProductOverViewScreen;