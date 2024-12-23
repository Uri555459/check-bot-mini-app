import type { NextPage } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui'

const Home: NextPage = () => {
	return (
		<>
			<Link href='/blog'>
				<Button>Blog</Button>
			</Link>
			<Link href='/welcome'>
				<Button>Welcome</Button>
			</Link>
		</>
	)
}

export default Home
