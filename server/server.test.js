const request = require('request');

test('posts form data server and response is sorted', () => {
  const apiEndpoint = 'http://localhost:3001/api/sort';
  const formData = { form: {payload: 'hello'}}
  const myPromise = () => {
    return new Promise((resolve, reject) => {
      request.post(apiEndpoint, formData, (e, res, body) => {
        return e ? reject(e) : resolve(body);
      });
    });
  }

  myPromise()
    .then(res => JSON.parse(res))
    .then(res => expect(res).toEqual(["hello","ehllo"]))
    .catch(console.error);
});


test('gets an array of tuples from server and ensures each input and output are correct', () => {
  const apiEndpoint = 'http://localhost:3001/api/sort';
  const myPromise = () => {
    return new Promise((resolve, reject) => {
      request.get(apiEndpoint, (e, res, body) => {
        return e ? reject(e) : resolve(body);
      });
    });
  }

  myPromise()
    .then(res => JSON.parse(res))
    .then(res => {
      if (res.length > 0) {
        for (var i = 0; i < res.length; i++) {
          const input = res[i][0];
          const output = res[i][1];
          const transformFirst = input.split('').sort().join('');
            expect(transformFirst).toEqual(output);
        }
      }
    })
    .catch(console.error);
})
