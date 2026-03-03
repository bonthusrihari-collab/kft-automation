import { kftBaseUrl } from "../../config/urls.js";
import { token } from "../../payloads/userData.js";
import { portfolioBreAPI } from "../../services/apiService.js";


export async function callPortfolioBreAPI(leadId) {
    console.log("Portfolio Bre API Triggered")
    const response = await portfolioBreAPI(kftBaseUrl, token, leadId)
    return response.body
}