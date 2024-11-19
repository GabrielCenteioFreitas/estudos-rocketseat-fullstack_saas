import { defineAbilityFor, projectSchema } from '@saas/auth'

const ability = defineAbilityFor({ role: 'ADMIN', id: 'user-id' })

const project1 = projectSchema.parse({
  id: 'project-id',
  ownerId: 'user-id',
})
const project2 = projectSchema.parse({
  id: 'project-id',
  ownerId: 'user2-id',
})

console.log(ability.can('get', 'Billing'))
console.log(ability.can('create', 'Invite'))
console.log(ability.can('delete', 'Project'))
console.log(ability.can('delete', project1))
console.log(ability.can('delete', project2))
