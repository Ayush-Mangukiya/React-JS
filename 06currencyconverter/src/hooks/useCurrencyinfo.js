// Designing Custom Hooks

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    // i want to call an API, so i can use fetch() but i want to call the API when someone loads hook
    // so when any component mounts and it's lifecycle event is triggered we have useEffect() hook

    const [data, setData] = useState({});

    useEffect(() => {

        // chaining in fectch() via then()
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]));
    }, [currency])

    return data
}

export default useCurrencyInfo;
