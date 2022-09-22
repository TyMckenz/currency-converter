export interface ExchangeRatesResponse {
    motd: string,
    success: boolean,
    base: string,
    date: string,
    rates: {
        [key: string]: number
    }
   
}
