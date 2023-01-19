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
                width: 1.2,
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

