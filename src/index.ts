import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

const getUserData = (key:unknown):string[]=> {
  if (key == null){
    return ['пусто', '']
  }else{
    const newKey=JSON.parse(String(key))
    return [newKey.username, newKey.avatarUrl]
  }
}
const getFavoritesAmount= (key:unknown) =>{
  if(key==null){
    return key + ''
  }else{
    return String(key)
  }
}

window.addEventListener('DOMContentLoaded', () => {
  localStorage.setItem('user', JSON.stringify({username:'Wade Warren', avatarUrl:'/img/avatar.png'}))
  localStorage.setItem('favoritesAmount', '3')
  renderUserBlock(getUserData(localStorage.getItem('user')), getFavoritesAmount(localStorage.getItem('favoritesAmount')))
  renderSearchFormBlock('2022-01-24', '2022-02-15')
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}} 
  )
})

