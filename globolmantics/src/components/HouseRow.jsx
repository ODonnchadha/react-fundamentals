import React from "react";
import currencyFormatter from "../helpers/currencyFormatter";

const HouseRow = ({ house }) => {
    return (
      <tr>
        <td>{house.address}</td>
        <td>{house.country}</td>
        <td>{currencyFormatter.format(house.price)}</td>
      </tr>
    );
  }
  
  const HouseRowMemo = React.memo(HouseRow)
  export default HouseRowMemo;