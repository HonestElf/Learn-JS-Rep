function MyPromise(func) {
  let resolveReturn = null;
  let rejectReturn = null;

  this.status = 'pending';

  let handlerArr = [];
  let errorHandlerArr = [];
  let finallyHandlerArr = [];

  function resolve(arg) {
    this.status = 'resolved';

    resolveReturn = arg;
    handlerArr.forEach((handler) => {
      resolveReturn = handler(resolveReturn);
    });

    finallyHandlerArr.forEach((handler) => {
      handler();
    });
  }

  function reject(arg) {
    this.status = 'rejected';
    rejectReturn = arg;

    for (let handler of errorHandlerArr) {
      try {
        handler(rejectReturn);
        rejectReturn = null;
        break;
      } catch (err) {
        rejectReturn = err;
      }
    }

    finallyHandlerArr.forEach((handler) => {
      handler();
    });
  }

  this.then = function (handler) {
    if (this.status === 'resolved') {
      resolveReturn = handler(resolveReturn);
    } else {
      handlerArr.push(handler);
    }

    return this;
  };

  this.catch = function (handler) {
    if (this.status === 'rejected') {
      if (rejectReturn !== null) {
        try {
          handler(rejectReturn);
          rejectReturn = null;
        } catch (err) {
          rejectReturn = err;
        }
      }
    } else {
      errorHandlerArr.push(handler);
    }

    return this;
  };

  this.finally = function (handler) {
    if (this.status !== 'pending') {
      handler();
    } else {
      finallyHandlerArr.push(handler);
    }

    return this;
  };

  func(resolve.bind(this), reject.bind(this));
}

const a = new MyPromise((resolve, reject) => {
  try {
    resolve('213');
    // setTimeout(() => reject('908'), 1000);
    // reject('908');
  } catch (err) {
    reject(err);
  }
})
  .then((res) => {
    console.log(res);
    return res + '123';
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
    throw err + '555';
  })
  .catch((err) => {
    console.log(err);
    throw err + 'asdasd';
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log('finally'))
  .finally(() => console.log('finally2'));

// const a = new Promise((resolve, reject) => {
//   try {
//     // resolve('213');
//     // setTimeout(() => resolve('213'), 1000);
//     reject('908');
//   } catch (err) {
//     reject(err);
//   }
// })
//   .then((res) => {
//     console.log(res);
//     return res + '123';
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//     throw err + '555';
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const promise = new Promise((resolve, reject) => {
//   try {
//     console.log('123');
//     resolve('213');
//   } catch (err) {
//     reject(err);
//   }
// })
//   .then((res) => {
//     console.log(res);
//     return res + '123';
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   })
//   .finally(() => {
//     console.log('finally!!!');
//   });
