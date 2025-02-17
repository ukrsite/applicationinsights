# applicationinsights

Sample Node.js application that uses Azure Monitor Application Insights to enable Live Metrics Stream for real-time monitoring. 

First, let's create a new Node.js project:

1. **Initialize a New Node.js Project**:
   ```bash
   mkdir live-metrics-app
   cd live-metrics-app
   npm init -y
   ```

2. **Install the Required Packages**:
   ```bash
   npm install applicationinsights express
   ```

3. **Create an Application File**:
   Create a new file named `app.js` and add the following code:

   ```javascript
   const appInsights = require('applicationinsights');
   const express = require('express');
   const app = express();

   // Replace '<INSTRUMENTATION_KEY>' with your actual Application Insights instrumentation key
   appInsights.setup('<INSTRUMENTATION_KEY>')
              .setAutoCollectConsole(true, true)
              .setSendLiveMetrics(true)
              .start();

   app.get('/', (req, res) => {
     res.send('Hello, World!');
     console.log('Hello, World! request received');
   });

   const port = process.env.PORT || 3000;
   app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
   });
   ```

4. **Run the Application**:
   ```bash
   node app.js
   ```

5. **Monitor Live Metrics**:
   - Go to your Application Insights resource in the Azure portal.
   - Select **Live Metrics** under **Investigate** in the left-hand menu.
   - You should see live metrics data from your application.

This basic example demonstrates how to set up an Express.js application with Application Insights for live metrics streaming. Replace `<INSTRUMENTATION_KEY>` with your actual Application Insights instrumentation key, which you can find in your Azure portal under the Application Insights resource.

Feel free to expand this application or ask for more details on any specific part. Happy coding! 🚀
