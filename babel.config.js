module.exports = {
    "compact": false,
    "plugins": ["@babel/syntax-dynamic-import"],
    "presets": [
        "react",
        [
            "@babel/preset-env",
            {
                "modules": false
            }
        ]
    ]
};
