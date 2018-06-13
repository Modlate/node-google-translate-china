/// <reference types="node" />

import translate = require("node-google-translate-skidz");

translate(
    {
        text: "text",
        source: "en",
        target: "zh"
    },
    result => {
        console.log(result);
    }
);
