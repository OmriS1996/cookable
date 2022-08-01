import { useEffect, useState } from "react";
import CollapsibleTable from "../../Components/items_table/itemsTable";

export default function User(props) {
  const [switchTable, setSwitchTable] = useState(false);

  function inventoryOrItems() {
    setSwitchTable(!switchTable);
  }

  return (
    <div className="user">
      <button onClick={inventoryOrItems}>
        {switchTable ? "To My Inventory" : "To All Items"}
      </button>
      <div>{switchTable ? <CollapsibleTable /> : <div>My Inventory</div>}</div>
    </div>
  );
}
