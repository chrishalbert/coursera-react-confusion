import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishdetailComponent extends Component {

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderDishDetail(dish) {
	if (dish == null) return (<div></div>);
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
          <div className="row">
            <div className="col-12 col-md-5 m-1">
	      {this.renderDish(this.props.selectedDish)}
            </div>
            <div  className="col-12 col-md-5 m-1">
	      {this.renderDishDetail(this.props.selectedDish)}
            </div>
          </div>
        );
    }
}


export default DishdetailComponent;
