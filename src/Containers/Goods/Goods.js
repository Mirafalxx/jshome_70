import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods } from "../../store/actions/goodsActions";
import Spinner from '../../Components/Spinner/Spinner'

const Goods = () => {
  const dispatch = useDispatch();
  const goods = useSelector((state) => state.goods.goods);
  const loading = useSelector((state) => state.goods.loading);

  console.log(goods);

  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  let form = (
    goods.map((elem) => {
      return <h2 key={elem.id}>{elem.name}</h2>;
    })

  )

  if (loading) form = <Spinner />

  return (
    <div>
      {form}
    </div>
  );
};

export default Goods;
