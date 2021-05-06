export interface system {
    code: number;
    message: string;
}

// "daily_change": 512,
// "confirmed_cases": 119898,
// "isolated": 8383,
// "recovered": 109695,
// "deceased": 1820,
// "incidence": 231.25

export interface covidData {
    daily_change: number,
    confirmed_cases: number,
    isolated: number,
    recovered: number,
    deceased: number,
    incidence: number
}

export interface CoreCovid {
    status: boolean,
    system: system,
    source: covidData | null
}


export interface CovidCoreComponent {
    data: CoreCovid
}