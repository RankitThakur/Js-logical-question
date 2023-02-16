// create a new AbortController
const controller = new AbortController();

test();
// set a timeout to cancel the request after 5 seconds
let timeoutId = setTimeout(() => {
    debugger;
  controller.abort();
}, 1000);

// make the fetch request
function test () {
    debugger
    fetch('https://jsonplaceholder.typicode.com/todos/1', { signal: controller.signal })
    .then(response => {
        console.log(response    )
    })
    .catch(error => {
        debugger
        if (error.name === 'AbortError') {
        console.log('Request was cancelled');
        } else {
        console.error(error);
        }
    })
    .finally(() => {
        clearTimeout(timeoutId);
    });
}
