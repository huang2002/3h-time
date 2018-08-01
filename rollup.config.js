import rollupPluginBabel from "rollup-plugin-babel";

const input = 'raw/index.js';

export default [
    {
        input,
        output: {
            format: 'es',
            file: 'dist/index.js'
        }
    }, {
        input,
        plugins: [
            rollupPluginBabel()
        ],
        output: {
            format: 'umd',
            name: 'Time',
            file: 'dist/index.umd.js'
        }
    }
];
