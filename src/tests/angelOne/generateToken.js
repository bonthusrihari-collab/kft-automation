import { generateHashes, writeToEnvSync } from "../../utils/crypto.js";
import { generateAuthToken, getToken } from "../../services/apiService.js";
import { angelOneBaseUrl, kftAuthBaseUrl, } from "../../config/urls.js";
import { generateTokenBody } from "../../payloads/authPayload.js";

export async function generateToken() {

    const shortToken = await getToken(angelOneBaseUrl)
    console.log(shortToken.body)

    const apiResponse = await generateHashes(shortToken.body.data.short_token, 'BONTHU1')
    console.log(apiResponse)

    let rawData = generateTokenBody('BONTHU1', apiResponse.shortToken)
    console.log(rawData)
    const response = await generateAuthToken(kftAuthBaseUrl, rawData, apiResponse.generateHashSha256, false)

    writeToEnvSync({ AuthToken: response.body.Data.AuthToken, AuthCode: response.body.Data.AuthCode })

    return response.body.Data.AuthToken
}