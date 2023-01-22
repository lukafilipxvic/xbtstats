
//>10 address count
d3.csv(
    "https://charts.coinmetrics.io/community-api/v4/timeseries/asset-metrics?assets=btc&metrics=AdrBalNtv10Cnt&page_size=10000&pretty=true&format=csv",
    function (err, rows) {
        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }

        var min_10_count = {
            type: "scatter",
            mode: "lines",
            name: "Addresses with Balance > 10 BTC",
            x: unpack(rows, "time"),
            y: unpack(rows, "AdrBalNtv10Cnt"),
            line: {
                color: "#000028",
                width: 1.5,
            }
        };

        var data = [min_10_count];

        var layout = {
            autosize: true,
            height: 400,
            showlegend: true,
            legend: {
                orientation: "h",
                x: 0.5,
                xanchor: "center",
            },

            images: [{
                source: "https://svgur.com/i/piR.svg",
                x: 0.5,
                y: 0.5,
                sizex: 0.4,
                sizey: 0.4,
                xanchor: "center",
                xref: "paper",
                yanchor: "bottom",
                yref: "paper",
                layer: "below",
                opacity: 0.1,
            }],
            margin: {
                t: 0,
            },
            font: {
                color: '#000000',
                size: 10,
            },
            xaxis: {
                gridthickness: 2,
                showspikes: true,
                spikemode: 'toaxis',
                spikethickness: 0.5,
                spikecolor: '#333',
                spikedash: 'line',
                showline: true,
            },

            yaxis: {
                title: "Number of Balances",
                type: "linear",
                autorange: true,
                showgrid: false,
                showspikes: true,
                spikemode: 'across',
                spikethickness: 0.5,
                spikecolor: '#333',
                spikedash: 'line',
                showline: true,
            }
        };

        Plotly.newPlot("min_10_count-chart", data, layout, { responsive: true, displaylogo: false });
    });

//>100 address count
d3.csv(
    "https://charts.coinmetrics.io/community-api/v4/timeseries/asset-metrics?assets=btc&metrics=AdrBalNtv100Cnt&page_size=10000&pretty=true&format=csv",
    function (err, rows) {
        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }


        var min_100_count = {
            type: "scatter",
            mode: "lines",
            name: "Addresses with Balance > 100 BTC",
            x: unpack(rows, "time"),
            y: unpack(rows, "AdrBalNtv100Cnt"),
            line: {
                color: "#000028",
                width: 1.5,
            }
        };

        var data = [min_100_count];

        var layout = {
            autosize: true,
            height: 400,
            showlegend: true,
            legend: {
                orientation: "h",
                x: 0.5,
                xanchor: "center",
            },

            images: [{
                x: 0.5,
                y: 0.5,
                sizex: 0.4,
                sizey: 0.4,
                xanchor: "center",
                xref: "paper",
                yanchor: "bottom",
                yref: "paper",
                layer: "below",
                opacity: 0.1,
            }],
            margin: {
                t: 0,
            },
            font: {
                color: '#000000',
                size: 10,
            },
            xaxis: {
                gridthickness: 2,
                showspikes: true,
                spikemode: 'toaxis',
                spikethickness: 0.5,
                spikecolor: '#333',
                spikedash: 'line',
                showline: true,
            },

            yaxis: {
                title: "Number of Balances",
                type: "linear",
                autorange: true,
                showgrid: false,
                showspikes: true,
                spikemode: 'across',
                spikethickness: 0.5,
                spikecolor: '#333',
                spikedash: 'line',
                showline: true,
            }
        };

        Plotly.newPlot("min_100_count-chart", data, layout, { responsive: true, displaylogo: false });
    });

//>1k address count
d3.csv(
    "https://charts.coinmetrics.io/community-api/v4/timeseries/asset-metrics?assets=btc&metrics=AdrBalNtv1KCnt&page_size=10000&pretty=true&format=csv",
    function (err, rows) {
        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }


        var min_1k_count = {
            type: "scatter",
            mode: "lines",
            name: "Addresses with Balance > 1,000 BTC",
            x: unpack(rows, "time"),
            y: unpack(rows, "AdrBalNtv1KCnt"),
            line: {
                color: "#000028",
                width: 1.5,
            }
        };

        var data = [min_1k_count];

        var layout = {
            autosize: true,
            height: 400,
            showlegend: true,
            legend: {
                orientation: "h",
                x: 0.5,
                xanchor: "center",
            },

            images: [{
                x: 0.5,
                y: 0.5,
                sizex: 0.4,
                sizey: 0.4,
                xanchor: "center",
                xref: "paper",
                yanchor: "bottom",
                yref: "paper",
                layer: "below",
                opacity: 0.1,
            }],
            margin: {
                t: 0,
            },
            font: {
                color: '#000000',
                size: 10,
            },
            xaxis: {
                gridthickness: 2,
                showspikes: true,
                spikemode: 'toaxis',
                spikethickness: 0.5,
                spikecolor: '#333',
                spikedash: 'line',
                showline: true,
            },

            yaxis: {
                title: "Number of Balances",
                type: "linear",
                autorange: true,
                showgrid: false,
                showspikes: true,
                spikemode: 'across',
                spikethickness: 0.5,
                spikecolor: '#333',
                spikedash: 'line',
                showline: true,
            }
        };

        Plotly.newPlot("min_1k_count-chart", data, layout, { responsive: true, displaylogo: false });
    });

//>10k address count
d3.csv(
    "https://charts.coinmetrics.io/community-api/v4/timeseries/asset-metrics?assets=btc&metrics=AdrBalNtv10KCnt&page_size=10000&pretty=true&format=csv",
    function (err, rows) {
        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }


        var min_10k_count = {
            type: "scatter",
            mode: "lines",
            name: "Addresses with Balance > 10,000 BTC",
            x: unpack(rows, "time"),
            y: unpack(rows, "AdrBalNtv10KCnt"),
            line: {
                color: "#000028",
                width: 1.5,
            }
        };

        var data = [min_10k_count];

        var layout = {
            autosize: true,
            height: 400,

            showlegend: true,
            legend: {
                orientation: "h",
                x: 0.5,
                xanchor: "center",
            },

            images: [{
                x: 0.5,
                y: 0.5,
                sizex: 0.4,
                sizey: 0.4,
                xanchor: "center",
                xref: "paper",
                yanchor: "bottom",
                yref: "paper",
                layer: "below",
                opacity: 0.1,
            }],
            margin: {
                t: 0,
            },
            font: {
                color: '#000000',
                size: 10,
            },
            xaxis: {
                gridthickness: 2,
                showspikes: true,
                spikemode: 'toaxis',
                spikethickness: 0.5,
                spikecolor: '#333',
                spikedash: 'line',
                showline: true,
            },

            yaxis: {
                title: "Number of Balances",
                type: "linear",
                autorange: true,
                showgrid: false,
                showspikes: true,
                spikemode: 'across',
                spikethickness: 0.5,
                spikecolor: '#333',
                spikedash: 'line',
                showline: true,
            }
        };

        Plotly.newPlot("min_10k_count-chart", data, layout, { responsive: true, displaylogo: false });
    });