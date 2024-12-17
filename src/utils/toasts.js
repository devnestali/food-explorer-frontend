import { toast } from "sonner";

export const showToasts = {
    success: message => {
        toast.success(message, {
            duration: 3000,
            position: 'top-center',
        })
    },
    error: message => {
        toast.error(message, {
            duration: 3000,
            position: 'top-center'
        })
    }
};

