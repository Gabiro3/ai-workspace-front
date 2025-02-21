import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import UpdateTaskForm from "./update-task-form";


const EditTaskDialog = (props: { isOpen: boolean, onClose: () => void, task: any }) => {
  const { isOpen, onClose, task } = props;

  return (
    <Dialog modal={true} open={isOpen} onOpenChange={onClose}>
      <DialogTrigger asChild>
        Edit Task {/* or whatever button you want */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-auto my-5 border-0">
        <UpdateTaskForm onClose={onClose} task={task}/>
      </DialogContent>
    </Dialog>
  );
};

export default EditTaskDialog;
