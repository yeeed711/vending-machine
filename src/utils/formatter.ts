// 세자리마다 콤마
export const commaFormatter = (value: number): string => {
  return new Intl.NumberFormat('ko').format(value).toString()
}

// 숫자만 필터 (number, string 섞인거에만 사용)
export const numberFormatter = (value: any): number => {
  return parseInt(value.replace(',', ''))
}
