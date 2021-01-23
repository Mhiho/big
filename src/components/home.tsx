import React, { useState, useEffect } from 'react';
import Layout from '../_components/layout';
import Cursor from '../_components/cursor';
import '../style/main.scss';
import { usePrev } from '../hooks/usePrev';

const Home = () => {
    const [string, setString] = useState('');
    const [index, setIndex] = useState(0);
    const description = 'Nigdy się nie poddawaj. Szukaj dobrych wzorców. Wierz w siebie!'
    const prevString = usePrev(string);
    const modification = description.split('');
    const randomTime : number = Math.random() * (250-50) + 50;
    const timeout = (array : any) => {
        return setTimeout(()=>{
            let str = string + array[index]
            setIndex(index+1)
            setString(str)
        },randomTime)
    }
useEffect(() => {
    if (prevString !== string && index < modification.length){
        timeout(modification)
    } 
})
    return (
        
        <Layout>
            <h3 className='bonmot'>{string}</h3>
        </Layout>
    )
}
export default Home;