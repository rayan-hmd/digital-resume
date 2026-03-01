const apiEndpoint = 'https://73nhe22wt4.execute-api.ap-southeast-4.amazonaws.com/default/incrementVisitorCount';
window.onload = () => {
    console.log("script running")

    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
        },

    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch((error) => console.error('Error:', error));
};