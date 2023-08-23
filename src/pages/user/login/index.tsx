import Logo from '@/assets/logo.png';
import { userLogin } from '@/services/userService';
import { Link } from '@@/exports';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { message } from 'antd';
import { useSearchParams } from 'umi';

/**
 * 用户登录页面
 */
export default () => {
    const [searchParams] = useSearchParams();

    const { initialState, setInitialState } = useModel('@@initialState');

    /**
     * 用户登录
     * @param fields
     */
    const doUserLogin = async (fields: UserType.UserLoginRequest) => {
        const hide = message.loading('登录中');
        try {
            const res = await userLogin({ ...fields });
            message.success('登录成功');
            console.log(initialState, '#######', res, '@@@@@!!!')
            setInitialState({
                ...initialState,
                loginUser: res,
            } as InitialState);
            // 重定向到之前页面
            // console.log('initialState')
            // return initialState

            window.location.href = searchParams.get('redirect') ?? '/';
            // window.location.href = '/access';
        } catch (e: any) {
            message.error(e.message);
        } finally {
            hide();
        }
    };

    return (
        <div
            style={{
                height: '100vh',
                background:
                    'url(https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png)',
                backgroundSize: '100% 100%',
                padding: '32px 0 24px',
            }}
        >
            <LoginForm<UserType.UserLoginRequest>
                logo="https://p26-passport.byteacctimg.com/img/user-avatar/312989b46037c16843b1eb44aea82fa2~180x180.awebp?"
                title="儿童自闭症分析系统"
                subTitle="用于儿童行为统计与分析的系统"
                onFinish={async (formData) => {
                    console.log(formData, '@@@@@@@@@')
                    await doUserLogin(formData).then((res) => {
                        console.log(res, 'res=====')
                    });
                }}
            >
                <>
                    <ProFormText
                        name="userAccount"
                        fieldProps={{
                            size: 'large',
                            prefix: <UserOutlined className={'prefixIcon'} />,
                        }}
                        placeholder={'请输入账号'}
                        rules={[
                            {
                                required: true,
                                message: '请输入账号!',
                            },
                        ]}
                    />
                    <ProFormText.Password
                        name="userPassword"
                        fieldProps={{
                            size: 'large',
                            prefix: <LockOutlined className={'prefixIcon'} />,
                        }}
                        placeholder={'请输入密码'}
                        rules={[
                            {
                                required: true,
                                message: '请输入密码！',
                            },
                        ]}
                    />
                </>
                <div
                    style={{
                        marginBottom: 24,
                    }}
                >
                    <Link to="/user/register">新用户注册</Link>
                    <Link
                        to="/"
                        style={{
                            float: 'right',
                        }}
                    >
                        返回主页
                    </Link>
                </div>
            </LoginForm>
        </div>
    );
};
