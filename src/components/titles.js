import React from "react";

// Creating a Titles component
class Titles extends React.Component {

    render() {
        // Uses regular HTML tags to build up a customized and reusable Titles component
        // In App.js, see this component being used!
        return (
            <div>
                <h1 className="title-container__title">Weather Scanner </h1>
                <p className="title-container__subtitle"> Helps you find weather conditions in cities:  </p>
                <p className="title-container__subtitle"> Search by city and country, or latitude and longitude.  </p>
            </div>
        )
    }
}

export default Titles;