import type { FC } from 'react'

import { cn } from '@/lib/utils'

interface Props {
	className?: string
	tag: TypographyTagType
	color?: ColorType
}

type ColorType = 'white' | 'black'

type TypographyTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

export const Typography: FC<Props> = ({
	className,
	tag = 'h1',
	color = 'white'
}) => {
	const Tag = tag

	return (
		<Tag
			className={cn(
				{
					['text-white']: color === 'white',
					['text-black']: color === 'black'
				},
				className
			)}
		></Tag>
	)
}
