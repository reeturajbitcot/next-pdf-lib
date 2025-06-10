import React from 'react'
import { cn } from '@/lib/utils'

const Toolbar = React.forwardRef(({ className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cn(
      'flex items-center gap-1 p-2 border-b bg-white',
      className
    )}
  />
))
Toolbar.displayName = 'Toolbar'

export default Toolbar 