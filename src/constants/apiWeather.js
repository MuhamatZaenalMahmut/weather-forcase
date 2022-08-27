import Axios from "axios";
import { base_uri, api_key } from "@constants/BASE_URL";

export const forecast   = payload => Axios.get(`${base_uri}${payload.type}?lat=${payload.lat}&lon=${payload.lon}&appid=${api_key}&units=Metric`)