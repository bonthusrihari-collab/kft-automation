import dotenv from "dotenv";
dotenv.config();

export const generateTokenBody = (partnerCustomerId, shortToken) => "{\r\n" +
    "  \"PartnerCustomerID\":\"" + partnerCustomerId + "\",\r\n" +
    "  \"ShortToken\":\"" + shortToken + "\"\r\n" +
    "}";

export const createLeadRequestBody = {
    "LeadName": "Bonthu Srihari babu",
    "LeadEmail": "bonthu.srihari@dev.knightfintech.com",
    "LeadPAN": "EFSPB6909G",
    "LeadEntityType": "Individual/Others",
    "LeadLoanType": "",
    "LeadPhone": "9390845105",
    "Scheme": "852946",
    "LeadGender": "Male",
    "CustomerTaxResidentType": "",
    "Incorporation_Country": "",
    "RegistrationNo": "",
    "FatherName": "",
    "MotherName": "",
    "CityOfBirth": "",
    "Community": "",
    "PlaceOfBirth": "",
    "LeadCaste": "",
    "LeadMaritalStatus": "",
    "LeadDependents": "",
    "LeadDOB": "25-04-1997",
    "EducationalQualification": "",
    "Prefix": "",
    "Creator": "",
    "BranchCode": "",
    "GroupCode": "",
    "FiCode": "",
    "LeadForm60": "",
    "InstituteName": "",
    "Bankdetails": ""
}

export const muthootTokenBody = {
    "MobileNumber": "9390845105",
    "AudienceSecretCode": "Qx7LhN9yA2wRtE5vFpBzTYlCk3VdUuHsXgJmRwPaOq" // Uat Key
    //  "AudienceSecretCode" : "IxrAjDoa2FqElO7IhrSrUJELhUckePEPVpaePlS_Xaw"
}

export const generateUtmBody = {
    "UTMSource": "mfl",
    "UTMMedium": "new_year",
    "UTMCampaign": "new_year",
    "MobileNumber": "9390845105"
}