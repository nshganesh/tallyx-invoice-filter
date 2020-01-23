

export const formatDate = (date) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return `${day}/${month}/${year}`
}

export const toNumber = (value) => Number(value.replace(/[^0-9\.]+/g, ""))

export const toLocale = (currency, value) => Intl.NumberFormat(currency).format(toNumber(value))