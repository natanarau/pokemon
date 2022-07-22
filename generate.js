const axios = require('axios')
const CPF = '42338768833'
axios.post('https://cashback-sales-consumer.k8s-dev.bancomidway.io/v1/sales-kafka', {
  purchaseValue: 800,
  typePurchase: "on-us",
  cpfCnpj: CPF,
  sellerName: "",
  integrationID: "1",
  partnerID: 1,
  productID: 1,
  transactionModality: 1,
  purchaseDate: 1647454930846,
  cardBrand: 1,
  branchCode: 1,
  additionalCard: false
})
  .then(res => console.log(res.status))
  .catch(err => console.log(err))