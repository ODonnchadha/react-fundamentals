// import { use, useEffect, useState } from "react";
import { useEffect, useState } from "react";
import HouseRowMemo from "./HouseRow";

// const hardCodedHouseArray = [
//     {
//         id: 1,
//         address: "12 Valley of Kings, Geneva",
//         country: "Switzerland",
//         price: 900000,
//     },
//     {
//         id: 2,
//         address: "89 Road of Forks, Bern",
//         country: "Switzerland",
//         price: 500000,
//     },
// ]

// As long as this is not resolved, component will be in a suspended state, pausing rendering for it.
// But, compnent is created outsie of the function. Created just once for the entire lifecycle.
// Data will not be loaded. And, infinite loop if created inside of the component.
// When the state changes the component re-renders which will create new promise which will change the state.
// const fetchHouses = fetch("http://localhost:5285/houses").then(response => response.json());

const HouseList = () => {
    // 1. Call hooks at the top level.
    // 2. useState is called within the component's function.
    const [houses, setHouses] = useState([]);
    // Fetch is asynchronous and returns a promise.
    // Wrapper function in anouther asynchronous function in order to await.
    // 1. Pure function executes before useEffect is called. And executes. houses is the initial array. Browser updated.
    // 2. React runs effects. Then setHouses() runs, changes state, and the component re-renders.
    // 3. So we start at the first line again. And initial state is used.
    // 4. React decides that the browser does not need to update.
    // You can use a dependency array to counter. Literally. No dependency.
    // Use empty array. []. Effect function exected only once.
    useEffect(() => {
        const fetchHouses = async () => {
            const response = await fetch("http://localhost:5285/houses");
            const houses = await response.json();
            setHouses(houses);
        }
        fetchHouses();
    }, []);

    // const houseResult = use(fetchHouses);
    // const [houses, setHouses] = useState(houseResult);
    // Don't change houses directly. It is meant to be read-only.
    // React will only update the UI if state is changed via the `set` function.
    const addHouse = () => {
        // Ensure a `new` instance with reference types.
        setHouses([...houses, {
            id: 6,
            address: "32 Valley Way, New York",
            country: "USA",
            price: 1000000,
            },
        ]);
    }

    return (
        <div className="row mb-2">
            <h5 className="themeFontColor text-center">
                Houses currently on the market
            </h5>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>                                                
                    </tr>
                </thead>
                <tbody>
                    {houses.map(h => <HouseRowMemo key={h.id} house={h} />)}
                </tbody>
            </table>
            <button onClick={addHouse} className="btn btn-primary col-1">
                Add
            </button>
        </div>
    )
};

export default HouseList;