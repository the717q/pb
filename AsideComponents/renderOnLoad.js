export default  function onDOMContentLoaded(element, element2) {
            // Show the loading spinner
            element.style.display = 'block';
            element2.style.display = 'none'
            // Add more code or actions here as needed

            // Simulate a delay (you can replace this with your actual loading code)
            setTimeout(function () {
                // Hide the loading spinner when the content is loaded
                element.style.display = 'none';
                element2.style.display = 'block';
            }, 1500); // Simulated delay of 2 seconds
}