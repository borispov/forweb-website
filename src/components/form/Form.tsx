import clsxm from '@/lib/clsxm';
import React, { SyntheticEvent, useCallback, useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function FormTextField({ children}: {children: React.ReactNode }) {
  return (
    <p className="mb-2 leading-8">
      {children}
    </p>
  )
}

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNum: string;
  budgetEst: string;
  message?: string;
}

// This is for programmatic rendering of form fields, easier to change fields from here
const contactFormFields = [
  [ 'fullName', 'שם מלא *'],
  [ 'companyName', 'שם החברה *'],
  [ 'email', 'כתובת דוא״ל *'],
  [ 'budgetEst', 'תקציב משוער *'],
  [ 'deadlineEst', 'צפי משוער לסיום הפרויקט *'],
  [ 'message', 'נשמח לשמוע על הפרויקט שתרצו לעבוד עליו, או כל דבר שתרצו לשתף איתנו.'],
]

type Option = {
  label: string;
  value: string;
}

const options:Option[] = [
  { label: '< 3,000₪', value: '< 3,000₪' },
  { label: '3,000₪ - 6,000₪', value: '3,000₪ - 6,000₪'},
  { label: '6,000₪ - 15,000₪', value: '6,000₪ - 15,000₪'},
  { label: '15,000₪ +', value: '15,000₪ +'},
]


const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNum: '',
  budgetEst: '',
  message: '',
}


export default function Form() {
  
  const [ formData, formDataSet ] = useState<FormValues>(initialFormData);

  // async function submitHandler(e:SyntheticEvent) {
  //   e.preventDefault();
  // } 


  function inputChangeHandler(e: React.FormEvent<HTMLInputElement>) {
    if (e===null) return;
    e.preventDefault();
    const inputName = e.currentTarget.name;
    formDataSet({
      ...formData,
      [inputName]: e.currentTarget.value,
    })
  }
  const changeInput = useCallback(inputChangeHandler, [formData])

  return (
    <section className='contact-section pb-20'>

      <div className="container px-8 max-w-7xl gap-16 flex lg:flex-row flex-col pt-32">

        <AnimationOnScroll animateIn="animate__backInUp" animateOnce>
          <div className={clsxm(
            "w-60 h-60 bg-primary-300/75 rounded-full absolute right-3/4 -top-15 z-10",
          )}></div>
        </AnimationOnScroll>

        <div className="lg:w-1/2 sm:w-full relative">
          <div className="lg:sticky top-32">
            <h2 className="mb-4 leading-snug text-4xl">
              יש לך רעיון לפרויקט?
              נשמח לפטפט!
            </h2>
            <FormTextField>אם הינכם מעוניינים לעבוד יחד, אנא מלאו את הפרטים בטופס. אנחנו ניצור עמכם קשר 
              בתוך 48 שעות ונדון באפשרויות וצעדי המשך.
            </FormTextField>
            <br />
            <FormTextField>
              לחלופין, מוזמנים לפנות אלינו באמצעות המייל: boris@forweb.co.il
            </FormTextField>
            <FormTextField>
              במידה ואינכם בטוחים בסוג החבילה לה אתם זקוקים, או שתרצו לשאול ולהתייעץ בכל דבר הקשור לפתרונות דיגיטל לעסק שלכם, מוזמנים לפנות להתייעצות.
            </FormTextField>
          </div>
        </div>

        <div className="form-wrapper lg:w-1/2 sm:w-full">
          <form 
            method="POST"
            data-netlify="true" 
            name="contact-form"
            id="contact-form" 
            // onSubmit={submitHandler} 
            className="form">


            {
              contactFormFields.map(([id, placeholder]) => {

                return (
                  <div key={id}>
                    <label className="mb-2 font-bold" htmlFor={id}>{placeholder}</label>
                    {
                      id === 'budgetEst' && (
                        <select 
                          onSelect={(e) => formDataSet({ ...formData, budgetEst: e.currentTarget.value})}
                          className="rounded-sm h-10 py-2 px-3 mb-3 
                            bg-white text-gray-600 text-sm 
                            w-full
                            focus:border-indigo-900 ring-indigo-900
                            transition-all ease-in-out"
                          required
                          id={id}
                        >
                          <option value="בחר אפשרות">בחר אפשרות</option>
                          {/* ITERATE OVER OPTIONS ARRAY and render them into the select tag */}
                        { options.map(opt => (<option key={opt.label} value={opt.value}>{opt.label}</option>)) }
                        </select> 
                      )
                      || (<input
                            onChange={changeInput}
                            required
                            type={id === 'message' ? 'textarea' : 'text'}
                            name={id}
                            id={id}
                            className="rounded-sm h-10 py-2 px-3 mb-3 bg-white text-gray-600 text-sm w-full"
                          />)
                    }
                  </div>
                )
              })
            }
            
            <button 
              type="submit" 
              className="black-button 
                mb-4 mt-6 
                bg-indigo-900 shadow-xl
                hover:button-hover-lg">
              שלח פרטים
            </button>

            <input type="hidden" name="contact-form" value="contact" />
          </form>

        </div>

      </div>

    </section>
  )
}