import { renderBlock } from './lib.js'

export function renderUserBlock (userData:string[], favoriteItemsAmount?:string) {
  let favoritesCaption= 'ничего нет'
  let hasFavoriteItems = false
  if(Number(favoriteItemsAmount)>0 && favoriteItemsAmount!=undefined){
    favoritesCaption=favoriteItemsAmount
    hasFavoriteItems=true
  }
  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${userData[1]}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${userData[0]}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}