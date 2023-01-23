import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../rtk/slices/cart-slice";
import { productsCategories } from "../../rtk/slices/categories-slice";
import {
  fetchProducts,
  productsInCategory,
} from "../../rtk/slices/products-slice";
import { useAuth } from "./../auth";

import "./products.css";

function Products() {
  const auth = useAuth();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(productsCategories());
  }, []);

  return (
    <>
      <h2 className="text-center p-5 mt-5 h1">Our Products</h2>
      <div className="container">
        <div className="mb-3 buttons-grid">
          <button
            onClick={() => {
              dispatch(fetchProducts());
            }}
            className="btn btn-secondary  m-2 p-3 btn-lg"
          >
            all
          </button>
          {categories.map((category) => {
            return (
              <button
                key={category}
                onClick={() => {
                  dispatch(productsInCategory(category));
                }}
                className="btn btn-secondary  m-2 p-3 btn-lg"
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="products-grid">
          {products.map((product) => {
            return (
              <div className=" py-5" key={product.id}>
                <div className="card product-card">
                  <img
                    className="product-image card-img-top"
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="product-title card-title">
                      {product.title}
                    </h5>
                    <div className="card-text">Price: ${product.price}</div>

                    <button
                      className="btn mt-3 btn-primary"
                      style={{
                        display: "block",
                        margin: "auto",
                        width: "fit-content",
                      }}
                      onClick={() =>
                        !auth.user
                          ? navigate("/login")
                          : dispatch(addToCart(product))
                      }
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
