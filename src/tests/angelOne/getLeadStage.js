import { kftBaseUrl } from "../../config/urls.js";
import { leadStage } from "../../services/apiService.js";

export async function callGetLeadAPI(token, leadId) {
    const response = await leadStage(kftBaseUrl, token, leadId)
    console.log(response.body)

}
