import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../rtx/slices';
import { addToCart } from '../rtx/cart-slice';
// import store from '../rtx/store';

function Products() {
    const products = useSelector((state) => state.products)
    //console.log(products);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchProducts());
    }, [])
    return (
        <>
            <Container >
                <Row>
                    {products?.map((product) => (
                        <Col key={product.id}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img style={{ height: '300px' }} variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>
                                        {product.description}
                                    </Card.Text>
                                    {product.price}<>$ </>
                                    <hr></hr>
                                    <Button variant="primary" onClick={() => dispatch(addToCart(product))}>Add To Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}
export default Products;