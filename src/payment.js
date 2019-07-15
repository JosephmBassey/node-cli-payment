const Ravepay = require('ravepay');
require('dotenv').config()
const rave = new Ravepay(process.env.PUBLICK_KEY, process.env.SECRET_KEY, false);


module.exports = payments = async (data) => {
  try {
    const {
      cardno,
      cvv,
      expirymonth,
      expiryyear,
      email,
      firstname,
      lastname
  } = data
    const resp = await rave.Card.charge({
      "cardno": cardno,
      "cvv": cvv,
      "expirymonth": expirymonth,
      "expiryyear": expiryyear,
      "currency": "NGN",
      "country": "NG",
      "amount": "1000",
      "email": email,
      "firstname": firstname,
      "lastname": lastname,
      "IP": "355426087298442",
      "txRef": "MC-" + Date.now(),
      "meta": [{
        metaname: "Swipe n Pay",
        metavalue: "123949494DC"
      }],
      "redirect_url": "https://rave-webhook.herokuapp.com/receivepayment",
      "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"
    })
    const response = await rave.Card.validate({
      "transaction_reference": resp.body.data.flwRef,
      "otp": 12345
    })
    console.log(response.body.data.tx);
  } catch (error) {
    console.log(error)
  }
}
