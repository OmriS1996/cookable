import { category, ingredient, measureType } from "../../mocdata/mocdata";

export default function Products(props) {
  return (
    <div className="products">
      <ul>
        {ingredient.map((item) => {
          <li>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
