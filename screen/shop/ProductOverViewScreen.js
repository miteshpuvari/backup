import React from 'react';
import {FlatList} from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

const ProductOverViewScreen = props => {
    const product = useSelector(state => state.products.availableProducts);
    return (<FlatList data={product} 
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
                                                            onAddToCart={() => {}}
                                                /> } 
            />
    );
};

ProductOverViewScreen.navigationOptions = {
    headerTitle: 'All Products' 
};

export default ProductOverViewScreen;