import { Button, Container, Table } from "react-bootstrap";
import { useSelector, useDispatch, } from "react-redux";
import { deleteFromCart, clear } from "../rtx/cart-slice";



function Cart() {
    const cart = useSelector(state => state.cart);
    // console.log(cart.length);
    const dispatch = useDispatch();
    const totalPrice = cart.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc;
    }, 0)
    return (
        <Container>
            <h1>Welcome To Cart</h1>
            <h5>Total Price: {totalPrice.toFixed(2)} $</h5>
            <Button className="mb-5" variant="primary" onClick={() => dispatch(clear())}>Clear Cart</Button>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>IMG</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cart?.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td><img src={product.image} alt="" style={{ width: "100px", height: "100px " }}></img></td>
                            <td>{product.price} $</td>
                            <td>{product.quantity}</td>
                            <td><Button variant="danger" onClick={() => dispatch(deleteFromCart(product))}>Delete</Button></td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </Container>
    )
}
export default Cart;