const formatter = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 2,
});

function formatPrice(price: number) {
    return `${formatter.format(price).replace("₺", "")} TRY`;
}

export default formatPrice;
