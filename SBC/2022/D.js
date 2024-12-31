const [days, homeUmbrella, serviceUmbrella] = prompt()
  .split(" ")
  .map(Number);

const reports = [];

let currentHomeUmbrella = homeUmbrella;
let currentServiceUmbrella = serviceUmbrella;

function handleGo(go, hasUmbrellaInService) {
  if (go === "N") {
    if (hasUmbrellaInService) {
      return { goReport: "N", home: 0, service: 0 };
    } else {
      return { goReport: "Y", home: -1, service: 1 };
    }
  }

  if (go === "Y") {
    return { goReport: "Y", home: -1, service: 1 };
  }

  return { goReport: "", home: 0, service: 0 };
}

function handleBack(back, hasUmbrellaInHome) {
  if (back === "Y") {
    return { backReport: "Y", home: 1, service: -1 };
  }

  if (back === "N") {
    if (hasUmbrellaInHome) {
      return { backReport: "N", home: 0, service: 0 };
    } else {
      return { backReport: "Y", home: 1, service: -1 };
    }
  }

  return { backReport: "", home: 0, service: 0 };
}

for (let i = 0; i < days; i++) {
  const [go, back] = prompt()
    .split(" ")
    .map((str) => str.toUpperCase());
  const hasUmbrellaInHome = currentHomeUmbrella > 0;
  const hasUmbrellaInService = currentServiceUmbrella > 0;

  const goResult = handleGo(go, hasUmbrellaInService);
  const backResult = handleBack(back, hasUmbrellaInHome);

  currentHomeUmbrella += goResult.home + backResult.home;
  currentServiceUmbrella += goResult.service + backResult.service;

  reports.push({ go: goResult.goReport, back: backResult.backReport });
}

reports.forEach((r) => {
  console.log(`${r.go} ${r.back}`);
});
