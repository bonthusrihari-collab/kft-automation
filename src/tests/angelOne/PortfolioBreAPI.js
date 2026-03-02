import { kftBaseUrl } from "../../config/urls.js";
import { token } from "../../payloads/userData.js";
import { portfolioBreAPI } from "../../services/apiService.js";


export async function callPortfolioBreAPI(leadId) {
    const response = await portfolioBreAPI(kftBaseUrl, token, leadId)
    return response.body
}