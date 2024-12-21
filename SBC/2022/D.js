let [days,homeUmbrella,serviceUmbrella] = prompt("dias,guarda chuvas em casa, guarda chuvas no serviço")
.split(" ")
.map(Number);


let reports = [];

for(let i = 0; i < days; i++) {
    let [go, back] = prompt('Clima na ida e na volta')
    .split(' ')
    .map((str) => str.toUpperCase());
    let hasUmbrellaInHome = homeUmbrella > 0;
    let hasUmbrellaInService = serviceUmbrella > 0;

    let report = {
        go: "",
        back: ""
    }

    if(go == "N"){
        if(hasUmbrellaInService){
            report.go = "N";
        } else {
            report.go = "Y";
            homeUmbrella--;
            serviceUmbrella++;
        }
    }

    if(go == "Y"){
        report.go = "Y"
        homeUmbrella--;
        serviceUmbrella++;
    }

    if(back == "Y"){
        report.back = "Y";
        homeUmbrella++;
        serviceUmbrella--;
    }

    if(back == "N"){
        if(hasUmbrellaInHome){
            report.back = "N";
        } else {
            report.back = "Y";
            homeUmbrella++;
            serviceUmbrella--;
        }
    }

    reports.push(report);
    
};
reports.forEach((r) => {
   console.log(`${r.go} ${r.back}`);
});