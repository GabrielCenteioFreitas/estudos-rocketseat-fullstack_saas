import { InterceptedSheetContent } from '@/components/intercepted-sheet-content'
import { Sheet, SheetTitle } from '@/components/ui/sheet'

import { OrganizationForm } from '../../org/organization-form'

const CreateOrganizationPage = () => {
  return (
    <Sheet defaultOpen>
      <InterceptedSheetContent>
        <SheetTitle>Create organization</SheetTitle>

        <div className="py-4">
          <OrganizationForm />
        </div>
      </InterceptedSheetContent>
    </Sheet>
  )
}

export default CreateOrganizationPage
