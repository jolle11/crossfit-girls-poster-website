import axios from "axios";
import { useEffect, useState } from "react";
import { Footer, Hero, UnitsToggler, Wod } from "../../components";
import "./Poster.scss";

const Poster = () => {
    const [units, setUnits] = useState(false); // Change units from imperial to metric
    const [imperial, setImperial] = useState([]);
    const [metric, setMetric] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem("wods")) {
            const wods = JSON.parse(localStorage.getItem("wods"));
            setImperial(wods.imperial);
            setMetric(wods.metric);
            setIsLoading(false);
        } else {
            axios
                .get(
                    "https://crossfit-girls-poster-website-api.vercel.app/api/wods"
                )
                .then((response) => {
                    setImperial(response.data.imperial);
                    setMetric(response.data.metric);
                    localStorage.setItem(
                        "wods",
                        JSON.stringify({
                            imperial: response.data.imperial,
                            metric: response.data.metric,
                        })
                    );
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, []);

    const handleToggle = () => {
        setUnits(!units);
    };

    if (isLoading) {
        return (
            <div className="wait">
                <h2>
                    Aren't the girls here yet? <br /> Wait for them to arrive.{" "}
                    <br /> Try refreshing the page in a few seconds, maybe they
                    got lost in their way...
                </h2>
            </div>
        );
    }

    if (units) {
        // METRIC UNITS
        return (
            <div className="poster">
                <header className="poster__header">
                    <Hero />
                    <UnitsToggler units={units} onClick={handleToggle} />
                </header>
                <main className="poster__list">
                    {metric.map((wod) => {
                        return <Wod key={wod._id} wod={wod} />;
                    })}
                </main>
                <Footer />
            </div>
        );
    }

    return (
        // IMPERIAL UNITS
        <div className="poster">
            <header className="poster__header">
                <Hero />
                <UnitsToggler units={units} onClick={handleToggle} />
            </header>
            <main className="poster__list">
                {imperial.map((wod) => {
                    return <Wod key={wod._id} wod={wod} />;
                })}
            </main>
            <Footer />
        </div>
    );
};

export default Poster;
