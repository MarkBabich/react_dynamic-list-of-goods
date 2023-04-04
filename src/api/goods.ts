import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export function getAll(): Promise<Good[]> {
  return wait(500)
    .then(() => fetch(API_URL))
    .then(response => response.json());
}

export const get5First = () => {
  return getAll()
    .then(goods => goods.sort((prevGood, curGood) => (
      prevGood.name.localeCompare(curGood.name)
    ))
      .slice(0, 5));
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter((good) => good.color === 'red'));
};
