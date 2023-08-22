import { defineConfig } from '@umijs/max';
import routes from "./src/configs/routes";

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '自闭症分析系统'
  },
  routes,
  npmClient: 'yarn',
});

