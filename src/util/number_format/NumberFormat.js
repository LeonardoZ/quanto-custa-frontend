import numeral from 'numeral'


numeral.register('locale', 'pt-br', {
  delimiters: {
      thousands: '.',
      decimal: ','
  },
  currency: {
      symbol: 'R$'
  }
});

// switch between locales
numeral.locale('pt-br');

export function formatarMoeda(valor) {
  return numeral(valor).format('$ 0,0.00')
}