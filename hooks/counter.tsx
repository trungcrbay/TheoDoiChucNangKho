
import { useState, useCallback } from 'react'

// Custom hook for counter functionality
export default function useCounter() {
    const initialValue = 0
    const [count, setCount] = useState<number>(initialValue) // State to keep track of count

    // Function to increment count
    // prevent unnecessary renders in your React application
     const increment = useCallback(
         () => setCount(prevState => prevState + 1),
         [])
    //const increment = () => setCount(prevState => prevState + 1) //re-render make child-component re-render => using useCallback
    // Returns count and increment function
    return [count, increment]
}