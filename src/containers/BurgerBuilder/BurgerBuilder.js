import React from 'react';
import { connect } from 'react-redux';

import Aux from '../../high-order-components/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as burgerBuilderActions from '../../store/actions/index';

class BurgerBuilder extends React.Component {
    state = {
        purchasing: false,
    }

    updatePurchase(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        return sum > 0;
    }

    // addIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     const updatedCounted = oldCount + 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     }
    //     updatedIngredients[type] = updatedCounted;

    //     const priceAddition = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice + priceAddition;

    //     this.setState({
    //         ingredients: updatedIngredients,
    //         totalPrice: newPrice
    //     })

    //     this.updatePurchase(updatedIngredients);
    // }

    // removeIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];

    //     if (oldCount <= 0) {
    //         return;
    //     }

    //     const updatedCounted = oldCount - 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     }
    //     updatedIngredients[type] = updatedCounted;

    //     const priceDeduction = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice - priceDeduction;

    //     this.setState({
    //         ingredients: updatedIngredients,
    //         totalPrice: newPrice
    //     })

    //     this.updatePurchase(updatedIngredients);
    // }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false,
            errorPost: null
        });
    }

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout');
    }

    render() {
        console.log(this.props.ings)
        const disabledInfo = {
            ...this.props.ings
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = this.state.errorPost ? 'Network error' : null;
        let burger = this.state.errorGet ?
            'Network error. Ingredients can\'t be loaded' : <Spinner />;

        if (this.props.ings) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        purchasable={this.updatePurchase(this.props.ings)}
                        ordered={this.purchaseHandler}
                        price={this.props.totalPrice} />
                </Aux>
            );

            if (!this.state.errorPost && this.state.purchasing) {
                orderSummary = <OrderSummary
                    ingredients={this.props.ings}
                    purchaseCanceled={this.purchaseCancelHandler}
                    purchasedContinued={this.purchaseContinueHandler}
                    price={this.props.totalPrice} />;
            }

        }

        return (
            <Aux>
                <Modal
                    show={this.state.purchasing || this.state.errorPost}
                    modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    console.log('mapStateToProps')
    return {
        ings: state.ingredients,
        totalPrice: state.totalPrice,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    console.log('mapDispatchToProps')
    return {
        onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredinet(ingName)),
        onInitIngredients: () => dispatch(burgerBuilderActions.fetchInitIngredients())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);