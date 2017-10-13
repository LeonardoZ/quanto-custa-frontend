export function calcularTotalDeUnidades(unidades) {
  return unidades.length === 0 ? 
    0 : 
    unidades.map(x => x.subTotal).reduce((acc = 0, x) => acc + x)
}