<template>
  <aside class="filter">
        <h2 class="filter__title">Фильтры</h2>

        <form class="filter__form form" action="#" method="get">
          <fieldset class="form__block">
            <legend class="form__legend">Цена</legend>
            <label class="form__label form__label--price" for="filter-from">
              <input class="form__input" id="filter-from"
               type="text" name="min-price" value="0">
              <span class="form__value">От</span>
            </label>
            <label class="form__label form__label--price" for="filter-to">
              <input class="form__input" id="filter-to"
              type="text" name="max-price" value="12345">
              <span class="form__value">До</span>
            </label>
          </fieldset>

          <fieldset class="form__block">
            <legend class="form__legend">Категория</legend>
            <label class="form__label form__label--select" for="filter-category">
              <select class="form__select" id="filter-category" type="text" name="category">
                <option value="value1">Все категории</option>
                <option value="value2">Зубные щетки</option>
                <option value="value3">Телефоны</option>
                <option value="value4">Спортинвентарь</option>
              </select>
            </label>
          </fieldset>

          <fieldset class="form__block">
            <legend class="form__legend">Цвет</legend>
            <ul class="colors">
              <li class="colors__item">
                <label class="colors__label" for="color-filter-one">
                  <input class="colors__radio sr-only" id="color-filter-one"
                   type="radio" name="color" value="#73B6EA" checked="">
                  <span class="colors__value" style="background-color: #73B6EA;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label" for="color-filter-one">
                  <input class="colors__radio sr-only" id="color-filter-one"
                   type="radio" name="color" value="#FFBE15">
                  <span class="colors__value" style="background-color: #FFBE15;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label" for="color-filter-two">
                  <input class="colors__radio sr-only" id="color-filter-two"
                   type="radio" name="color" value="#939393">
                  <span class="colors__value" style="background-color: #939393;">
                </span></label>
              </li>
              <li class="colors__item">
                <label class="colors__label" for="color-filter-three">
                  <input class="colors__radio sr-only" id="color-filter-three"
                   type="radio" name="color" value="#8BE000">
                  <span class="colors__value" style="background-color: #8BE000;">
                </span></label>
              </li>
              <li class="colors__item">
                <label class="colors__label" for="color-filter-four">
                  <input class="colors__radio sr-only" id="color-filter-four"
                   type="radio" name="color" value="#FF6B00">
                  <span class="colors__value" style="background-color: #FF6B00;">
                </span></label>
              </li>
              <li class="colors__item">
                <label class="colors__label" for="color-filter-six">
                  <input class="colors__radio sr-only" id="color-filter-six"
                   type="radio" name="color" value="#FFF">
                  <span class="colors__value" style="background-color: #FFF;">
                </span></label>
              </li>
              <li class="colors__item">
                <label class="colors__label" for="color-filter-seven">
                  <input class="colors__radio sr-only" id="color-filter-seven"
                   type="radio" name="color" value="#000">
                  <span class="colors__value" style="background-color: #000;">
                </span></label>
              </li>
            </ul>
          </fieldset>

          <fieldset class="form__block">
            <legend class="form__legend">Объем в ГБ</legend>
            <ul class="check-list">
              <li class="check-list__item">
                <label class="check-list__label" for="filter-volume-8">
                  <input class="check-list__check sr-only" id="filter-volume-8"
                   type="checkbox" name="volume" value="8" checked="">
                  <span class="check-list__desc">
                    8
                    <span>(313)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label" for="filter-volume-16">
                  <input class="check-list__check sr-only" id="filter-volume-16"
                   type="checkbox" name="volume" value="16">
                  <span class="check-list__desc">
                    16
                    <span>(461)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label" for="filter-volume-32">
                  <input class="check-list__check sr-only" id="filter-volume-32"
                   type="checkbox" name="volume" value="32">
                  <span class="check-list__desc">
                    32
                    <span>(313)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label" for="filter-volume-64">
                  <input class="check-list__check sr-only" id="filter-volume-64"
                  type="checkbox" name="volume" value="64">
                  <span class="check-list__desc">
                    64
                    <span>(313)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label" for="filter-volume-128">
                  <input class="check-list__check sr-only" id="filter-volume-128"
                  type="checkbox" name="volume" value="128">
                  <span class="check-list__desc">
                    128
                    <span>(313)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label" for="filter-volume-264">
                  <input class="check-list__check sr-only" id="filter-volume-264"
                   type="checkbox" name="volume" value="264">
                  <span class="check-list__desc">
                    264
                    <span>(313)</span>
                  </span>
                </label>
              </li>
            </ul>
          </fieldset>

          <button class="filter__submit button button--primery" type="submit">
            Применить
          </button>
          <button class="filter__reset button button--second" type="button">
            Сбросить
          </button>
        </form>
      </aside>
</template>

<script> {
  
}
</script>