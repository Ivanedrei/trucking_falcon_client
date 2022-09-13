import React, { useState, useEffect } from "react";

export const Home = () => {
    return (
        <>
            <section>
                <h1>Current Trip</h1>
                <fieldset className="current_trip">
                    <p>
                        {/* {delivery.map(d = )} */}
                    </p>
                </fieldset>
                <div className="btn_trip">
                    <fieldset className="flex">
                        <button className="btn_1" >
                            Edit
                        </button>
                        <button className="btn_2" >
                            Done
                        </button>
                        <button className="btn_3" >
                            Delete
                        </button>
                    </fieldset>
                </div>
                <fieldset className="current_fuel">
                    <p>
                        {/* {fuel.map(f = )} */}
                    </p>
                </fieldset>

            </section>
        </>
    )
}