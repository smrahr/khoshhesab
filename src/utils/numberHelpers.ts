export function numberWithCommas(x: number | string) {
  if (typeof x === "string") {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

export function toPersianDigits(n: number) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return n.toString().replace(/\d/g, (x: string) => farsiDigits[+x]);
}

export const getJustNumber = (x: number | string) => {
  if (typeof x == "string") {
    return x.replace(/[^0-9]/g, "");
  } else {
    return x.toString().replace(/[^0-9]/g, "");
  }
};
export const checkMelliCode = (x: string) => {
  if (x.length !== 10 || /^(\d)\1{9}$/.test(x)) {
    return false;
  }
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(x.charAt(i), 10) * (10 - i);
  }
  const remainder = sum % 11;
  const checkDigit = parseInt(x.charAt(9), 10);
  return (
    (remainder < 2 && checkDigit === remainder) ||
    (remainder >= 2 && checkDigit === 11 - remainder)
  );
};
