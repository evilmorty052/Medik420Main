import { message } from 'antd';

 const SuccessMessage = (text) => {
    message.success(`${text}`)
}

const ErrorMessage = (text) => {
    message.error(`${text}`)
}
    
export { SuccessMessage, ErrorMessage }