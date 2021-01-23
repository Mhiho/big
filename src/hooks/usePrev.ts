
import { useEffect, useRef } from 'react'

export const usePrev = (value: string) => {
    const ref : any = useRef();

    useEffect(() => {
      ref.current = value;
    }, [value]); 
    
    return ref.current;
}