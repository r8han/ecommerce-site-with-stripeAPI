import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./List.scss";

const List = ({ subCats, maxPrice, sort, catId }) => {


  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    ).join('')}&[filters][price][$lte]=${maxPrice}${sort !== null ? `&sort=price:${sort}` : ``}`
  );

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;