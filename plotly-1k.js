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
                width: 1.2,
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