import React, { Component } from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { connect, Provider } from "react-redux";
import "./styles.scss";
import { bindActionCreators } from "redux";

const initialState = {
  count: 0,
};

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const increment = () => ({
  type: INCREMENT,
});

const decrement = () => ({
  type: DECREMENT,
});

const reset = () => ({
  type: RESET,
});

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      count: state.count + 1,
    };
  }
  if (action.type === DECREMENT) {
    return {
      count: state.count - 1,
    };
  }
  if (action.type === RESET) {
    return {
      count: 0,
    };
  }

  return state;
};

const store = createStore(reducer);

class Counter extends Component {
  render() {
    const { count, increment, decrement, reset } = this.props;
    console.log({ count, increment, decrement, reset });
    return (
      <main className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};
/* const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ increment, decrement, reset }, dispatch);
}; */

const mapDispatchToProps = {
  increment,
  decrement,
  reset,
};

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById("root")
);
