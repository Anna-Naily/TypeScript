import { renderBlock } from './lib.js'

export function renderUserBlock (userName:string, avatarLink:string, favoriteItemsAmount:number) {
  
  let favoritesCaption= 'ничего нет'
  let hasFavoriteItems = false
  if(favoriteItemsAmount>0){
    favoritesCaption=String(favoriteItemsAmount)
    hasFavoriteItems=true
  }
  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src=${avatarLink} alt="Wade Warren" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
