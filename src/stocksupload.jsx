import { client } from "../lib/client";

// {technology}

const technology = [
  {
    _type: 'stocks',
    country: "US",
    sector: "Technology",
    companyName: "Apple Inc.",
    symbol: "AAPL",
  },
  {
    _type: 'stocks',
    country: "US",
    sector: "Technology",
    companyName: "NVIDIA Corporation",
    symbol: "NVDA",
  },
  {
    _type: 'stocks',
    country: "NL",
    sector: "Technology",
    companyName: "ASML Holding N.V.",
    symbol: "ASML",
  },
  {
    _type: 'stocks',
    country: "US",
    sector: "Technology",
    companyName: "Broadcom Inc.",
    symbol: "AVGO",
  },
  {
    _type: 'stocks',
    country: "US",
    sector: "Technology",
    companyName: "Adobe Inc.",
    symbol: "ADBE",
  },
  {
    _type: 'stocks',
    symbol: "TXN",
    companyName: "Texas Instruments Incorporated",
    sector: "Technology",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "AMD",
    companyName: "Advanced Micro Devices, Inc.",
    sector: "Technology",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "QCOM",
    companyName: "QUALCOMM Incorporated",
    sector: "Technology",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "INTU",
    companyName: "Intuit Inc.",
    sector: "Technology",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "AMAT",
    companyName: "Applied Materials, Inc.",
    sector: "Technology",
    country: "US",
  },

  {
    _type: 'stocks',
    symbol: "ADI",
    companyName: "Analog Devices, Inc.",
    sector: "Technology",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "LRCX",
    companyName: "Lam Research Corporation",
    sector: "Technology",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "MU",
    companyName: "Micron Technology, Inc.",
    sector: "Technology",
    country: "US",
    
  },
  {
    _type: 'stocks',
    symbol: "PANW",
    companyName: "Palo Alto Networks, Inc.",
    sector: "Technology",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "SNPS",
    companyName: "Synopsys, Inc.",
    sector: "Technology",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "CDNS",
    companyName: "Cadence Design Systems, Inc.",
    sector: "Technology",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "KLAC",
    companyName: "KLA Corporation",
    sector: "Technology",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "WDAY",
    companyName: "Workday, Inc.",
    sector: "Technology",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "FTNT",
    companyName: "Fortinet, Inc.",
    sector: "Technology",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "NXPI",
    companyName: "NXP Semiconductors N.V.",
    sector: "Technology",
    country: "NL",
    
  },
];

export function CreateSet(params) {
   const create = () => {
    healthcare.forEach((item) => {
        client.create(item).then((res) => {
            console.log(res)
        })
    })
   }

   return (
    <>
      <button onClick={()=> create()}>Create</button>
    </>
   )
}

//  financial

const financial = [
  {
    _type: 'stocks',
    symbol: "PYPL",
    companyName: "PayPal Holdings, Inc.",
    sector: "Financial Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "HBANM",
    companyName: "Huntington Bancshares Incorporated",
    sector: "Financial Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "HBANP",
    companyName: "Huntington Bancshares Incorporated",
    sector: "Financial Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "TROW",
    companyName: "T. Rowe Price Group, Inc.",
    sector: "Financial Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "NTRS",
    companyName: "Northern Trust Corporation",
    sector: "Financial Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "PFG",
    companyName: "Principal Financial Group, Inc.",
    sector: "Financial Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "FITBI",
    companyName: "Fifth Third Bancorp",
    sector: "Financial Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "HBAN",
    companyName: "Huntington Bancshares Incorporated",
    sector: "Financial Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "FITBP",
    companyName: "Fifth Third Bancorp",
    sector: "Financial Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "FITBO",
    companyName: "Fifth Third Bancorp",
    sector: "Financial Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "SYM",
    companyName: "Symbotic Inc.",
    sector: "Financial Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "CG",
    companyName: "The Carlyle Group Inc.",
    sector: "Financial Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "ARCC",
    companyName: "Ares Capital Corporation",
    sector: "Financial Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "MORN",
    companyName: "Morningstar, Inc.",
    sector: "Financial Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "EWBC",
    companyName: "East West Bancorp, Inc.",
    sector: "Financial Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "SEIC",
    companyName: "SEI Investments Company",
    sector: "Financial Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "XP",
    companyName: "XP Inc.",
    sector: "Financial Services",
    country: "BR",
  },
  {
    _type: 'stocks',
    symbol: "BOKF",
    companyName: "BOK Financial Corporation",
    sector: "Financial Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "CACC",
    companyName: "Credit Acceptance Corporation",
    sector: "Financial Services",
    country: "US",
  
  },
];

