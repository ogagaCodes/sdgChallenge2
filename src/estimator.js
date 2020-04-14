
const covid19ImpactEstimator = (data) => {

   data = {
        region:{
            name: "Africa",
            avgAge:19.7,
            avgDailyIncomeInUSD: 5,
            avgDailyIncomePopulation : 0.71
        },
        periodType : "days",
        timeToElapse: 58,
        reportedCases : 674,
        totalHospitalBeds:1380614
    };

    let impactEstimation = {},
    severeImpact = {},
         impact = {};
    impactEstimation.push({data});
// estimate the number of currently infected
impact.currentlyInfected = data.reportedCases * 10;
severeImpact.currentlyInfected = data.reportedCases * 10;


//estimate the number of infected peole 30 days from now
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * (Math.pow(2, 10));
  impact.infectionsByRequestedTime = impact.currentlyInfected * (Math.pow(2, 10));

  // estimated number of severe positive cases
  impact.severeCasesByRequestedTime = impact.infectionsByRequestedTime * 0.15;
  // number of avaiable beds for severe cases
  impact.hospitalBedsByRequestedTime = (data.totalHospitalBeds * 0.35 ) / impact.severeCasesByRequestedTime;


  // estimated number for very severe positive cases
  severeImpact.severeCasesByRequestedTime = severeImpact.infectionsByRequestedTime * 0.05;
  severeImpact.casesForVentilatorsByRequestedTime = severeImpact.infectionsByRequestedTime * 0.02;

   // economy loss for impact case
   impact.dollarsInFlight = impact.infectionsByRequestedTime * (data.region.avgDailyIncomePopulation) *(data.region.avgDailyIncomeInUSD);
   
   
   // economy loss for severe impact case
   severeImpact.dollarsInFlight = severeImpact.infectionsByRequestedTime * (data.region.avgDailyIncomePopulation) *(data.region.avgDailyIncomeInUSD);
  
  impactEstimation.push({severeImpact:{'severeImpact': severeImpact}});
  impactEstimation.push({impact:{'currentlyInfected': currentlyInfected }});
    return impactEstimation;
}


export default covid19ImpactEstimator;
