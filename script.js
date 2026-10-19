let 今天 = new Date();
今天.setHours(0,0,0,0);

let 表演日期 = new Date(2026,10,10);

let 相差天數 = (表演日期 - 今天) / (1000*60*60*24);

document.getElementById("倒數").textContent = "距離台北場還有" + 相差天數 +"天";