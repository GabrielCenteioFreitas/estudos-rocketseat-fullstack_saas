import { auth } from '../auth/auth'

const Home = async () => {
  const { user } = await auth()

  return <pre>{JSON.stringify(user, null, 2)}</pre>
}

export default Home
