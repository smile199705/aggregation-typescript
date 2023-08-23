import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess } from '@umijs/max';
import { Button } from 'antd';
import React from "react";
import {Navigate} from "@@/exports";

const AccessPage: React.FC = () => {
  const { canAdmin } = useAccess();
  return (
    <PageContainer
      ghost
      header={{
        title: '权限示例',
      }}
    >
        <div>
            kakkakakakkakak
        </div>
      {/*<Access accessible={!canAdmin}>*/}
      {/*  /!*<Button>只有 Admin 可以看到这个按钮</Button>*!/*/}
      {/*    <Navigate to="/user/login" replace />;*/}
      {/*</Access>*/}
    </PageContainer>
  );
};

export default AccessPage;
