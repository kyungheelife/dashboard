import A from "./openweathermap-api-icons/icons/01d.png"
import B from "./openweathermap-api-icons/icons/01n.png"
import C from "./openweathermap-api-icons/icons/02d.png"
import D from "./openweathermap-api-icons/icons/02n.png"
import E from "./openweathermap-api-icons/icons/03d.png"
import F from "./openweathermap-api-icons/icons/03n.png"
import G from "./openweathermap-api-icons/icons/04d.png"
import H from "./openweathermap-api-icons/icons/04n.png"
import Y from "./openweathermap-api-icons/icons/09d.png"
import J from "./openweathermap-api-icons/icons/09n.png"
import K from "./openweathermap-api-icons/icons/10d.png"
import L from "./openweathermap-api-icons/icons/10n.png"
import N from "./openweathermap-api-icons/icons/11d.png"
import M from "./openweathermap-api-icons/icons/11n.png"
import O from "./openweathermap-api-icons/icons/13d.png"
import P from "./openweathermap-api-icons/icons/13n.png"
import Q from "./openweathermap-api-icons/icons/50d.png"
import R from "./openweathermap-api-icons/icons/50n.png"
import unknown from "./openweathermap-api-icons/icons/unknown.png"


export const WeatherICON = (value: string) => {
    switch (value) {
        case "01d":
            return A
        case "01n":
            return B
        case "02d":
            return C
        case "02n":
            return D
        case "03d":
            return E
        case "03n":
            return F
        case "04d":
            return G
        case "04n":
            return H
        case "09d":
            return Y
        case "09n":
            return J
        case "10d":
            return K
        case "10n":
            return L
        case "11d":
            return N
        case "11n":
            return M
        case "13d":
            return O
        case "13n":
            return P
        case "50d":
            return Q
        case "50n":
            return R
        default:
            return unknown
    }
}
