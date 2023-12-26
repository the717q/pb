const { MongoClient } = require('mongodb')

let dbConnection


module.exports = {
    connectTodb: () => {
        MongoClient.connect()
    }
}









const loadingspinner = document.getElementById('loading-spinner')

        function onDOMContentLoaded() {
            // Show the loading spinner
            document.getElementById('loading-spinner').style.display = 'block';
            document.querySelector('<body>').style.display = 'none';
            // Add more code or actions here as needed

            // Simulate a delay (you can replace this with your actual loading code)
            setTimeout(function () {
                // Hide the loading spinner when the content is loaded
                document.getElementById('loading-spinner').style.display = 'none';
                            document.querySelector('body').style.display = 'block';
            }, 2000); // Simulated delay of 2 seconds
}
        
        document.onload(onDOMContentLoaded());
        
