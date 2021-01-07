import logo from './logo.svg';
import './App.css';
import firebase from './database/firebase'
import React, { useState, useEffect } from 'react'
import Chart from './view/chart'

const App = () => {
    const db = firebase.database();
    const [data, setData] = useState({ data: [], label: [] })

    useEffect(() => {
        const dataRef = firebase.database().ref('lossdata');
        dataRef.on('value', (snapshot) => {
            const dataReceived = snapshot.val();
            const newdata = { data: [], label: [] }
            let i = 0
            console.log("change")
            for (let id in dataReceived) {
                newdata.data.push(dataReceived[id])
                newdata.label.push(i++)
            }
            setData(newdata)
        });
    }, [])

    return (
        <div className="App">
            <Chart datareceived={data} />
        </div>
    );
}

export default App;
