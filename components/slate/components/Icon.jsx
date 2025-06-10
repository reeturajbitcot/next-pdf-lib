import React from 'react'
import { cn } from '@/lib/utils'

const Icon = React.forwardRef(({ className, ...props }, ref) => (
  <span
    {...props}
    ref={ref}
    className={cn('material-icons text-lg', className)}
  />
))
Icon.displayName = 'Icon'

export default Icon 