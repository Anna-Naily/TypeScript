import { renderBlock } from './lib.js'

const getMaxDate = (date:string):string =>{
  const dateArray = date.split('-');
  let nextMonth = (Number(dateArray[1])+1).toString();
  if(Number(dateArray[1])+1 < 10) nextMonth = '0'+ nextMonth;
  const maxDate = `${dateArray[0]}-${nextMonth}-30`;
  return maxDate;
}


interface SearchFormData{
  city: string
  arrivalDate: string
  departureDate:string
  maxPrice: number
}
const searchHandler=(city:string,arrivalDate:string,departureDate:string,maxPrice:number)=>{
  const outputData = {city,arrivalDate,departureDate,maxPrice}
  search(outputData);
}

function search (searchItem:SearchFormData){
  console.log(searchItem.city, searchItem.arrivalDate, searchItem.departureDate, searchItem.maxPrice)
}

export function renderSearchFormBlock (arrivalDate:string, departureDate:string) {

  searchHandler('Saint Petersburg',arrivalDate, departureDate, 2)
  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value=${arrivalDate} min=${arrivalDate} max=${getMaxDate(arrivalDate)} name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${departureDate} min=${departureDate} max="${getMaxDate(departureDate)} name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
