fetch("https://data.messari.io/api/v1/assets/btc/metrics")
    .then(function (res) {
        return res.json();
    }).then(function (json) {
        callback(null, json);
    });