// communication

const communication = [
  {
    _type: 'stocks',
    symbol: "GOOGL",
    companyName: "Alphabet Inc.",
    sector: "Communication Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "META",
    companyName: "Meta Platforms, Inc.",
    sector: "Communication Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "CMCSA",
    companyName: "Comcast Corporation",
    sector: "Communication Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "NFLX",
    companyName: "Netflix, Inc.",
    sector: "Communication Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "CHTR",
    companyName: "Charter Communications, Inc.",
    sector: "Communication Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "WBD",
    companyName: "Warner Bros. Discovery, Inc.",
    sector: "Communication Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "PARAP",
    companyName: "Paramount Global",
    sector: "Communication Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "VIAC",
    companyName: "Paramount Global",
    sector: "Communication Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "FWONK",
    companyName: "Formula One Group",
    sector: "Communication Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "FWONA",
    companyName: "Formula One Group",
    sector: "Communication Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "WMG",
    companyName: "Warner Music Group Corp.",
    sector: "Communication Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "PARA",
    companyName: "Paramount Global",
    sector: "Communication Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "PARAA",
    companyName: "Paramount Global",
    sector: "Communication Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "LBRDA",
    companyName: "Liberty Broadband Corporation",
    sector: "Communication Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "LBRDK",
    companyName: "Liberty Broadband Corporation",
    sector: "Communication Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "MTCH",
    companyName: "Match Group, Inc.",
    sector: "Communication Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "Z",
    companyName: "Zillow Group, Inc.",
    sector: "Communication Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "ZG",
    companyName: "Zillow Group, Inc.",
    sector: "Communication Services",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "NWSA",
    companyName: "News Corporation",
    sector: "Communication Services",
    country: "US",

  },
];

// healthcare

const healthcare = [
  {
    _type: 'stocks',
    symbol: "ISRG",
    companyName: "Intuitive Surgical, Inc.",
    sector: "Healthcare",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "MRNA",
    companyName: "Moderna, Inc.",
    sector: "Healthcare",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "DXCM",
    companyName: "DexCom, Inc.",
    sector: "Healthcare",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "IDXX",
    companyName: "IDEXX Laboratories, Inc.",
    sector: "Healthcare",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "ILMN",
    companyName: "Illumina, Inc.",
    sector: "Healthcare",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "ALGN",
    companyName: "Align Technology, Inc.",
    sector: "Healthcare",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "HZNP",
    companyName: "Horizon Therapeutics Public Limited Company",
    sector: "Healthcare",
    country: "IE",
  },
  {
    _type: 'stocks',
    symbol: "HOLX",
    companyName: "Hologic, Inc.",
    sector: "Healthcare",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "ICLR",
    companyName: "ICON Public Limited Company",
    sector: "Healthcare",
    country: "IE",

  },
  {
    _type: 'stocks',
    symbol: "EXAS",
    companyName: "Exact Sciences Corporation",
    sector: "Healthcare",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "TECH",
    companyName: "Bio-Techne Corporation",
    sector: "Healthcare",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "BRKR",
    companyName: "Bruker Corporation",
    sector: "Healthcare",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "VTRS",
    companyName: "Viatris Inc.",
    sector: "Healthcare",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "RGEN",
    companyName: "Repligen Corporation",
    sector: "Healthcare",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "APLS",
    companyName: "Apellis Pharmaceuticals, Inc.",
    sector: "Healthcare",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "KRTX",
    companyName: "Karuna Therapeutics, Inc.",
    sector: "Healthcare",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "TXG",
    companyName: "10x Genomics, Inc.",
    sector: "Healthcare",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "NTRA",
    companyName: "Natera, Inc.",
    sector: "Healthcare",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "ACHC",
    companyName: "Acadia Healthcare Company, Inc.",
    sector: "Healthcare",
    country: "US",
  },
  {
    _type: 'stocks',
    symbol: "MEDP",
    companyName: "Medpace Holdings, Inc.",
    sector: "Healthcare",
    country: "US",
  },
];