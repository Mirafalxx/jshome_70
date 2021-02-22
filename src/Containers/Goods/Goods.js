import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods } from "../../store/actions/goodsActions";

const Goods = () => {
  const dispatch = useDispatch();
  const goods = useSelector((state) => state.goods);

  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  return (
    <div>
      {goods.map((elem) => {
        return <h2>123</h2>;
      })}
    </div>
  );
};

export default Goods;
