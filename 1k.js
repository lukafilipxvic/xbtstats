window
    .fetch("https://data.messari.io/api/v1/assets/btc/metrics")
    .then(res => res.json())
    .then(messariRes => messariRes.data)
    .then(
        payload =>
        (document.getElementById("1kbtc").innerHTML =
            "Addresses with > 1,000 BTC:  " + payload.on_chain_data.addresses_balance_greater_1k_native_units_count.toLocaleString())
    );

window
    .fetch("https://data.messari.io/api/v1/assets/btc/metrics")
    .then(res => res.json())
    //.then(messariRes => messariRes.data) // Sets the main object as .data object.
    .then(
        payload =>
        (document.getElementById("btcspot").innerHTML =
            "XBT Market Price: $" + payload.data.market_data.price_usd.toLocaleString())
    );
