import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../modules";
import {decrease, increase, increaseBy} from "../modules/counter";
import Counter from "../components/Counter";

const CounterContainer = () => {

    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increase());
    }

    const onDecrease = () => {
        dispatch(decrease());
    }

    const onIncreaseBy = (diff: number) => {
        dispatch(increaseBy(diff));
    }

    return (
        <div>
            <Counter count={count}
                     onIncrease={onIncrease}
                     onDecrease={onDecrease}
                     onIncreaseBy={onIncreaseBy}
            />
        </div>
    );
};

export default CounterContainer;