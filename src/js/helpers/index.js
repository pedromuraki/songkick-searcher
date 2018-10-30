import history from '../router/history';

export const changePage = pathname => {
  history.push(pathname);
};

export const goBack = () => {
  history.goBack();
};

export const searchfy = text => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '+')
    .replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a')
    .replace(new RegExp('[ÉÈÊ]', 'gi'), 'e')
    .replace(new RegExp('[ÍÌÎ]', 'gi'), 'i')
    .replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o')
    .replace(new RegExp('[ÚÙÛ]', 'gi'), 'u')
    .replace(new RegExp('[Ç]', 'gi'), 'c');
};
