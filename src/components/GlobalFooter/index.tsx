import {GithubOutlined} from "@ant-design/icons";
import {DefaultFooter} from "@ant-design/pro-layout";
import React from "react";


const GlobalFooter: React.FC = () => {
    return (
        <DefaultFooter
            copyright="2023 @温柔学长"
            links={[
                // {
                //     key: 'Autism-analysis system',
                //     title: 'Autism-analysis system',
                //     href: 'https://pro.ant.design',
                //     blankTarget: true,
                // },
                {
                    key: 'github',
                    title: <GithubOutlined />,
                    href: 'https://github.com/ant-design/ant-design-pro',
                    blankTarget: true,
                },
                {
                    key: '自闭症分析系统',
                    title: '自闭症分析系统',
                    href: 'https://github.com/smile199705/autism-analysis-typescript',
                    blankTarget: true,
                },
            ]}
        />
    )
}
export default GlobalFooter
