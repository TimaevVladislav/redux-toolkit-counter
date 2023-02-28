import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {increment, decrement, incrementByAmount, incrementAsync, selectCount} from "../store/slices/counterSlice"
import classes from "../css/Counter.module.css"

export default function Counter() {
    const count = useSelector(selectCount)
    const [incrementAmount, setIncrementAmount] = useState("2")
    const dispatch = useDispatch()

    const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
         setIncrementAmount(event.target.value)
    }

    return (
        <>
           <div className={classes.row}>
               <button
                   className={classes.button}
                   aria-label="Increment value"
                   onClick={() => dispatch(increment())}
               >
                   +
               </button>
               <span className={classes.value}>{count}</span>
               <button
                   className={classes.button}
                   aria-label="Decrement value"
                   onClick={() => dispatch(decrement())}
               >
                   -
               </button>
           </div>
           <div className={classes.row}>
               <input
                   className={classes.textbox}
                   onChange={e => changeInputHandler(e)}
                   value={incrementAmount}
               />
               <button
                   className={classes.button}
                   onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
               >
                   Add amount
               </button>
               <button
                   className={classes.asyncButton}
                   onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0) as any)}
               >
                   Add async
               </button>
           </div>
        </>
    )
}