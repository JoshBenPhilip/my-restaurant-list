
import React, {useEffect, useState} from "react";
import {Col, Row, Card} from 'antd';

function RestaurantList() {
    const [restaurants, setRestaurants] = useState();
    useEffect(() => {
        // fetch our API
        fetch('https://my-first-firestore-jbp.web.app/restaurants')
        .then(response => response.json())
        .then(data => setRestaurants(data)) // data -> restaurants
        .catch(console.error)
    }, [])
    
    return (
        <section>
            <Row gutter = {16}>
            {!restaurants
            ? <h2> Loading...</h2>
            : restaurants.map(restaurant => (
                <Col style = {{width: '300px'}} key = {restaurant.id}>
                    <Card
                    title={restaurant.name}
                    hoverable>
                <p>{restaurant.address}</p>
                    </Card>                
                </Col>
            )
            )}
            </Row>
        </section>
    )
}



export default RestaurantList;