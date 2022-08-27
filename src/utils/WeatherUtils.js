
import { forecast } from "@constants/apiWeather";
import { showToast } from "@constants";
import { Weather, Forecast } from '@actions';
import store from "@stores/store";

class WeatherUtils {

    async forecast(params) {
        return params = await forecast(params).then((response) => {
        
            const respon = response.data
            if(respon.cod == 200){
                if(params.type == 'weather'){
                    return store.dispatch(Weather(respon))
                } else {
                    return store.dispatch(Forecast(respon))
                }
            } else {
                return showToast(respon.message)
            }
        }).catch((error) => {
            return showToast('Data request failed')
        })
    }
}

const weatherUtils = new WeatherUtils()

Object.freeze(weatherUtils)

export default weatherUtils