import React from 'react'
import { cn } from '@/lib/utils'
import {
  Bold,
  Italic,
  Underline,
  Code,
  Heading1,
  Heading2,
  Quote,
  ListOrdered,
  List,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify
} from 'lucide-react'

const iconMap = {
  format_bold: Bold,
  format_italic: Italic,
  format_underlined: Underline,
  code: Code,
  looks_one: Heading1,
  looks_two: Heading2,
  format_quote: Quote,
  format_list_numbered: ListOrdered,
  format_list_bulleted: List,
  format_align_left: AlignLeft,
  format_align_center: AlignCenter,
  format_align_right: AlignRight,
  format_align_justify: AlignJustify
}

const Icon = React.forwardRef(({ className, name, ...props }, ref) => {
  const IconComponent = iconMap[name]
  if (!IconComponent) return null

  return (
    <IconComponent
      {...props}
      ref={ref}
      className={cn('w-4 h-4', className)}
    />
  )
})
Icon.displayName = 'Icon'

export default Icon 