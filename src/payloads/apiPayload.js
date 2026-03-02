export const customerOfferBody = {
    "LeadId": "",
    "SelectedCreditLimit": "",
    "PurposeOfLoan": ""
}

export const pledgeStocksBody = {
    "LeadId": "",
    "ApplicationId": 0,
    "PurposeOfLoanList": [
        "null"
    ],
    "PurposeOfLoan": "null",
    "SelectedCreditLimit": 56000,
    "MinEligibleCreditLimit": 0,
    "MaxEligibleCreditLimit": 342543.00,
    "InterestRate": 12.5,
    "ForeclosureCharges": 0,
    "ProcessingFees": 1500,
    "StampDuty": 500,
    "PledgeAmount": 56000,
    "RepaymentPeriod": 36,
    "LoanProvidedBy": "123",
    "EligibleStocks": [
        {
            "StockName": "Reliance Industries Ltd",
            "Isin": "INE002A01018",
            "NumberOfStocks": 200,
            "EligibleUnits": 100,
            "StockPrice": 2450.75,
            "LtvPercentage": 50,
            "StockValue": 2450.75,
            "EligibleValue": 122537.50,
            "IsPledge": true,
            "IsShareInUse": true,
            "SelectedStockValue": 58818.00,
            "SelectedLoanAmount": 58000,
            "SelectedStockQuantity": 24
        }
    ],
    "IneligibleStocks": [
        {
            "StockName": "string",
            "StockValue": 0
        }
    ]
}