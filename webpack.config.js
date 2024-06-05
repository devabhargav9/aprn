import { resolve } from 'path';

export const entry = './src/index.js';
export const output = {
  path: resolve(__dirname, 'dist'), // Output directory
  filename: 'bundle.js' // Output bundle file
};
export const module = {
  rules: [
    {
      test: /\.css$/,
      exclude: /\.module\.css$/, // Exclude CSS Modules files
      use: [
        'style-loader',
        'css-loader', // Use regular css-loader without modules option
      ],
    },
    {
      test: /\.module\.css$/, // Handle CSS Modules files separately
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]__[local]--[hash:base64:5]', // Customize the generated class names
          },
        },
      ],
    },
  ],
};
