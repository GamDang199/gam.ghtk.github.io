import { toast } from "react-toastify";

const showToast = (mes: string, type: string) => {
  switch (type) {
    case "success":
      toast.success(mes, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;
    case "warning":
      toast.dismiss();
      setTimeout(() => {
        toast.dismiss();
        toast.warn(mes, {
          position: "top-right",
        });
      }, 400);
      break;
    case "error":
      toast.error(mes, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;
    default:
      toast.info(mes);
      break;
  }
};

export default showToast;
