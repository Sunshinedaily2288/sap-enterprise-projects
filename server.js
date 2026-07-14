const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        status: "ONLINE",
        environment: "PRODUCTION",
        connected_modules: ["Sales", "Inventory", "Finance"]
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Core SAP Extension App actively listening on port ${PORT}`);
});
