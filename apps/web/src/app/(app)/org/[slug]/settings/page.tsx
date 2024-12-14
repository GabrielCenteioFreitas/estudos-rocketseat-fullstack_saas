import Container from '@/app/(app)/container'
import { ability, getCurrentOrg } from '@/auth/auth'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getOrganization } from '@/http/get-organization'

import { OrganizationForm } from '../../organization-form'
import { Billing } from './billing'
import { ShutdownOrganizationButton } from './shutdown-organization-button'

export const ProjectPage = async () => {
  const currentOrg = await getCurrentOrg()
  const permissions = await ability()

  const canUpdateOrganization = permissions?.can('update', 'Organization')
  const canGetBilling = permissions?.can('get', 'Billing')
  const canShutdownOrganization = permissions?.can('delete', 'Organization')

  const {
    organization: { name, domain, shouldAttachUsersByDomain },
  } = await getOrganization({ org: currentOrg! })

  return (
    <Container>
      <h1 className="text-2xl font-bold">Settings</h1>

      <div className="space-y-4">
        {canUpdateOrganization && (
          <Card>
            <CardHeader>
              <CardTitle>Organization settings</CardTitle>
              <CardDescription>
                Update your organization details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <OrganizationForm
                isUpdating
                initialData={{ name, domain, shouldAttachUsersByDomain }}
              />
            </CardContent>
          </Card>
        )}
      </div>

      {canGetBilling && <Billing />}

      {canShutdownOrganization && (
        <Card>
          <CardHeader>
            <CardTitle>Organization settings</CardTitle>
            <CardDescription>
              This will delete all organization data including all projects. You
              cannot undo this action
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ShutdownOrganizationButton />
          </CardContent>
        </Card>
      )}
    </Container>
  )
}
