import { createLeadRequestBody } from "../payloads/authPayload.js"
import { generateToken } from "../tests/angelOne/generateToken.js"
import { createLeadAPI } from "../services/apiService.js"
import { kftBaseUrl } from "../config/urls.js"
import { writeToEnvSync } from "./crypto.js"
import dotenv from "dotenv"
dotenv.config()

export async function createLead() {
    const token = await generateToken()
    const authCode = token.AuthCode
    const apiResponse = await createLeadAPI(kftBaseUrl, createLeadRequestBody, token)
    let leadId = apiResponse.body.Data.LeadId
    writeToEnvSync({ leadId: leadId })

    let url = `https://angelone-lamf-qa1.azurewebsites.net/?authCode=${authCode}&&leadId=${leadId}`
    return url
}

