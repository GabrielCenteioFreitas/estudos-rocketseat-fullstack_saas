import { OrganizationForm } from '@/app/(app)/create-organization/organization-form'
import { InterceptedSheetContent } from '@/components/intercepted-sheet-content'
import { Sheet, SheetTitle } from '@/components/ui/sheet'

const CreateOrganizationPage = () => {
  return (
    <Sheet defaultOpen>
      <InterceptedSheetContent>
        <SheetTitle>Create organization</SheetTitle>
      </InterceptedSheetContent>

      <div className="py-4">
        <OrganizationForm />
      </div>
    </Sheet>
  )
}

export default CreateOrganizationPage
