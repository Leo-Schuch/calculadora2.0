export const formatToBRCurrency = (value) => {
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };
export const formatToUsCurrency = (value) => {
    return Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };
