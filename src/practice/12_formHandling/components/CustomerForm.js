import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

const CustomerForm = ({ values, errors, touched, isSubmitting }) => (
    <div>
        <h1>Customer Form</h1>
        <Form>
            <div>
                <Field type="text" name="empname" placeholder="Empname"/>
                {touched.empname && errors.empname && <span style={{ color: 'red' }}>{errors.empname}</span>}
            </div>
            <div>
                <Field type="text" name="empLastName" placeholder="Emp Last Name"/>
                {touched.empLastName && errors.empLastName && <span style={{ color: 'red' }}>{errors.empLastName}</span>}
            </div>
            <div>
                <label>
                    <Field type="checkbox" name="manager" checked={values.manager} />
                    Manager
                </label>
            </div>
            <br/>
            <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
    </div>
)

const FormikEmployeeForm = withFormik({
    mapPropsToValues({empname,empLastName, manager}) {
        return {
            empname: empname || '',
            empLastName: empLastName || '',
            manager: manager || false
        }
    },
    validationSchema: Yup.object().shape({
        empname: Yup.string().min(3, 'Name must be at least 3 characters in length').required('Name is required'),
        empLastName: Yup.string().min(3, 'Last Name must be at least 3 characters in length').required('Last Name is required')
    }),
    handleSubmit(values, { resetForm, setSubmitting, setErrors }) {
        console.log(values);
        setTimeout(() => {
            if (values.empname === 'God') {
                setErrors({ empname: 'You cannot add God as an employee' })
            } 
            else if (values.empLastName === 'God') {
                setErrors({ empLastName: 'You cannot add God as an employee' })
            }
            else{
                resetForm()
                alert(JSON.stringify(values));
            }
			setSubmitting(false);
        }, 1000);
    }
})(CustomerForm)

export default FormikEmployeeForm
