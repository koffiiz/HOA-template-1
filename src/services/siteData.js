import axios from "axios";

async function GetSiteData() {
  const tempSiteData = await axios
    .get(
      `https://hoamdevsite.wpengine.com/wp-json/custom_rest_route/v1/customer_web_template?template_id=369692`
    )
    .then((result) => {
      return result;
    })
    .then((response) => {
      return response.data;
    });
  return tempSiteData;
}


export default GetSiteData;