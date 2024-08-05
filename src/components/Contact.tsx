import { ChangeEvent, FormEvent, FormEventHandler, Fragment, useMemo, useState } from 'react'
import emailjs from "emailjs-com";
import { ComponentDescription, ComponentTitle, FormInput, FormWrapper, GridBox, SkillButton } from './styles'
import { toast } from 'react-toastify';

const contactConfig = [
    {
        label: "Name",
        field: "name",
        inputType: "text"
    },
    {
        label: "Email Address",
        field: "email",
        inputType: "email"
    },
    {
        label: "Message",
        field: "message",
        type: "textArea",
        inputType: "text"
    }
]

const Contact = () => {
    const [contactState, setContactState] = useState<{ [key: string]: any }>({})
    const [showValidations, setShowValidations] = useState(false)

    const updateState = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setContactState(c => ({
            ...c,
            [event.target.name]: event.target.value
        }))
    }

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const errors = useMemo<{ [key: string]: string }>(() => {
        const newErrors: { name?: string; email?: string; message?: string } = {};
        const { name, email, message } = contactState
        if (!name) newErrors.name = 'Name is required';
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(email)) {
            newErrors.email = 'Email is not valid';
        }
        if (!message) newErrors.message = 'Message is required';
        return newErrors;
    }, [contactState]);



    const sendEmail = (e: FormEvent) => {

        e.preventDefault()

        if (Object.keys(errors).length > 0) {
            setShowValidations(true)
            return;
        }

        const templateParams = {
            from_name: contactState.name,
            from_email: contactState.email,
            message: contactState.message,
        };

        const toastId = toast.loading("Please wait! While i send your request")

        emailjs.send(
            'service_v701ody',
            'template_u5ulinu',
            templateParams,
            'Olaunjouyq5GZIwqL'
        ).then(response => {
            console.log('SUCCESS!', response.status, response.text);
            toast.update(toastId, {
                render: "Email send successfully",
                type: "success",
                isLoading: false,
                autoClose: 5000,
                closeOnClick: true
            })
        }).catch(() => {
            toast.update(toastId, {
                render: "Failed to send ur details.Please try again",
                type: "success",
                isLoading: false,
                autoClose: 5000,
                closeOnClick: true
            })
        }).finally(() => {
            setShowValidations(false)
            setContactState({})
        })
    };

    return (
        <FormWrapper id="contact" className='component' onSubmit={sendEmail}>
            <GridBox height={200} rowGap={10}>
                <ComponentTitle margin={"0 0 0 0"}>Let's Talk</ComponentTitle>
                <ComponentDescription margin={"0 0 50px 0"}>Now that you know a lot about me, let me know if you are interested to hire me.</ComponentDescription>
            </GridBox>
            <GridBox rowGap={20} style={{ boxSizing: 'border-box' }}>
                {
                    contactConfig.map(({ label, field, type, inputType }) => (<FormInput flexDirection='column' alignItems='flex-start'>
                        <label>{label}</label>
                        <GridBox className='input-wrapper'>
                            {
                                type === "textArea" ? <textarea placeholder='' name={field} value={contactState[field] ?? ""} onChange={updateState} /> : <input type={inputType} required placeholder={`Enter ${field}`} name={field} value={contactState[field] ?? ""} onChange={updateState} autoComplete={"off"} />
                            }
                            {showValidations && (errors[field] ?? false) && <span className="error">{errors[field]}</span>}
                        </GridBox>

                    </FormInput>))
                }
                <SkillButton type='submit' selected={true} style={{ fontSize: 18 }} onClick={sendEmail}>LET'S GET STARTED</SkillButton>
            </GridBox>
        </FormWrapper>
    )
}

export default Contact