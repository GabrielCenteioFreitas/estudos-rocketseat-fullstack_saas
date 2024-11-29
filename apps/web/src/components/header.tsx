import { Slash } from 'lucide-react'
import Image from 'next/image'

import rocketseatIcon from '@/assets/rocketseat-icon.svg'
import { ability } from '@/auth/auth'

import { Separator } from './ui/separator'

export const Header = async () => {
  const permissions = await ability()

  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src={rocketseatIcon}
          className="size-6 dark:invert"
          alt="Rocketseat"
        />

        <Slash className="size-3 -rotate-[24deg] text-border" />

        {/* The DropdownMenu is causing an error, so for now, this component will remain commented out */}
        {/* <OrganizationSwitcher /> */}

        {permissions?.can('get', 'Project') && <p>Projetos</p>}
      </div>

      <div className="flex items-center gap-4">
        {/* The DropdownMenu is causing an error, so for now, this component will remain commented out */}
        {/* <ThemeSwitcher /> */}

        <Separator orientation="vertical" className="h-5" />

        {/* The DropdownMenu is causing an error, so for now, this component will remain commented out */}
        {/* <ProfileButton /> */}
      </div>
    </div>
  )
}
