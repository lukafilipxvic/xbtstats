d3.csv(
    "https://community-api.coinmetrics.io/v4/timeseries/asset-metrics?assets=btc&metrics=PriceUSD,AdrBalNtv1Cnt,AdrBalNtv10Cnt,AdrBalNtv100Cnt,AdrBalNtv1KCnt,AdrBalNtv10KCnt,AdrBalNtv100KCnt&page_size=10000&pretty=true&format=csv",
    function (err, rows) {
        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }

        var min_1_count = {
            type: "scatter",
            mode: "lines",
            name: "Addresses with Balance > 1 BTC",
            x: unpack(rows, "time"),
            y: unpack(rows, "AdrBalNtv1Cnt"),
            line: {
                color: "#f2a900",
                width: 1.5,
            }
        };

        var min_10_count = {
            type: "scatter",
            mode: "lines",
            name: "Addresses with Balance > 10 BTC",
            x: unpack(rows, "time"),
            y: unpack(rows, "AdrBalNtv10Cnt"),
            line: {
                color: "#f2a900",
                width: 1.5,
            }
        };

        var min_100_count = {
            type: "scatter",
            mode: "lines",
            name: "Addresses with Balance > 100 BTC",
            x: unpack(rows, "time"),
            y: unpack(rows, "AdrBalNtv100Cnt"),
            line: {
                color: "#f2a900",
                width: 1.5,
            }
        };

        var min_1k_count = {
            type: "scatter",
            mode: "lines",
            name: "Addresses with Balance > 1k BTC",
            x: unpack(rows, "time"),
            y: unpack(rows, "AdrBalNtv1KCnt"),
            line: {
                color: "#f2a900",
                width: 1.5,
            }
        };

        var min_10k_count = {
            type: "scatter",
            mode: "lines",
            name: "Addresses with Balance > 10k BTC",
            x: unpack(rows, "time"),
            y: unpack(rows, "AdrBalNtv10KCnt"),
            line: {
                color: "#f2a900",
                width: 1.5,
            }
        };
        var min_100k_count = {
            type: "scatter",
            mode: "lines",
            name: "Addresses with Balance > 100k BTC",
            x: unpack(rows, "time"),
            y: unpack(rows, "AdrBalNtv100KCnt"),
            line: {
                color: "#f2a900",
                width: 1.5,
            }
        };

        var price = {
            type: "scatter",
            mode: "lines",
            name: "BTC Price (USD)",
            yaxis: 'y2',
            x: unpack(rows, "time"),
            y: unpack(rows, "PriceUSD"),
            line: {
                color: "#121212",
                width: 1.5,
            }
        };

        var data = [min_1_count, price];
        var data2 = [min_10_count, price];
        var data3 = [min_100_count, price];
        var data4 = [min_1k_count, price];
        var data5 = [min_10k_count, price];
        var data6 = [min_100k_count, price];



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
                source: "/xbtstats.png",
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
                color: '#121212',
                size: 11,
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
                rangemode: 'nonnegative',
                autorange: true,
                showgrid: false,
                showspikes: true,
                spikemode: 'across',
                spikethickness: 0.5,
                spikecolor: '#333',
                spikedash: 'line',
                showline: true,
            },

            yaxis2: {
                title: 'BTC Price (USD)',
                type: 'log',
                rangemode: 'nonnegative',
                autorange: true,
                showgrid: false,
                tickformat: '$,.0f',
                hoverformat: '$,.2f',
                dtick: 1,
                showspikes: true,
                spikemode: 'across',
                spikethickness: 0.5,
                spikecolor: '#333',
                spikedash: 'line',
                overlaying: 'y',
                side: 'right'
            }
        };

        Plotly.newPlot("min_1_count-chart", data, layout, { responsive: true, displaylogo: false });
        Plotly.newPlot("min_10_count-chart", data2, layout, { responsive: true, displaylogo: false });
        Plotly.newPlot("min_100_count-chart", data3, layout, { responsive: true, displaylogo: false });
        Plotly.newPlot("min_1k_count-chart", data4, layout, { responsive: true, displaylogo: false });
        Plotly.newPlot("min_10k_count-chart", data5, layout, { responsive: true, displaylogo: false });
        Plotly.newPlot("min_100k_count-chart", data6, layout, { responsive: true, displaylogo: false });
    });