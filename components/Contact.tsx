'use client'
import { ContactForm } from '@/types'
import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from './ErrorMessage'
import { toast } from 'react-toastify'

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null)

  const initialValues: ContactForm = {
    user_name: '',
    user_email: '',
    message: ''
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactForm>({ defaultValues: initialValues })

  const handleSendEmail = async (formData: ContactForm) => {
    if (!form.current) return
    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      )
      toast.success('Correo enviado con éxito!')
      reset()
    } catch (error) {
      toast.error('Error al enviar el correo!')
    }
  }
  return (
    <div>
      <h2 className='flex items-center mb-14 text-3xl md:text-4xl font-bold gap-x-3 text-black/80 dark:text-white '>
        <Icon icon='lucide:contact' width='28' height='28' />
        Contacto
      </h2>
      <form className='mx-auto' onSubmit={handleSubmit(handleSendEmail)} ref={form}>
        <div className='mb-5'>
          <label
            htmlFor='name'
            className='block mb-2 text-sm md:text-lg font-medium text-gray-900 dark:text-white'>
            Tu nombre
          </label>
          <input
            type='text'
            id='name'
            placeholder='Como te llamas'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-lg rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white '
            {...register('user_name', {
              required: 'El Nombre es obligatorio'
            })}
          />
          {errors.user_name && <ErrorMessage>{errors.user_name.message}</ErrorMessage>}
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm md:text-lg font-medium text-gray-900 dark:text-white'>
            Tu email
          </label>
          <input
            type='email'
            id='email'
            {...register('user_email', {
              required: 'El Email es obligatorio',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'E-mail no válido'
              }
            })}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-lg rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white '
            placeholder='nombre@gmail.com'
          />
          {errors.user_email && <ErrorMessage>{errors.user_email.message}</ErrorMessage>}
        </div>
        <div className='mb-5'>
          <label
            htmlFor='message'
            className='block mb-2 text-sm md:text-lg font-medium text-gray-900 dark:text-white'>
            Tu mesaje
          </label>
          <textarea
            id='message'
            {...register('message', {
              required: 'El mensaje es obligatorio',
              minLength: {
                value: 10,
                message: 'El mensaje debe tener al menos 10 caracteres'
              }
            })}
            className='block p-2.5 w-full text-sm md:text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white   resize-none'
            placeholder='Deja un mensaje...'></textarea>
          {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
        </div>
        <div className='flex justify-center '>
          <button
            type='submit'
            className='text-black dark:text-white mt-5 items-center px-8 py-2 text-xl font-medium  bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-emerald-700 focus:z-10 
      focus:ring-4 focus:outline-none focus:ring-gray-100  dark:bg-gray-800  dark:border-gray-600 dark:hover:text-white
      dark:hover:bg-gray-700  transition w-full sm:w-auto  text-center  '>
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}
