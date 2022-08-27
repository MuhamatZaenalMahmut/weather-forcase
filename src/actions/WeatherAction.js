import * as ACTION_TYPES from "@constants/ActionTypes";

export const Coordinate = coordinate    => ({ type: ACTION_TYPES.COORDINATE, coordinate: coordinate })
export const Weather    = weather       => ({ type: ACTION_TYPES.WEATHER, weather: weather })
export const Forecast   = forecast      => ({ type: ACTION_TYPES.FORECAST, forecast: forecast })
export const Detail     = detail        => ({ type: ACTION_TYPES.DETAIL, detail: detail })