export const transformToReal = (value: number) => {
  return value?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
};

export function toSnakeCase(inputString: string) {
  return inputString
    .split('')
    .map((character) => {
      if (character == character.toUpperCase()) {
        return '_' + character.toLowerCase();
      } else {
        return character;
      }
    })
    .join('');
}

export function toTagName(inputString: string) {
  return inputString.toLowerCase().replace(' ', '-')
}

export function sleep(milliseconds: number) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
