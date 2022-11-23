// 세자리마다 콤마
export const formatter = (value) => {
    return new Intl.NumberFormat('ko').format(`${value}`);
};

// 숫자만 필터 (number, string 섞인거에만 사용)
export const numberFormatter = (value) => {
    return parseInt(value.replace(',', ''));
};
