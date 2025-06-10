import React from 'react'
import { cn } from '@/lib/utils'

const Button = React.forwardRef(({ className, active, ...props }, ref) => (
  <button
    {...props}
    ref={ref}
    className={cn(
      'p-2 rounded hover:bg-gray-100',
      active && 'bg-gray-200',
      className
    )}
  />
))
Button.displayName = 'Button'

export default Button 