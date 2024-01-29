import {takeEvery,put} from 'redux-saga/effects'
import {PRODUCT_LIST, Set_PRODUCT_LIST,Search_PRODUCT} from './constant'

function* getProduct(){
    console.log('====data')
    
       let data =yield  fetch(`http://localhost:4000/products`);
       console.log('Action is called', data)
      data = yield data.json();
   
   yield put({type:Set_PRODUCT_LIST,data})

    }
    function* Searchproduct(data){
            
         let result =yield  fetch(`http://localhost:4000/products?q=${data.query}`);
         console.log('====data is called', data)
        result = yield result.json();
     
     yield put({type:Set_PRODUCT_LIST,data:result})
  
      }

function* productSaga(){
  yield takeEvery(PRODUCT_LIST,getProduct)  
  yield takeEvery(Search_PRODUCT,Searchproduct) 

}

export default productSaga;