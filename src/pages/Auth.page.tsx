import { AuthJWT, Layout } from '@c/Layout'
import { Helmet } from 'react-helmet'

export const AuthPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>{import.meta.env.VITE_APP_APP_NAME} | Auth</title>
      </Helmet>

      <AuthJWT />
    </Layout>
  )
}
