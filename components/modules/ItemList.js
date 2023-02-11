import React from "react";
import FormInput from "./FormInput";

function ItemList({ form, setForm }) {
  const { products } = form;

  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });

  };

  const changeHanlder = (e, index) => {
    const { name, value } = e.target;
    const newProducts = [...products];

    newProducts[index][name] = value;

    setForm({
      ...form,
      products: newProducts,
    });
  };
  const deleteHandler = (index) => {
    const newProducts = [...products]
    newProducts.splice(index , 1)
    setForm({
      ...form ,
      products : newProducts
    })
 };

  return (
    <div className="item-list">
      <p>Purchased Products</p>

      {products.map((item, index) => (
        <div key={index} className="form-input__list">
          <FormInput
            type="text"
            name="name"
            label="Product Name"
            value={item.name}
            onChange={(e) => changeHanlder(e, index)}
          />
          <div>
            <FormInput
              type="text"
              name="price"
              label="Price"
              value={item.price}
              onChange={(e) => changeHanlder(e, index)}
            />
            <FormInput
              type="number"
              name="qty"
              label="Qty"
              value={item.qty}
              onChange={(e) => changeHanlder(e, index)}
            />
          </div>
          <button onClick={() => deleteHandler(index)}>Remove Item</button>
        </div>
      ))}

      <button onClick={addHandler}>Add Item</button>
    </div>
  );
}

export default ItemList;
