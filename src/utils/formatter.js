// 세자리마다 콤마
export const formatter = (value) => {
    return new Intl.NumberFormat('ko').format(`${value}`);
};
