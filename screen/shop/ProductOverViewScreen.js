import React from 'react';
import { FlatList, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/card';

const ProductsOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {
            props.navigation.navigate('ProductDetail', {
              productId: itemData.item.id,
              productTitle: itemData.item.title
            });
          }}
          onAddToCart={() => {
            dispatch(cartActions.addToCart(itemData.item));
          }}
        />
      )}
    />
  );
};

ProductsOverviewScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Products',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          onPress={() => {
            navData.navigation.navigate('Cart');
          }}
        />
      </HeaderButtons>
    )
  };
};

export default ProductsOverviewScreen;




















// =========================================================================================
// import React from 'react';
// import {FlatList,Platform} from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// import HeaderButton from '../../components/UI/HeaderButton';
// import ProductItem from '../../components/shop/ProductItem';
// import * as cartActions from '../../store/actions/card';
// import { log } from 'react-native-reanimated';

// const ProductOverViewScreen = props => {
//     const products = useSelector(state => state.products.availableProducts);
//     const dispatch = useDispatch();
//     return (<FlatList data={products} 
//                       keyExtractor={item => item.id} 
//                       renderItem={itemData => (<ProductItem  image={itemData.item.imageUrl} 
//                                                             title={itemData.item.title}  
//                                                             price={itemData.item.price}
//                                                             description={itemData.item.description}
//                                                             onViewDetail={() => {
//                                                                 props.navigation.navigate('ProductDetail', {
//                                                                     productId: itemData.item.id,
//                                                                     productTitle: itemData.item.title
//                                                                 });
//                                                             }}
//                                                             onAddToCart={() => {
//             dispatch(cartActions.addToCart(itemData.item));
//           }}
//                       />) } 
//             />
//     );
// };


// ProductOverViewScreen.navigationOptions = navData =>{
//     return {
//     headerTitle: 'All Products',
//     headerLeft: () => (
//       <HeaderButtons HeaderButtonComponent={HeaderButton}>                    
//       <Item
//         title="Menu "
//         iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
//         onPress={() => {
//           navData.navigation.toggleDrawer();
//         }}
//       />
//       </HeaderButtons>
//     ),
//     headerRight: () => (
//         <HeaderButtons HeaderButtonComponent={HeaderButton}>                    
//         <Item
//           title="Cart"
//           iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
//           onPress={() => {
//             navData.navigation.navigate('Cart');
//           }}
//         />
//         </HeaderButtons>
//       )};
// };

// export default ProductOverViewScreen;