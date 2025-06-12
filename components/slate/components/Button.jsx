import React from 'react'
import { cn } from '@/lib/utils'

const Button = React.forwardRef(({ className, active, ...props }, ref) => (
  <button
    {...props}
    ref={ref}
    className={cn(
      'p-2 rounded-md border border-transparent',
      'hover:border-gray-200 hover:bg-gray-50',
      'transition-colors duration-200',
      active && 'bg-gray-100 border-gray-200',
      'focus:outline-none focus:ring-2 focus:ring-gray-200',
      className
    )}
  />
))
Button.displayName = 'Button'

export default Button 