
import axios from 'axios';

function findAllCustomerData(baseURL) {
  return new Promise(function (resolve, reject) {
    axios
      .post('customers', {}, { baseURL: baseURL })
      .then(function (result) {
        var dataPromises = result.data.customerIds.map(function (customerId) {
          return axios.get('customers/' + customerId, { baseURL: baseURL });
        });

        Promise.all(dataPromises)
          .then(function (res) {
            resolve(
              res.map(function (result) {
                return result.data;
              })
            );
          })
          .catch(function (err) {
            reject(err);
          });
      })
      .catch(function (err) {
        console.log('fails', err.toString());
        reject(err);
      });
  });
}

(function() {
  var baseURL = 'https://ktwjky3ybe.execute-api.us-east-1.amazonaws.com';
  findAllCustomerData(baseURL)
    .then(function (customers) {
      customers.forEach(function (customer) {
        console.log(
          customer.id +
          ': ' +
          customer.first_name +
          ' ' +
          customer.last_name
          );
      });
    })
    .catch(function (err) {
      console.error(err);
    });
})();