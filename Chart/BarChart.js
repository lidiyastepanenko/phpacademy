function createBarChart(data, width, height, color) {
    var chart = document.createElement("div");
        chart.style.width = width + "px";
        chart.style.height = height + "px";
        chart.style.width = width + "px";
        chart.style.position = "relative";
        chart.style.border = '2px solid black';
    var max = Number.NEGATIVE_INFINITY;
        for (var i = 0; i < data.length; i++) {
            if (max < data[i]) 
                max = data[i];
        }
    var scale = height / max;
    var barHeight = Math.floor(height / data.length);
        for (var i = 0; i < data.length; i++) {
            var bar = document.createElement("div");
                bar.style.width = data[i] * scale + "px";
                bar.style.height = barHeight - 4 + "px";
                bar.style.position = "absolute";
                bar.style.margin = "4px";
                bar.style.left = "0px";
                bar.style.top = barHeight * i + "px";
                bar.align = "right";
                bar.innerHTML = bar.innerHTML+data[i];
                    if (data[i]< 100){
                        bar.style.backgroundColor = "red"
                    }
                    else {
                        bar.style.backgroundColor = color
                    }
            chart.appendChild(bar);
        }
    return chart;
}