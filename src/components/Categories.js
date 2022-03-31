import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {checkStatus} from  '../redux/categories/categories'


function Categories() {
  const categories = useSelector(state=>state.categories)
  const dispatch=useDispatch()
  return (
    <div>
      <button type="button" className="blue_btn" onClick={()=>dispatch(checkStatus())} >Check status</button>
      <h2>{categories}</h2>
    </div>
  );
}

export default Categories;
