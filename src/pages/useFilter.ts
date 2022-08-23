import { useMemo, useState } from 'react'

import listOfMonths from '../shared/months'

const defaultYear = 2020
const defaultMonth = new Date().getMonth()

interface IMovement {
  date: string
}

const useFilter = (movements: IMovement[]) => {
  const [selectedYear, setSelectedYear] = useState(defaultYear)
  const [selectedMonth, setSelectMonth] = useState(defaultMonth)

  const months = useMemo(() => {
    return listOfMonths.map((item, index) => ({
      label: item,
      value: index,
    }))
  }, [])

  const years = useMemo(() => {
    const result = [
      ...new Set(
        movements.map(item => {
          return new Date(item.date).getFullYear()
        })
      ),
    ]

    return result.map(item => ({ label: item, value: item }))
  }, [movements])

  return {
    selectedMonth,
    setSelectMonth,
    selectedYear,
    setSelectedYear,
    months,
    years,
  }
}

export default useFilter
