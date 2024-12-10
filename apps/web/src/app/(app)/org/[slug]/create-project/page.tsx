import { redirect } from 'next/navigation'

import { ability } from '@/auth/auth'

import { ProjectForm } from './project-form'

const CreateProjectPage = async () => {
  const permissions = await ability()

  if (permissions?.cannot('create', 'Project')) {
    redirect('/')
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Create project</h1>

      <ProjectForm />
    </div>
  )
}

export default CreateProjectPage
