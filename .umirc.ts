import { defineConfig } from '@umijs/max';
import routes from "./src/configs/routes";

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {},
  routes,
  npmClient: 'yarn',
});

