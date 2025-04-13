import { useState } from "react";
import HouseRow from "./HouseRow";

const hardCodedHouseArray = [
    {
        id: 1,
        address: "12 Valley of Kings, Geneva",
        country: "Switzerland",
        price: 900000,
    },
    {
        id: 2,
        address: "89 Road of Forks, Bern",
        country: "Switzerland",
        price: 500000,
    },
]

const HouseList = () => {
    // 1. Call hooks at the top level.
    // 2. useState is called within the component's function.
    const [houses, setHouses] = useState(hardCodedHouseArray);

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
                    {houses.map(h => <HouseRow key={h.id} house={h} />)}
                </tbody>
            </table>
            <button onClick={addHouse} className="btn btn-primary col-1">
                Add
            </button>
        </div>
    )
};

export default HouseList;