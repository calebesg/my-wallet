interface IValue {
  amount: string
  date: string
}

const calcTotalValue = (values: IValue[], month: number, year: number) => {
  return values.reduce((total, current) => {
    const date = new Date(current.date)

    if (date.getMonth() === month && date.getFullYear() === year) {
      return total + Number(current.amount)
    }

    return total
  }, 0)
}

export default calcTotalValue
