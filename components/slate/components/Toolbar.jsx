import React from 'react'
import { cn } from '@/lib/utils'

const Toolbar = React.forwardRef(({ className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cn(
      'flex items-center gap-2 p-3 rounded-lg border bg-white',
      'hover:border-gray-300 transition-colors duration-200',
      className
    )}
  />
))
Toolbar.displayName = 'Toolbar'

export default Toolbar 