import { kftBaseUrl } from "../../config/urls.js";
import { leadId, token } from "../../payloads/userData.js";
import { amlRequest, getKYCLeadData, getKYCStatusAPI, getPledgedStocks, redirectionToKYC, saveDocument } from "../../services/apiService.js";


export async function createKYCRecord() {
    const response = await getKYCLeadData(kftBaseUrl, token, leadId)
    console.log(response.body)
}

export async function redirectionGetKYCUrl() {
    const response = await redirectionToKYC(kftBaseUrl, token, leadId)
    console.log(response.body)
}

export async function getCurrentKYCStatus() {
    const response = await getKYCStatusAPI(kftBaseUrl, token, leadId)
    console.log(response.body)
}
export async function saveKycDocument() {
    const response = await saveDocument(kftBaseUrl, token, leadId, KID)
    console.log(response.body)

}

export async function getAMLRequest() {
    const response = await amlRequest(kftBaseUrl, token, leadId)
    console.log(response.body)
}

export async function getPledgedStocksDetails() {
    const response = await getPledgedStocks(kftBaseUrl, token, leadId)
    console.log(response.body)
}
