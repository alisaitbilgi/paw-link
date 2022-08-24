import userCampaigns from "../fixtures/users/campaigns";
import productCampaigns from "../fixtures/products/campaigns";
import fakeResponse from "../utils/fakeResponse";
import { OPTIONS } from "../../pages/Dashboard/Dashboard";

async function getCampaigns(selectedOption: OPTIONS) {
    const campaigns = selectedOption === OPTIONS.User ? userCampaigns : productCampaigns;
    const fakeRequest = fakeResponse(campaigns, 350);

    return fakeRequest("fakeUrl");
}

export default getCampaigns;
