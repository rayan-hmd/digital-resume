const apiEndpoint = 'https://73nhe22wt4.execute-api.ap-southeast-4.amazonaws.com/default/incrementVisitorCount';


const visitorCountElement = document.getElementById('visitor-count');

window.onload = () => {
    console.log("Script running...");

    if(!visitorCountElement) console.error('Visitor count element not found!');

    fetch(apiEndpoint, { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            console.log('API data:', data);

            if(visitorCountElement) {
                visitorCountElement.textContent = `Visitor Count: ${data.visitor_count}`;
            }
        })
        .catch(error => console.error('Fetch error:', error));
};