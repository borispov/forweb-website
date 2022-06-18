import React, { SyntheticEvent, useCallback, useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import clsxm from '@/lib/clsxm';

function FormTextField({ children}: {children: React.ReactNode }) {
  return (
    <p className="mb-2 leading-8">
      {children}
    </p>
  )
}

interface FormValues {
  fullName: string;
  companyName: string;
  email: string;
  budgetEst: string;
  deadlineEst: string;
  message?: string;
}

type SuccessState = { state: "success", message: "הטופס נשלח בהצלחה!" }
type FailureState = { state: "failed", message: "שגיאה... נסה שנית" }
type LoadingState = { state: "loading", message: "שולח..." }
type InitState = { state: "init", message: "שלח פרטים" }

type FormState =
  | SuccessState
  | FailureState
  | LoadingState
  | InitState

// This is for programmatic rendering of form fields, easier to change fields from here
const contactFormFields = [
  [ 'fullName', 'שם מלא *', 'name-input'],
  [ 'companyName', 'שם החברה *', 'company-input'],
  [ 'email', 'כתובת דוא״ל *', 'email-input'],
  [ 'budgetEst', 'תקציב משוער *', 'budget-select'],
  [ 'deadlineEst', 'צפי משוער לסיום הפרויקט *', 'deadline-input'],
  [ 'message', 'נשמח לשמוע על הפרויקט שתרצו לעבוד עליו, או כל דבר שתרצו לשתף איתנו.', 'message-input'],
]

type Option = {
  label: string;
  value: string;
}

const options:Option[] = [
  { label: '< 3,000₪', value: '3000' },
  { label: '3,000₪ - 6,000₪', value: '3000-6000'},
  { label: '6,000₪ - 15,000₪', value: '6000-15000'},
  { label: '15,000₪ +', value: '15000+'},
]


const initialFormData = {
  fullName: '',
  companyName: '',
  email: '',
  budgetEst: '',
  deadlineEst: '',
  message: '',
}


export default function Form() {
  
  const [ formData, formDataSet ] = useState<FormValues>(initialFormData);

  const [ formState, setFormState ] = useState<FormState>({ state: 'init', message: 'שלח פרטים' });

  async function submitHandler(e:SyntheticEvent) {
    e.preventDefault();
    
    setFormState({ state: 'loading', message: 'שולח...'})

    console.log(formData);

    const response = await fetch('/api/contact', {
      method: "POST",
      body: JSON.stringify(formData)
    });

    if (response.status === 200) {
      setFormState({ state: 'success', message: 'הטופס נשלח בהצלחה!'});
    } else {
      setFormState({ state: 'failed', message: 'שגיאה... נסה שנית'});
      setTimeout(() => setFormState({ state: 'init', message: 'שלח פרטים'}), 3000);
    }
  } 


  function inputChangeHandler(e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) {
    if (e===null) return;
    e.preventDefault();
    const inputName = e.currentTarget.name;
    formDataSet({
      ...formData,
      [inputName || 'budgetEst']: e.currentTarget.value,
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
            onSubmit={submitHandler}
            name="contact"
            id="contact-form" 
            className="form mb-4">

            {
              contactFormFields.map(([id, placeholder, testid]) => {

                return (
                  <div key={id}>
                    <label className="mb-2 font-bold" htmlFor={id}>{placeholder}</label>
                    {
                      id === 'budgetEst' && (
                        <select 
                          aria-label="select"
                          data-testid={testid}
                          // onSelect={(e) => formDataSet({ ...formData, 'budgetEst': e.currentTarget.value})}
                          onChange={changeInput}
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
                            data-testid={testid}
                            onChange={changeInput}
                            aria-label="text-input"
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
              data-testid="submit-button-test"
              className="black-button 
                mb-4 mt-6 
                bg-[#333]
                text-primary-300
                shadow-xl
                hover:bg-unique3
                button-hover-lg">
                  { formState.message }
            </button>
          </form>

          <a href={process.env.CALENDLY_URL}>
            <p className="text-indigo-600 text-center underline text-base font-bold">* לנוחיותכם, ניתן לקבוע פגישה כאן</p>
          </a>
          
          <a className="" href="https://wa.me/+972508564794">
            <p className="text-center text-base underline text-black">או לשלוח הודעה ב WhatsApp</p>
          </a>
        </div>
      </div>
    </section>
  )
}