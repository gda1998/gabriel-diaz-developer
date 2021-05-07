import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '@sweetalert2/theme-dark/dark.css';

const swalToast = (icon, title, position) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
        icon,
        title,
        toast: true,
        position,
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    });
}

export default swalToast;
