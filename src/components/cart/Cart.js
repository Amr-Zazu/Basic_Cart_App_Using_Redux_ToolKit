import { Container, Table, Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../../rtk/slices/cart-slice";

import "./cart.css";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <Container className="cont-table" style={{ margin: "auto" }}>
      <h1 className="text-center p-5 mt-4 mb-0 ">Products in your cart</h1>
      <Button
        className="my-3"
        onClick={() => dispatch(clear())}
        variant="danger"
      >
        Clear Cart
      </Button>
      <Table className="text-center" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td style={{ width: "300px" }}>{product.title}</td>
              <td>
                <Image
                  style={{ height: "60px", width: "60px" }}
                  src={product.image}
                  alt="product_image"
                />
              </td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <Button
                  onClick={() => dispatch(deleteFromCart(product))}
                  variant="danger"
                >
                  delete from cart
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
    </Container>
  );
}

export default Cart;
