import { Container, Table, Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../../rtk/slices/cart-slice";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./cart.css";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  const notify = () => {
    toast.error("Deleting Your Cart", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      onClose: () => {
        dispatch(clear());
      },
    });
  };

  const deleteProduct = (product) => {
    Swal.fire({
      title: `Are You Sure To Delete ${product.title} ?`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        dispatch(deleteFromCart(product));
      }
    });
  };

  return (
    <Container className="cont-table" style={{ margin: "auto" }}>
      <h1 className="text-center p-5 mt-5 mb-0   h1">Products in your cart</h1>
      {cart.length > 0 ? (
        <Button className="my-3" onClick={notify} variant="danger">
          Clear Cart
        </Button>
      ) : (
        ""
      )}

      <ToastContainer />
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
                <Button onClick={() => deleteProduct(product)} variant="danger">
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
