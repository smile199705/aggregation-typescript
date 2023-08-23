import { defineConfig } from '@umijs/max';
import routes from "./src/configs/routes";

export default defineConfig({
  antd: {},
  outputPath: 'dist',
  access: {},
  model: {},
  initialState: {},
  request: {},
  clientLoader: {},
  layout: {},
  routes,
  npmClient: 'yarn'
});

