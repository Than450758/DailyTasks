function runProcess() {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 seconds timeout

  fetch('https://jsonplaceholder.typicode.com/todos/1', {
    signal: controller.signal,
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
       console.log(response.json());
    })
    .then(json => {
      console.log(json);
    })
    .catch(error => {
      if (error.name === 'AbortError') {
        console.log('Fetch request was aborted due to timeout');
      } else {
        console.log('Error:', error);
      }
    })
    .finally(() => {
      clearTimeout(timeoutId); // clear the timeout after the fetch completes
    });
}

runProcess();
