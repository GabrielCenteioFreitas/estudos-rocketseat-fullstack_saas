import Container from '../container'
import { OrganizationForm } from './organization-form'

const CreateOrganizationPage = () => {
  return (
    <Container>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Create organization</h1>

        <OrganizationForm />
      </div>
    </Container>
  )
}

export default CreateOrganizationPage
