import type { NextPage } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui'

const Blog: NextPage = () => {
	return (
		<Link href='/'>
			<Button>Home</Button>
		</Link>
	)
}

export default Blog
