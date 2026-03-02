import { muthootBaseUrl } from "../../config/urls.js";
import { generateTokenBody, muthootTokenBody } from "../../payloads/authPayload.js";
import { generateAuthToken } from "../../services/apiService.js";

const response = await generateAuthToken(muthootBaseUrl, muthootTokenBody)
console.log(response.body)