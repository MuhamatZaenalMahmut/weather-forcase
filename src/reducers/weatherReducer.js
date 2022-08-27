const initialState = {
    weather: [],
    forecast:[],
    detail:[],
    coordinate:{
        lat: '-7.8268579',
        lon: '110.43454'
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'WEATHER':
            return {
                ...state,
                ...action.payload,
                weather: action.weather,
            };
        case 'FORECAST':
            return {
                ...state,
                ...action.payload,
                forecast: action.forecast,
            };
        case 'DETAIL':
            return {
                ...state,
                ...action.payload,
                detail: action.detail,
            };
        case 'COORDINATE':
            return {
                ...state,
                ...action.payload,
                coordinate: action.coordinate,
            };
        default:
            return state
    }
}