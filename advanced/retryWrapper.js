
async function retry(fn, attempts = 3, delay = 1000) {
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === attempts - 1) throw error;
      await new Promise(res => setTimeout(res, delay));
    }
  }
}

retry(() => Promise.reject("Fail"), 3)
  .catch(err => console.log("Final failure:", err));
