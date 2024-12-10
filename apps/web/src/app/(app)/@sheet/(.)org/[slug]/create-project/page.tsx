import { ProjectForm } from '@/app/(app)/org/[slug]/create-project/project-form'
import { InterceptedSheetContent } from '@/components/intercepted-sheet-content'
import { Sheet, SheetTitle } from '@/components/ui/sheet'

const CreateProjectPage = () => {
  return (
    <Sheet defaultOpen>
      <InterceptedSheetContent>
        <SheetTitle>Create project</SheetTitle>
      </InterceptedSheetContent>

      <div className="py-4">
        <ProjectForm />
      </div>
    </Sheet>
  )
}

export default CreateProjectPage
