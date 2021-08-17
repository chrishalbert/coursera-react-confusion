import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedDish: null
        };
      }

    renderDish(dish) {
	    if (dish == null || typeof dish.comments === 'undefined') return (<div></div>);
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderDishDetail(dish) {
	    if (dish == null || typeof dish.comments === 'undefined') return (<div></div>);
    
        let comments = dish.comments.map((comment) => {
            return (
                <div key={comment.id}><br/>{comment.comment}<br/>-- {comment.author}, {comment.date}<br/></div>
            ); 
	    });

        return(
            <Card>
                <CardBody>
                    <CardTitle><h2>Comments</h2></CardTitle>
                    <CardText>{comments}</CardText>
                </CardBody>
            </Card>
        );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
	                    {this.renderDish(this.props.dish)}
                    </div>
                    <div  className="col-12 col-md-5 m-1">
	                    {this.renderDishDetail(this.props.dish)}
                    </div>
                </div>
            </div>
        );
    }
}


export default DishDetailComponent;
