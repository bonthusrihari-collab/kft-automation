import { kftBaseUrl } from "../../config/urls.js";
import { createLeadRequestBody } from "../../payloads/authPayload.js";
import { createLeadAPI } from "../../services/apiService.js";
import { generateToken } from "./generateToken.js";
import { callGetLeadAPI } from "./getLeadStage.js";
import dotenv from "dotenv";
import { callPortfolioBreAPI } from "./PortfolioBreAPI.js";
import { writeToEnvSync } from "../../utils/crypto.js";
import { callCustomerOfferAPI } from "./customerOffer.js";
dotenv.config();

createLeadRequestBody

export async function createLead() {
    const token = await generateToken()
    console.log(token)
    const apiResponse = await createLeadAPI(kftBaseUrl, createLeadRequestBody, token)
    writeToEnvSync({ leadId: apiResponse.body.Data.LeadId })
    console.log(apiResponse.body)

    await callGetLeadAPI(token, apiResponse.body.Data.LeadId)
    await new Promise((resolve) => setTimeout(resolve, 10000))
    console.log(apiResponse.body.Data.LeadId)
    const breResponse = await callPortfolioBreAPI(apiResponse.body.Data.LeadId)
    console.log(breResponse)
    new Promise((resolve) => setTimeout(resolve, 10000))
    if (breResponse.Data.MaxEligibleCreditLimit >= 25000) {
        const loanAmount = breResponse.Data.MaxEligibleCreditLimit
        await callCustomerOfferAPI(loanAmount)
    }
}

await createLead()
