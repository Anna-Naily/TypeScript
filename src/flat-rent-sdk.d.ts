
export interface Hotel{
    id: string,
    title: string,
    details: string,
    photos: string[],
    coordinates: number[],
    bookedDates: string[] | number[] | Date[],
    price: number
}

export interface Search{
    city:string
    checkInDate: Date
    checkOutDate: Date
    priceLimit: number[]
}

export function cloneDate(date: Date): Date
export function addDays(date:Date, days:number):Date
export function get(id:string):Promise<Object|null>
export function serach(parameters:Search):Object[]
export function book(flatId:number, checkInDate:Date, checkOutDate:Date):number
export function _assertDateAreCorrect(checkInDate:Date, checkOutDate:Date):void
export function  _resetTime(date:Date):void
export function _calculateDifferenceInDays(startDate:Date, endDate:Date):number
export function _generateDateRange(from:Date, to:Date):Date[]
export function _generateTransactionId():number
export function _areAllDatesAvailable(flat:Hotel, dateRange:Date[]):Hotel
export function _formatFlatObject(flat:Hotel):string | Object
export function _formatFlatObject(flat:Hotel, nightNumber?:Date[]):string | Object
export function _readDatabase():string | Object
export function _writeDatabase(database:Hotel[]):void
export function _syncDatabase(database:Hotel[]):void

